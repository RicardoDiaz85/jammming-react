// This is my main container component that will render all the other components.
// It will hold all other components and manage state as you build the app further.

import React from 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import styles from './App.module.css';

function App() {
    return (
        <div className={styles.app}>
            <h1 className={styles.header}>Jammming</h1>
            <SearchBar />
            <div>    
                <SearchResults />
                <Playlist />
            </div>
        </div>
    );
}

export default App;