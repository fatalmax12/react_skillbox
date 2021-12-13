import React from 'react';
import styles from './text.css';

interface ITextProps {
  children: React.ReactNode;
  mobileSize: number;
  size: number;
  color: string;
}

export function Text({children} : ITextProps) {
  return (
    <div>
      {children}
    </div>
  );
}
