//Renders a list of track components using mock data for now.
import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

function Tracklist( {tracks = []} ) { //default to empty array if track is undefined.

    return (
        <div className={styles.tracklist}>
            {tracks.map(track => (       
                <Track
                    key={track.id} // Unique key for React's reconciliation
                    name={track.name}
                    artist={track.artist}
                    album={track.album}
                />
            ))}
        </div>
    );
}

export default Tracklist;
