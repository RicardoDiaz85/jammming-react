// This is my main container component that will render all the other components.
// It will hold all other components and manage state as you build the app further.

import React, { useState, useEffect } from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css'; //my css module
import { getAccessToken, searchSpotify } from '../../utils/SpotifyAuth'; // import the methods. Import searchSpotify function and connect to the search bar


function App() {
    const [token, setToken] = useState(null);
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

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

    // State for playlist name - Manages the name of the playlist
    const [playlistName, setPlaylistName] = useState(""); // Default Value

    // State for playlist tracks - Stores tracks the user adds to the playlist
    const [playlistTracks, setPlaylistTracks] = useState([]);

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

    const savePlaylist = () => {
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
    
    /* Passed props to SearchResults and Playlist components . SearchResults receives tracks(search results) and onAdd(to ass tracks to the playlist
    Playlist receives name, tracks (playlist), and onRemove(to remove tracks from the playlist)*/
    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Jammming</h1>
            <SearchBar onSearch={handleSearch} /> 
            <div>    
                {/* Pass search results and addTrack function to SearchResults */}
                <SearchResults 
                    tracks={searchResults} 
                    onAdd={addTrack} 
                />
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
    );
};

export default App;
