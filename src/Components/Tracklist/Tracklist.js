//Renders a list of track components using mock data for now.
import React from "react";
import Track from "../Track/Track";
import styles from "./Tracklist.module.css";

/* 
The Tracklist component receives:
    tracks: An array of tracks to render.
    onAdd or onRemove: Functions to add or remove a track.
    isRemoval: A boolean indicating whether tracks can be removed (true) or added (false).
The Tracklist should:
    Map through the tracks array and render a Track component for each track.
*/

function Tracklist({ tracks = [], onAdd, onRemove, isRemoval }) {
    return (
        <div className={styles.tracklist}>
            {tracks.map((track) => (
                <Track
                    key={track.id}
                    track={track}
                    onAdd={onAdd}
                    onRemove={onRemove}
                    isRemoval={isRemoval}
                />
            ))}
        </div>
    );
}


export default Tracklist;