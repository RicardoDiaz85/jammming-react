//static search input and button
import React, {useState} from "react";
import styles from './SearchBar.module.css';

function SearchBar({onSearch}) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query); // Trigger search with the query
        }
    };

    return (
        <div className={styles.searchBar}>
            <input 
                className={styles.input} 
                type="text" 
                placeholder="Enter a song, album or artist"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className={styles.button} onClick={handleSearch}>SEARCH</button>
        </div>
    );    
}

export default SearchBar;
