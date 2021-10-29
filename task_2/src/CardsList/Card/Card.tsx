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
  { As: 'li' as const, text: 'some' },
  { As: 'li' as const, text: 'other some' },
  { As: 'li' as const, text: 'some 2' },
].map((item) => ({...item, id: generateRandomString()}));

export function Card() {
  const [list, setList] = React.useState(LIST);

  const handleItemClick = (id: string) => {
    setList(list.filter((item) => item.id !== id));
  }

  const handleAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString(), As: 'li' as const })));
  }

  return (
    <li className={styles.card}>
      <div className={styles.textContent}></div>
      <div className={styles.publisher}>
        <Publisher />
        <Dropdown onOpen={() => console.log('opened')} onClose={() => console.log('closed')} isOpen={false} button={<Menu />}>
          <div className={styles.bgMenu}>
            <button onClick={handleAdd}>Add Element</button>
            <ul>
              <GenericList list={LIST.map(merge({ onClick: handleItemClick }))} />
            </ul>
          </div>
        </Dropdown>
      </div>
      <Preview />
      <Controls />
    </li>
  );
}
