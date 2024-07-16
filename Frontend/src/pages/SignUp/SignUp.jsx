import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./SignUp.module.css";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {
  const { isLoading, error, signup, setError } = useSignup();

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSignup() {
    console.log({ email, password, confirmPassword, firstName, lastName });
    if (password !== confirmPassword) {
      setError("Mismatched Passwords");
    } else {
      signup({ email, password, name: firstName + lastName });
    }
  }

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
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                id="fname"
                className={styles.inputBox}
              />
            </div>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection_small}`}
            >
              <label htmlFor="lname" className="josefin-sans-bold">
                Last Name
              </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                id="lname"
                className={styles.inputBox}
              />
            </div>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection}`}
            >
              <label htmlFor="email" className="josefin-sans-bold">
                Email
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                className={styles.inputBox}
              />
            </div>
            <div
              className={`${styles.flexContainer_column} ${styles.gridSection}`}
            >
              <label htmlFor="password" className="josefin-sans-bold">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={styles.inputBox}
              />
            </div>
          </div>
          <div className={`${styles.btnSection}`}>
            <button
              id="signup-btn"
              className={`${styles.btn} ${styles.btn_1} josefin-sans-bold`}
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </main>
    </div>
  );
};

export default SignUp;
