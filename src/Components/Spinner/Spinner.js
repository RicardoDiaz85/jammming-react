
import React from "react";
import styles from './Spinner.module.css';

function LoadingSpinner() {

    return (
        <div className={styles.spinnerOverlay}>
            <div className={styles.spinner}></div>
        </div>
    );

}

export default LoadingSpinner;