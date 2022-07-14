import React from 'react';
import styles from './cardsettings.css';
import { Dropdown } from '../../../Dropdown';
import { Menu } from '../Menu';
import { MenuItemsList } from '../Menu/MenuItemsList';
import { assignId, generateId, generateRandomString } from "../../../../../utils/react/generateRandomIndex";
import { Controls } from '../Controls';

const LIST = [
  { As: 'a' as const, text: 'Комментарии', className: 'comments', href: '#' },
  { As: 'a' as const, text: 'Поделиться', className: 'share', href: '#' },
  { As: 'a' as const, text: 'Скрыть', className: 'hide', href: '#' },
  { As: 'a' as const, text: 'Сохранить', className: 'save', href: '#' },
  { As: 'a' as const, text: 'Пожаловаться', className: 'complain', href: '#' },
].map((item) => ({...item, id: generateRandomString()}));

export function CardSettings() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  }

  return (
      <div className={styles.settings}>
        <Menu />
        <Controls />
      </div>
  );
}
