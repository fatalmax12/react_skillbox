import React from "react";
import styles from "./menuitemslist.css";
import { EColors, Text } from '../../../../Text'
import { CommentIcon, BlockIcon, ShareIcon, LoadIcon, WarningIcon } from "../../../../icons";
import Icon from "./Icon/Icon";


interface IMenuItemsListProps {
  postId: string
}

export enum EIcons {
  comments = 'CommentIcon',
  share = 'ShareIcon',
  block = 'BlockIcon',
  load = 'LoadIcon',
  warning = 'WarningIcon',
}

export function MenuItemsList({ postId }: IMenuItemsListProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon name={EIcons.comments} size={14} />
        <Text mobileSize={12} size={14} color={EColors.grey99} >
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
      <div className={styles.divider}></div>
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
