// represents individual track. You can add static structure to represent a song.

import React from "react";
import styles from "./Track.module.css";

function Track() {
    return (
        <div className={styles.track}>
            <div clssName={styles.info}>
                <h3>Track Name</h3>
                <p>Artist | Album</p> 
            </div>
            <button className={styles.button}>+</button>
        </div>
    );
}

export default Track;