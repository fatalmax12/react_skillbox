import React from 'react';
import styles from './card.css';
import { Controls } from './Controls';
import { Menu } from './Menu';
import { Preview } from './Preview';
import { Publisher } from './Publisher';
import { Dropdown } from '../../Dropdown';
import { GenericList } from '../../GenericList';
import { assignId, generateId, generateRandomString } from "../../../utils/react/generateRandomIndex";
import { merge } from '../../../utils/js/merge';

const LIST = [
  { As: 'a' as const, text: 'Комментарии', className: 'comments', href: '#' },
  { As: 'a' as const, text: 'Поделиться', className: 'share', href: '#' },
  { As: 'a' as const, text: 'Скрыть', className: 'hide', href: '#' },
  { As: 'a' as const, text: 'Сохранить', className: 'save', href: '#' },
  { As: 'a' as const, text: 'Пожаловаться', className: 'complain', href: '#' },
].map((item) => ({...item, id: generateRandomString()}));

export function Card() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  }

  // const handleAdd = () => {
  //   setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
  // }

  return (
    <li className={styles.card}>
      <Preview />
      <div className={styles.previewInfo}>
        <h1>Для современного мира дальнейшее развитие всех систем</h1>
        <Publisher />
        <div className={styles.social}>
          <div>
            <span>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.2 0L13.032 1.90833L9.128 5.975L5.928 2.64167L0 8.825L1.128 10L5.928 5L9.128 8.33333L14.168 3.09167L16 5V0H11.2Z" fill="#999999"/>
              </svg>
            </span>
            <span>Статистика публикации</span>
          </div>
          <div>
            <span>
              <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z" fill="#999999"/>
              </svg>
            </span>
            <span>Поделиться</span>
          </div>
          <div>
            <span>
              <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.714286 10.6667C0.714286 11.4 1.35714 12 2.14286 12H7.85714C8.64286 12 9.28571 11.4 9.28571 10.6667V2.66667H0.714286V10.6667ZM2.14286 4H7.85714V10.6667H2.14286V4ZM7.5 0.666667L6.78571 0H3.21429L2.5 0.666667H0V2H10V0.666667H7.5Z" fill="#999999"/>
              </svg>
            </span>
            <span>Удалить</span>
          </div>
        </div>
      </div>
      <div className={styles.settings}>
        <Dropdown onOpen={() => console.log('opened')} onClose={() => console.log('closed')} isOpen={false} button={<Menu />}>
          <div className={styles.bgMenu}>
            {/* <button onClick={handleAdd}>Add Element</button> */}
            <ul className={styles.list}>
              <GenericList list={LIST.map(merge({ onClick: handleItemClick }))} />
            </ul>
          </div>
        </Dropdown>
        <Controls />
      </div>
    </li>
  );
}
