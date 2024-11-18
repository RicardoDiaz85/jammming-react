import React from "react";
import styles from "./Track.module.css";
/*
The Track component receives:
    track: The track object containing name, artist, and album.
    onAdd or onRemove: Functions to add or remove the track.
    isRemoval: Boolean indicating whether the track should display a "+" or "-" button.
The Track component should display:
    track.name, track.artist, and track.album.
    A button to add or remove the track. 
*/

function Track({ track = {}, onAdd, onRemove, isRemoval }) {
    const handleAction = () => {
        if (isRemoval) {
            onRemove(track);
        } else {
            onAdd(track);
        }
    };

  return (
    <div className={styles.track}>
      <div className={styles.info}>
            <h3>{track.name || 'Unknown Track'}</h3>
            <p>{track.artist || 'Unknown Artist'} | {track.album || 'Unknown Album'}</p>
      </div>
      <button className={styles.button} onClick={handleAction}>
            {isRemoval ? '-' : '+'}   
      </button>
    </div>
  );
}

export default Track;
