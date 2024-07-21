import React from "react";
import styles from "./Button.module.css";

export default function Button({ children, disabled, type, onClick, theme }) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.btn} ${styles[theme]}`}
    >
      {children}
    </button>
  );
}
