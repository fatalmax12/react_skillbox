import React from "react";
import styles from "./commentform.css";
import { FormikTouched, FormikValues, useFormik } from "formik";

export function CommentForm() {
  // const [value, setValue] = React.useState("");
  // const [touched, setTouched] = React.useState(false);
  // const [valueError, setValueError] = React.useState("");
  type FormValue = {
    text: string;
  }

  function handleSubmit(values: FormValue) {
    // event.preventDefault();
    // setTouched(true);
    // setValueError(validateValue());
    // const isFormValid = !validateValue(values).text;
    // if (!isFormValid) return;
    alert(`Форма отправлена! - ${values.text}`);
  }

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  //   setValue(event.target.value);
  //   // setValueTouched(true);
  // }

  // function handleBlur() {
  //   // setValueTouched(true);
  // }

  function validateValue(values: FormValue) {
    const errors = { text: '' };
    if (values.text.length <= 3) {
      errors.text = "Введите более 3-х имволов";
      return errors;
    }
  }

  const formik = useFormik({
    initialValues: {
      text: "",
    },
    onSubmit: handleSubmit,
    validate: validateValue,
  });

  return (
    <form className={styles.form} onSubmit={formik.handleSubmit}>
      <textarea
        id="text"
        name="text"
        className={styles.input}
        value={formik.values.text}
        onChange={formik.handleChange}
        aria-invalid={formik.errors.text ? "true" : undefined}
        onBlur={formik.handleBlur}
      />
      {formik.touched && formik.errors.text && <div>{formik.errors.text}</div>}
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
