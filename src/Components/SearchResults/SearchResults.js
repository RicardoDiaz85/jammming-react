// Displays mock search results using the Tracklist component.
import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./SearchResults.module.css";

/* 
Search Results component receives 
        tracks - an array of tracks(your Search Results state in App.js)
        onAdd - function to add a track to the playlist.    
The SearchResults component should:
        Pass tracks to a Tracklist component.
        The Tracklist will render a Track component for each track.
*/
function SearchResults({ tracks, onAdd }) {
  return (
    <div className={styles.searchResults}>
      {/* Pass tracks to Tracklist */}
      <Tracklist tracks={tracks} onAdd={onAdd} isRemoval={false} />
    </div>
  );
}

export default SearchResults;
