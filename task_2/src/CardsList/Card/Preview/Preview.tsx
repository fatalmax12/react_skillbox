import React from 'react';
import styles from './preview.css';;

export function Preview() {
  return (
    <div className={styles.previewBlock}>
      <h2 className={styles.headerCard}></h2>
      <div className={styles.preview}></div>
      {/* <img src="../../../../images/Rectangle14.png" alt="logo" /> */}
    </div>
  );
}
