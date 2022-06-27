import React, { useContext } from 'react';
import styles from './cardslist.css';
import { Card } from './Card';
import { postContext } from '../context/PostsContext';

export function CardsList() {
  const { after, before } = useContext(postContext);

  return (
    <ul className={styles.cardList}>
      <Card />
      {<li>{after}{before}</li>}
    </ul>
  );
}
