import React from "react";
import Select from "react-select";

import styles from "./SelectField.module.css";

const customStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: "#f3f4f6ff",
    borderColor: state.isFocused ? "rgb(235, 235, 235)" : "transparent", // Grey border when focused, transparent when not
    boxShadow: state.isFocused ? "1px rgb(235, 235, 235)" : "none", // Grey border when focused, no box shadow when not
    "&:hover": {
      borderColor: state.isFocused ? "rgb(235, 235, 235)" : "transparent", // Maintain the same border color on hover
    },
  }),
  placeholder: (base) => ({
    ...base,
    opacity: 0.3, // Adjust the opacity here
  }),
};

export default function SelectField({
  name,
  value,
  onBlur,
  placeholder,
  options,
  onChange,
}) {
  function defaultValue(options, value) {
    console.log(value);
    if (!value) return null;
    return options ? options.find((option) => option.value === value) : null;
  }

  return (
    <div className={styles.container}>
      <label className={styles.label} htmlFor={name}>
        {name}
      </label>
      <Select
        styles={customStyles}
        placeholder={placeholder}
        options={options}
        onBlur={onBlur}
        onChange={onChange}
        value={defaultValue(options, value)}
      />
    </div>
  );
}
