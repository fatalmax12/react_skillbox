import React from 'react';
import styles from './card.css';
import { Preview } from './Preview';
import { CardSettings } from './CardSettings';
import { CardContent } from './CardContent';

interface ICardProps {
  image: string;
  title: string;
  author: string;
  authorImg: string;
}

export function Card({ image, title, author, authorImg }: ICardProps) {
  return (
    <li className={styles.card}>
      <Preview image={image}/>
      <CardContent title={title} author={author} authorImg={authorImg}/>
      <CardSettings />
    </li>
  );
}
