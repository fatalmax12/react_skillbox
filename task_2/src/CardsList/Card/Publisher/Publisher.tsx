import React from 'react';
import styles from './publisher.css';

export function Publisher() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <img src="" alt="avatar" className={styles.avatar} />
          <a href="" className={styles.username}></a>
        </div>
        <span className={styles.createAt}></span>
      </div>
      <h2 className={styles.title}>
        <a href="" className={styles.postLink}>
          Не следует, однако, забывать, что современная...
        </a>
      </h2>
    </div>
  );
}
