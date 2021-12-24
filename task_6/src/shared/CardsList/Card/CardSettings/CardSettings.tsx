import React from 'react';
import styles from './cardsettings.css';
import { Dropdown } from '../../../Dropdown';
import { Menu } from '../Menu';
import { MenuItemsList } from '../../../MenuItemsList';
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
  // const handleAdd = () => {
  //   setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
  // }

  return (
      <div className={styles.settings}>
        <Dropdown onOpen={() => console.log('opened')} onClose={() => console.log('closed')} isOpen={false} button={<Menu />}>
          {/* <div className={styles.bgMenu}>
             <button onClick={handleAdd}>Add Element</button>
            <ul className={styles.list}>
              <GenericList list={LIST.map(merge({ onClick: handleItemClick }))} />
            </ul>
          </div> */}
          <MenuItemsList postId = '1'/>
        </Dropdown>
        <Controls />
      </div>
  );
}
