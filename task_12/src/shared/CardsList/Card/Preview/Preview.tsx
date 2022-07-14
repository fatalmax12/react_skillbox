import React from "react";
import styles from "./preview.css";

interface IPreviewProps {
  image: string;
}

export function Preview({ image }: IPreviewProps) {
  return (
    <div className={styles.previewBlock}>
      <h2 className={styles.headerCard}></h2>
      <img
        className={styles.preview}
        src={
          image === ""
            ? "https://cdn.dribbble.com/users/1355613/screenshots/15234311/media/863e1b6962855907bf7b31f09a4c3eb1.jpg?compress=1&resize=400x300"
            : image
        }
        alt="logo"
      />
    </div>
  );
}
