import React from "react";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";

import styles from "./Login.module.css";

import useLogin from "../../hooks/useLogin";
import LoginSchema from "../../schemas/LoginSchema";

function Login() {
  const { login } = useLogin();

  const onSubmit = async (values, actions) => {
    try {
      await login({ email: values.email, password: values.password });
      actions.resetForm();
    } catch (error) {
      if (error.message === "Unauthorized") {
        actions.setErrors({
          form: "Invalid Email or Password.",
        });
      } else {
        console.error("Login error: ", error);
      }
    }
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: LoginSchema,
    onSubmit,
  });

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit} autoComplete="off">
        <div>
          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className={styles.error}>{errors.email}</p>
            )}
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <p className={styles.error}>{errors.password}</p>
            )}
          </div>
        </div>
        {errors.form && <p className={styles.error}>{errors.form}</p>}
        <div>
          <button type="submit" disabled={isSubmitting} className={styles.btn}>
            Login
          </button>
          <p className={styles.signup}>
            Don't have an account?{" "}
            <NavLink className={styles.link} to="/signup">
              Sign up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
