// this component show a static playlist with a save to Spotify button

import React from "react";
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';
/*
The Playlist component receives:
    name: The playlist name (your playlistName state in App.js).
    tracks: An array of tracks (your playlistTracks state in App.js).
    onRemove: A function to remove a track from the playlist. 
*/
function Playlist({ name, setName, tracks, onRemove}) {
    // Handle inputchanges
    const handleNameChange = (event) => {
        setName(event.target.value); // Update the playlist name in state
    };

    return (
        <div className={styles.playlist}>
            {/* Displays the playlist name */}
            <input 
                className={styles.title} 
                value={name}
                onChange={handleNameChange} 
                placeholder="Enter Playlist Name"
            />
            {/* Pass tracks and onRemove to the Tracklist */}
            <Tracklist tracks={tracks} onRemove={onRemove} isRemoval={true} />
            <button className={styles.button}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
