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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault(); // Prevent default form submission (if inside a form)
          handleSearch(); // Trigger the same function as button click
        }
    };

    return (
        <div className={styles.searchBar}>
            <input className={styles.input} 
                type="text" 
                placeholder="Enter a song, album or artist"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyPress} // Listen for Enter key
            />
            <button className={styles.button} onClick={handleSearch}>SEARCH</button>
        </div>
    );    
}

export default SearchBar;
