import React, { useContext } from 'react';
import styles from './searchblock.css';
import { Account } from "../Account";
import useUserData from '../../../hooks/useUserData';
import { userContext } from '../../context/userContext';

export function SearchBlock() {
  const { iconImg, name, loading } = useContext(userContext);

  return (
    <>
    <div className={styles.searchBlock}>
      <span className={styles.searchIcon}>
      <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.5792 11.9497H12.721L12.4168 11.6564C13.4814 10.418 14.1224 8.81018 14.1224 7.06118C14.1224 3.16124 10.9611 0 7.06118 0C3.16124 0 0 3.16124 0 7.06118C0 10.9611 3.16124 14.1224 7.06118 14.1224C8.81018 14.1224 10.418 13.4814 11.6564 12.4168L11.9497 12.721V13.5792L17.3814 19L19 17.3814L13.5792 11.9497ZM7.06118 11.9497C4.3562 11.9497 2.17267 9.76615 2.17267 7.06118C2.17267 4.3562 4.3562 2.17267 7.06118 2.17267C9.76615 2.17267 11.9497 4.3562 11.9497 7.06118C11.9497 9.76615 9.76615 11.9497 7.06118 11.9497Z" fill="#C4C4C4"/>
      </svg>
      </span>
      <input className={styles.searchInput} type="text" placeholder="Поиск"/>
    </div>
    <Account avatarSrc={iconImg} username={name} loading={loading}/>
    </>
  );
}
