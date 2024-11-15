import React from "react";
import styles from "./Track.module.css";

function Track({ name, artist, album }) {
  return (
    <div className={styles.track}>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{artist}</p>
        <p><em>{album}</em></p>
      </div>
      <button className={styles.button}>+</button>
    </div>
  );
}

export default Track;
