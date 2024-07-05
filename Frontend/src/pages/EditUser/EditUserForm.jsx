import React from "react";

import { useFormik } from "formik";

import EditUserSchema from "../../schemas/EditUserSchema";
import Button from "../../components/Button/Button";
import TextInput from "../../components/TextInput/TextInput";

import styles from "./EditUserForm.module.css";

import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";

const fields = [
  { type: "text", name: "fullname", placeholder: "Enter your full name" },
  { type: "text", name: "username", placeholder: "Enter your username" },
  { type: "text", name: "department", placeholder: "Enter your department" },
  { type: "text", name: "role", placeholder: "Enter your role" },
  { type: "email", name: "email", placeholder: "Enter your email" },
  { type: "number", name: "phone", placeholder: "Enter your phone number" },
];

function onSubmit() {
  async (values, actions) => {
    console.log(values);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };
}

export default function EditUserForm() {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = useFormik({
    initialValues: {
      fullname: "",
      username: "",
      department: "",
      role: "",
      email: "",
      phone: "",
    },
    validationSchema: EditUserSchema,
    onSubmit,
  });
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <ReceiptOutlinedIcon className={styles.icon} />{" "}
        <h3>General Information</h3>
      </div>
      <div className={styles.border}></div>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        {fields.map((field, index) => (
          <TextInput
            key={index}
            id={field.name}
            name={field.name}
            type={field.type}
            placeholder={field.placeholder}
            value={values[field.name]}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors[field.name]}
            touched={touched[field.name]}
          />
        ))}
        <div className={styles.buttons}>
          <Button theme="light" type="button" onClick={() => resetForm()}>
            Discard
          </Button>
          <Button theme="dark" disabled={isSubmitting} type="submit">
            Update
          </Button>
        </div>
      </form>
    </div>
  );
}
