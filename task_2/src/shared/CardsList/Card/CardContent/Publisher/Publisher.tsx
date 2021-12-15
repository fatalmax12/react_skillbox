import React from 'react';
import styles from './publisher.css';

export function Publisher() {
  return (
    <div className={styles.textContent}>
      <div className={styles.metaData}>
        <div className={styles.userLink}>
          <span className={styles.publicTime}>опубликовано 8 часов назад</span>
          <div  className={styles.avatar}><img src="" /></div>
          <a href="" className={styles.username}>Константин Кодов</a>
        </div>
        {/* <span className={styles.createAt}></span> */}
      </div>
      {/* <h2 className={styles.title}>
        <a href="" className={styles.postLink}>
          Не следует, однако, забывать, что современная...
        </a>
      </h2> */}
    </div>
  );
}
