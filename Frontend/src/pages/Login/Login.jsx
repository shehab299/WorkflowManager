import React from "react";
import { useAuth } from '../../utils/AuthContext';
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";

const Login = () => {
  const { login } = useAuth();

  return (
    <div>
      <Header navigateTo="/signup"/>
      <main className={styles.body}>
        <div className={styles.flexContainer_column}>
          <h2 className={`${styles.title} josefin-sans-bold`}>
            Welcome Back
          </h2>
          <div className={styles.gridContainer}>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection}`}
            >
              <label htmlFor="email" className="josefin-sans-bold">
                Email
              </label>
              <input type="email" id="email" className={styles.inputBox} />
            </div>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection}`}
            >
              <label htmlFor="password" className="josefin-sans-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={styles.inputBox}
              />
              <span className={`${styles.link} josefin-sans-light`}>Forgot Password?</span>
            </div>
          </div>
          <div className={`${styles.btnSection}`}>
            <button
              id="signup-btn"
              className={`${styles.btn} ${styles.btn_1} josefin-sans-bold`}
              onClick={login}
            >
              Login
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login