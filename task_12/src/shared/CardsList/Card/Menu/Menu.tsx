import React, { useEffect } from "react";
import styles from "./menu.css";
import { MenuIcon } from "../../../icons/MenuIcon";
import { Dropdown } from "../../../Dropdown";
import { EColors, Text } from '../../../Text';
import { MenuItemsList } from "./MenuItemsList";

export function Menu() {
  const [dropdown, setDropdown] = React.useState(false);

  useEffect(()=>{
    setDropdown(true);
  },[]);

  return (
    <div className={styles.menuBlock}>
      { dropdown && <Dropdown
        button={
          <button className={styles.menuButton}>
            <MenuIcon />
          </button>
        }
      >
        <div className={styles.dropdown}>
          <MenuItemsList postId="1"/>
          <button className={styles.closeButton}>
            <Text mobileSize={12} size={14} color={EColors.grey66}>
              Закрыть
            </Text>
          </button>
        </div>

       </Dropdown> }
    </div>
  );
}
