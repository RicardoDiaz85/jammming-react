// This is my main container component that will render all the other components.
// It will hold all other components and manage state as you build the app further.

import React form 'react';
import SearchBar from '../SearchBar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import './App.module.css';

function App() {
    return (
        <div className="App">
            <h1> Jammming</h1>
            <SearchBar />
            <div className="App-playlist">    
                <SearchResults />
                <Playlist />
            </div>
        </div>
    );
}

export default App;