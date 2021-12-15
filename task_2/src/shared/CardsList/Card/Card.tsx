import React from 'react';
import styles from './card.css';
import { Preview } from './Preview';
import { CardSettings } from './CardSettings';
import { CardContent } from './CardContent';

export function Card() {
  return (
    <li className={styles.card}>
      <Preview />
      <CardContent />
      <CardSettings />
    </li>
  );
}
