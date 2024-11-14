//static search input and button
import React from "react";
import styles from './SearchBar.module.css';

function SearchBar() {
    return (
        <div className={styles.searchBar}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Enter a song, album or artist" 
            />
            <button className={styles.button}>SEARCH</button>
        </div>
    );    
}

export default SearchBar;
