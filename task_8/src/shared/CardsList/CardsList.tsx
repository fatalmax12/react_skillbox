import React, { useContext } from "react";
import styles from "./cardslist.css";
import { Card } from "./Card";
import { postContext } from "../context/PostsContext";

export function CardsList() {
  const { data } = useContext(postContext);
  console.log(data);

  return (
    <ul className={styles.cardList}>
      {data.length !== 0 ?
        data.map((el: any) => {
          return (
            <Card
              key={el.data.id}
              image={el.data.sr_detail.banner_img}
              title={el.data.title}
              author={el.data.author}
              authorImg={el.data.sr_detail.icon_img}
            />
          );
        }) : 'No posts. Please login.'}
    </ul>
  );
}
