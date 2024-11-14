//Renders a list of track components using mock data for now.
import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

function Tracklist() {
    return (
        <div className={styles.tracklist}>
            <Track />
            <Track />
            <Track />
        </div>
    );
}

export default Tracklist;
