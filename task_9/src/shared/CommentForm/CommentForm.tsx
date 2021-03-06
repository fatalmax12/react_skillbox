import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from "react";
import { commentContext } from "../context/commentContext";
import styles from "./commentform.css";

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);
  // const ref = useRef<HTMLTextAreaElement>(null);
  // const [value, setValue] = useState('');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        // ref={ref} - неуправляемый
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
