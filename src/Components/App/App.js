// This is my main container component that will render all the other components.
// It will hold all other components and manage state as you build the app further.

import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css'; //my css module
import { getAccessToken, searchSpotify, getUserId, createPlaylist, addTracksToPlaylist } from '../../utils/SpotifyAuth'; // import the methods. Import searchSpotify function and connect to the search bar


function App() {
    const [token, setToken] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    // State for playlist name - Manages the name of the playlist
    const [playlistName, setPlaylistName] = useState(""); // Default Value
    // State for playlist tracks - Stores tracks the user adds to the playlist
    const [playlistTracks, setPlaylistTracks] = useState([]);
    

    useEffect(() => {
        const token = getAccessToken(); // Parse the token
        setToken(token); // store it in state for later use
        //console.log("Spotify Access Token:", token); // Test if token is retrieved... now logs the token
    }, []);

    const handleSearch = async (query) => {
        try {
            const results = await searchSpotify(query, token);
            setSearchResults(results); // Update state with search results
            console.log("Search Results:", results); // Debugging
        } catch (error) {
            console.log("Error during Spotify search:", error);
        }
    };
    

    // State for search results for testing
        //const [searchResults] = useState([
        //{ id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1', uri:'spotify:track:1'},
        //{ id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2', uri:'spotify:track:2'},
        //{ id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3', uri:'spotify:track:3'},
    //]);


    /* Function to add a track to the playlist - Checks if the track is already in the playlist using its unique id.
    If not, it is adds the track to the PlaylistTracks state.*/
    const addTrack = (track) => {
        if (!playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
            setPlaylistTracks([...playlistTracks, track]);
        }
    };

    // Function to remove a track from the playlist by filtering out tracks with matching id.
    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter((savedTrack) => savedTrack.id !== track.id));
    };

    //update the savePlaylist function to: 1. Fetch the user’s Spotify ID. 2. Create a playlist with the custom name. 3. Add the selected tracks to the newly created playlist.
    /*const savePlaylist = () => {
        // Extract the uri values from each track in the playlist
        const trackUris = playlistTracks.map(track => track.uri);
        
        if (trackUris.length === 0) {
            alert("Your playlist is empty!");
            return;
        }
    
        console.log("Saving playlist with URIs:", trackUris);
    
        // Reset the playlist (optional for now)
        setPlaylistTracks([]);
        setPlaylistName("New Playlist");
    };
    */

    const savePlaylist = async () => {
        if (!token) {
            alert("You need to log in to save a playlist!");
            return;
        }
    
        if (playlistTracks.length === 0) {
            alert("Your playlist is empty!");
            return;
        }
    
        try {
            // Get the user's Spotify ID
            const userId = await getUserId(token);
            console.log("User ID:", userId);
    
            // Create a new playlist with the custom name
            const playlistId = await createPlaylist(userId, playlistName, token);
            console.log("Playlist ID:", playlistId);
    
            // Extract track URIs from the playlistTracks state
            const trackUris = playlistTracks.map((track) => track.uri);
    
            // Add tracks to the new playlist
            await addTracksToPlaylist(playlistId, trackUris, token);
            console.log("Tracks added to playlist!");
    
            // Reset the playlist state
            setPlaylistName("New Playlist");
            setPlaylistTracks([]);
            alert("Playlist saved successfully!");
        } catch (error) {
            console.error("Error saving playlist:", error);
            alert("There was an error saving your playlist. Please try again.");
        }
    };
    
    
    /* Passed props to SearchResults and Playlist components . SearchResults receives tracks(search results) and onAdd(to ass tracks to the playlist
    Playlist receives name, tracks (playlist), and onRemove(to remove tracks from the playlist)*/
    return (
        <div>
                <div className= {styles.navbar}> 
                    <h1 className={styles.header}>Jammming</h1>
                    <button className={styles.button} /*onClick={handleSignOut}*/>SIGN OUT</button>
                </div>
        
                <div className={styles.app}>
            
                     <div className={styles.searchContainer}>  
                          
                            <SearchBar onSearch={handleSearch} /> 
                            {/* Pass search results and addTrack function to SearchResults */}
                            <h2 className={styles.title}>Results</h2>
                            <SearchResults 
                                tracks={searchResults} 
                                onAdd={addTrack} 
                            />
                        
                    </div>
                    <div>
                            {/* Pass playlist data, removeTrack function, and playlist name to Playlist */}
                            <Playlist 
                                name={playlistName} 
                                setName={setPlaylistName} 
                                tracks={playlistTracks} 
                                onRemove={removeTrack} 
                                onSave={savePlaylist}
                            />
                    </div>
                </div>
        </div>
    );
};

export default App;
