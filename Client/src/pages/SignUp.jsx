import React from "react";
import { useAuth } from "../utils/AuthContext";
import Header from "../components/Header";
import RegistrationCSS from "./Registration.module.css";
import InputCSS from "../components/Input.module.css";

const SignUp = () => {
  const { login } = useAuth();

  return (
    <div>
      <Header navigateTo="/login" />
      <main className={RegistrationCSS.body}>
        <div className={RegistrationCSS.flexContainer_column}>
          <h2 className={`${RegistrationCSS.title} josefin-sans-bold`}>
            Create Account
          </h2>
          <div className={RegistrationCSS.gridContainer}>
            <div
              className={`${RegistrationCSS.flexContainer_column} ${RegistrationCSS.gridSection_small}`}
            >
              <label for="fname" className="josefin-sans-bold">
                First Name
              </label>
              <input type="text" id="fname" className={InputCSS.inputBox} />
            </div>
            <div
              className={`${RegistrationCSS.flexContainer_column} ${RegistrationCSS.gridSection_small}`}
            >
              <label for="lname" className="josefin-sans-bold">
                Last Name
              </label>
              <input type="text" id="lname" className={InputCSS.inputBox} />
            </div>
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
            </div>
            <div
              className={`${RegistrationCSS.flexContainer_column} ${RegistrationCSS.gridSection}`}
            >
              <label for="cpassword" className="josefin-sans-bold">
                Confirm Password
              </label>
              <input
                type="password"
                id="cpassword"
                className={InputCSS.inputBox}
              />
            </div>
          </div>
          <div className={`${RegistrationCSS.btnSection}`}>
            <button
              id="signup-btn"
              className={`${InputCSS.btn} ${InputCSS.btn_1} josefin-sans-bold`}
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
