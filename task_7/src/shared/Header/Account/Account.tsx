import React from "react";
import IconAnon from "../../icons/IconAnon";
import { EColors } from "../../Text";
import styles from "./account.css";
import { Text } from '../../Text'

interface IIconsProps {
  avatarSrc?: string;
  username?: string;
}

export function Account({ avatarSrc, username }: IIconsProps) {
  let link = `https://www.reddit.com/api/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity`;
  return (
    <a
    href={link}
    className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc ? <img src={avatarSrc} alt="user avatar" className={styles.avatarImage}/> : <IconAnon />}
      </div>
      <div className={styles.username}>
        <br/>
        <Text size={20} color={username ? EColors.black : EColors.grey66}>{username || 'Аноним'}</Text>
      </div>
    </a>
  );
}
