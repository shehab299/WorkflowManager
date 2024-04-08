import React from "react";
import HeaderCSS from "./Header.module.css";
import InputCSS from "./Input.module.css";
import { useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo.jpeg'

const Header = ({navigateTo}) => {
  const navigate = useNavigate();

  const handlePageSwitch = () => {
    // Navigate to Sign Up page on clicking the switch to button
    console.log("Switching to " + navigateTo);
    navigate(navigateTo)
  };

  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.gridContainer}>
        <div className={HeaderCSS.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={HeaderCSS.headerTitle}>
          <h1 className="josefin-sans-bold">Cairo University</h1>
        </div>
        <button
          onClick={handlePageSwitch}
          className={`${InputCSS.btn} ${InputCSS.btn_1} josefin-sans-bold`}
        >
          {navigateTo === "/login" ? "Login" : "Sign Up"}
        </button>
      </div>
    </header>
  );
};

export default Header;
