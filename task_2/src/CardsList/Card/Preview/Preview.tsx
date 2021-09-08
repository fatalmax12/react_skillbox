import React from 'react';
import styles from './preview.css';

export function Preview() {
  return (
    <div>
      <h2 className={styles.headerCard}></h2>
      <div className={styles.preview}></div>
    </div>
  );
}
