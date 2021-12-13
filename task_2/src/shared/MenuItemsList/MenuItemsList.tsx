import React from "react";
import styles from "./menuitemslist.css";
import { Icon } from "./Icon";
import { Text } from './Text'

interface IMenuItemsListProps {
  postId: string
}

const EIcons = {
  comments : 'one',
  share : 'two',
  block : 'three',
  load : 'four',
  warning : 'five',
}

const EColors = {
  grey99 : 'grey',

}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem}>
        <Icon name={EIcons.comments} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Комментарии
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <Icon name={EIcons.share} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Поделиться
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <Icon name={EIcons.block} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Скрыть
        </Text>
      </li>
      <div></div>
      <li className={styles.menuItem}>
        <Icon name={EIcons.load} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Сохранить
        </Text>
      </li>
      <div className={styles.divider}></div>
      <li className={styles.menuItem}>
        <Icon name={EIcons.warning} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
