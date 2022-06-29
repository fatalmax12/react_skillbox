import React, { useEffect, useState } from "react";
import { Account } from "./Account";
import styles from "./header.css";
import { HeaderIndicators } from "./HeaderIndicators";
import { SearchBlock } from "./SearchBlock";
import { SortBlock } from "./SortBlock";
import { ThreadTitle } from "./ThreadTitle";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <ThreadTitle />
        <SortBlock />
      </div>
      <div className={styles.header__right}>
        <HeaderIndicators />
        <SearchBlock />
        <Account avatarSrc={''} username={''} />
      </div>
      <ul className={styles.contentMenu}>
        <li>Просмотренное</li>
        <li>Сохранённое</li>
        <li>Мои посты</li>
        <li>Прокомментированное</li>
      </ul>
    </header>
  );
}
