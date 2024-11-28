// this component show a static playlist with a save to Spotify button

import React from "react";
import Tracklist from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";
import LoadingSpinner from "../Spinner/Spinner";

/*
The Playlist component receives:
    name: The playlist name (your playlistName state in App.js).
    tracks: An array of tracks (your playlistTracks state in App.js).
    onRemove: A function to remove a track from the playlist. 
*/
function Playlist({ name = "", setName, tracks, onRemove, onSave, isSaving }) {
  // Handle inputchanges
  const handleNameChange = (event) => {
    setName(event.target.value); // Dynamically Update the playlist name in state
  };

  // Handle pressing Enter key
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      onSave(); // Trigger the onSave function when Enter is pressed
    }
  };

  return (
    <div className={styles.playlistWrapper}>
      <input
        className={styles.title}
        value={name} // Ensure value is always defined.
        onChange={handleNameChange}
        placeholder="Enter Playlist Name"
        onKeyDown={handleKeyPress} // Add key press listener
      />
      <div className={styles.playlist}>
        {/* Displays the playlist name */}

        {/* Pass tracks and onRemove to the Tracklist */}
        <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true} />
      </div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={onSave} disabled={isSaving}>
          {" "}
          {/*Disable button during save*/}
          {isSaving ? "SAVING..." : "SAVE TO SPOTIFY"}
        </button>
      </div>
      {isSaving && <LoadingSpinner />} {/* Show spinner during save */}
    </div>
  );
}

export default Playlist;
