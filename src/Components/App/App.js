// This is my main container component that will render all the other components.
// It will hold all other components and manage state as you build the app further.

import React, { useState } from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css'; //my css module

function App() {
    // State for search results
    const [searchResults] = useState([
        { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
        { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
        { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
        // Add more sample tracks if desired
      ]);

    // State for playlist name - Manages the name of the playlist
    const [playlistName, setPlaylistName] = useState("New Playlist");

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

    /* Passed props to SearchResults and Playlist components . SearchResults receives tracks(search results) and onAdd(to ass tracks to the playlist
    Playlist receives name, tracks (playlist), and onRemove(to remove tracks from the playlist)*/
    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Jammming</h1>
            <SearchBar />
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
                />
            </div>
        </div>
    );
}

export default App;
