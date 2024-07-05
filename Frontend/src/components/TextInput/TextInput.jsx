import React from "react";

import styles from "./TextInput.module.css";

export default function TextInput({
  name,
  value,
  onChange,
  onBlur,
  type,
  placeholder,
  error,
  touched,
}) {
  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={type}>
        {name}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        onBlur={onBlur}
        className={error && touched ? "inputError" : ""}
      />
      {error && touched && <p className={styles.error}>{error}</p>}
    </div>
  );
}
