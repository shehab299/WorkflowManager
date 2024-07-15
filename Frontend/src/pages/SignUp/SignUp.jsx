import React from "react";
import { useAuth } from "../../utils/AuthContext";
import Header from "../../components/Header/Header";
import styles from "./SignUp.module.css"

const SignUp = () => {
  const { login } = useAuth();

  return (
    <div>
      <Header navigateTo="/login" />
      <main className={styles.body}>
        <div className={styles.flexContainer_column}>
          <h2 className={`${styles.title} josefin-sans-bold`}>
            Create Account
          </h2>
          <div className={styles.gridContainer}>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection_small}`}
            >
              <label htmlFor="fname" className="josefin-sans-bold">
                First Name
              </label>
              <input type="text" id="fname" className={styles.inputBox} />
            </div>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection_small}`}
            >
              <label htmlFor="lname" className="josefin-sans-bold">
                Last Name
              </label>
              <input type="text" id="lname" className={styles.inputBox} />
            </div>
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
            </div>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection}`}
            >
              <label htmlFor="cpassword" className="josefin-sans-bold">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className={styles.inputBox}
              />
            </div>
          </div>
          <div className={`${styles.btnSection}`}>
            <button
              id="signup-btn"
              className={`${styles.btn} ${styles.btn_1} josefin-sans-bold`}
              onClick={login}
            >
              Sign Up
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
