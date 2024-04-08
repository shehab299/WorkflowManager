import React from "react";
import Header from "../components/Header";
import RegistrationCSS from "./Registration.module.css";
import InputCSS from "../components/Input.module.css";

const Login = () => {

  return (
    <div>
      <Header navigateTo="/signup"/>
      <main className={RegistrationCSS.body}>
        <div className={RegistrationCSS.flexContainer_column}>
          <h2 className={`${RegistrationCSS.title} josefin-sans-bold`}>
            Welcome Back
          </h2>
          <div className={RegistrationCSS.gridContainer}>
            <div
              className={`${RegistrationCSS.flexContainer_column} ${RegistrationCSS.gridSection}`}
            >
              <label for="email" className="josefin-sans-bold">
                Email
              </label>
              <input type="email" id="email" className={InputCSS.inputBox} />
            </div>
            <div
              className={`${RegistrationCSS.flexContainer_column} ${RegistrationCSS.gridSection}`}
            >
              <label for="password" className="josefin-sans-bold">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={InputCSS.inputBox}
              />
              <span className={`${RegistrationCSS.link} josefin-sans-light`}>Forgot Password?</span>
            </div>
          </div>
          <div className={`${RegistrationCSS.btnSection}`}>
            <button
              id="signup-btn"
              className={`${InputCSS.btn} ${InputCSS.btn_1} josefin-sans-bold`}
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