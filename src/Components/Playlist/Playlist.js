// this component show a static playlist with a save to Spotify button

import React from "react";
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist() {
    return (
        <div className={styles.playlist}>
            <input className={styles.title} value="New Playlist"/>
            <Tracklist />
            <button className={styles.button}>SAVE TO SPOTIFY</button>
        </div>
    );
}

export default Playlist;
