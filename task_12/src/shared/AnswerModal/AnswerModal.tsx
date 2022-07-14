import React from "react";
import { answerContext } from "../context/answerContext";
import styles from "./answermodal.css";

interface IProps {
  isVisibleAnswerForm: boolean;
  authorName: string;
}

export const AnswerModal = (props: IProps) => {
  const ref = React.useRef<HTMLTextAreaElement>(null);
  // const { value, onChange } = React.useContext(answerContext);
  const [value, setValue] = React.useState('');

  function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  React.useEffect(()=>{
    if (ref.current) {
      ref.current.focus();
    }
  }, [props.isVisibleAnswerForm])

  return (
    <div className={styles.answerModal} >
      <p>Ответ для {props.authorName}</p>
      <form className={styles.form} onSubmit={handleSubmit}>
        <textarea
          className={styles.input}
          value={value}
          onChange={handleChange}
          ref={ref}
        />
        <button type="submit" className={styles.button}>
          Ответить
        </button>
      </form>
    </div>
  );
};
