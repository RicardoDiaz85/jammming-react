// Displays mock search results using the Tracklist component.
import React from "react";
import Tracklist from "../Tracklist/Tracklist"
import styles from './SearchResults.module.css';

function SearchResults( {tracks} ) {

    return (
        <div className={styles.searchResults}>
            <h2 className={styles.title}>Results</h2>
            <Tracklist tracks={tracks} /> {/* Pass tracks to Tracklist */}
        </div>
    );
}

export default SearchResults;
