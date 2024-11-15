// This is my main container component that will render all the other components.
// It will hold all other components and manage state as you build the app further.

import React, { useState } from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css'; //my css module

function App() {

    const [searchResults, setSearchResults] = useState([
        { id: 1, name: 'Track 1', artist: 'Artist 1', album: 'Album 1' },
        { id: 2, name: 'Track 2', artist: 'Artist 2', album: 'Album 2' },
        { id: 3, name: 'Track 3', artist: 'Artist 3', album: 'Album 3' },
        // Add more sample tracks if desired
      ]);

    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Jammming</h1>
            <SearchBar />
            <div>    
                <SearchResults tracks={searchResults} /> {/* Pass search results to SearchResults */}
                <Playlist /> {/* Placeholder for Playlist */}
            </div>
        </div>
    );
}

export default App;