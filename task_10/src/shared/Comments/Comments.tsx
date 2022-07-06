import React, { MouseEvent } from "react";
import { AnswerModal } from "../AnswerModal";
import { Account } from "../Header/Account";
import { AnswerIcon } from "../icons";
import styles from "./comments.css";

export function Comments() {

  const [isVisibleAnswerForm, setIsVisibleAnswerForm] = React.useState(false);
  const [authorName, setAuthorName] = React.useState("");
  // const [textAnswer, setTextAnswer] = React.useState("");

  const openAnswerForm = (e: MouseEvent<HTMLButtonElement, Event>) => {
    setIsVisibleAnswerForm(true);
    setAuthorName(e.currentTarget.parentNode?.parentNode?.querySelector('.author-name')?.textContent as string);
  };

  return (
    <div className={styles.comments}>
      <div className={styles.comment}>
        <div className={styles.answerInfo}>
          <a href="#" className="author-name">
            Михаил Рогов
          </a>
        </div>
        <div className={styles.answerText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
          quisquam libero laboriosam minus aliquid quaerat doloribus architecto
          quod dicta soluta! Dicta at voluptatibus quae est modi, minima
          perspiciatis dolore reiciendis.
        </div>
        <div className={styles.answerButtons}>
          <button className={styles.btn} onClick={(e) => openAnswerForm(e)}>
            <AnswerIcon width="15" height="15" />
            Ответить
          </button>
          <button className={styles.btn}>Поделится</button>
          <button className={styles.btn}>Пожаловаться</button>
        </div>
        <div className={styles.answer}></div>
      </div>
      <div className={styles.answerModal}>
        {isVisibleAnswerForm && <AnswerModal authorName={authorName} isVisibleAnswerForm={isVisibleAnswerForm} />}
      </div>
    </div>
  );
}
