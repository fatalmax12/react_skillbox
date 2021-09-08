import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
// import { Menu } from './Menu';
import { Preview } from './Preview';
import { Publisher } from './Publisher';

export function Card() {
  return (
    <li className={styles.card}>
      <div className={styles.textContent}></div>
      <div className={styles.publisher}>
        <Publisher />
        <Menu />
      </div>
      <Preview />
      <Controls />
    </li>
  );
}
