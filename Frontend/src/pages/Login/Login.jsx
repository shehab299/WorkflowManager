import React, { useState } from "react";
import Header from "../../components/Header/Header";
import styles from "./Login.module.css";
import useLogin from "../../hooks/useLogin";

function Login() {
  const { isLoading, error, login } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    console.log({ email, password });
    await login({ email, password });
  }

  return (
    <div>
      <Header navigateTo="/signup" />
      <main className={styles.body}>
        <div className={styles.flexContainer_column}>
          <h2 className={`${styles.title} josefin-sans-bold`}>Welcome Back</h2>
          <div className={styles.gridContainer}>
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
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.inputBox}
              />
              <span className={`${styles.link} josefin-sans-light`}>
                Forgot Password?
              </span>
            </div>
          </div>
          <div className={`${styles.btnSection}`}>
            <button
              id="signup-btn"
              className={`${styles.btn} ${styles.btn_1} josefin-sans-bold`}
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
          {error && <p className={styles.error}>{error}</p>}
        </div>
      </main>
    </div>
  );
}

export default Login;
