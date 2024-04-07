import React from "react";
import HeaderCSS from "./Header.module.css";
import InputCSS from "./Input.module.css";

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.gridContainer}>
        <div className={HeaderCSS.logo}>
          <img src="src/assets/img/logo.jpeg" alt="logo" />
        </div>
        <div className={HeaderCSS.headerTitle}>
          <h1 className="josefin-sans-bold">Cairo University</h1>
        </div>
        <div className={`${InputCSS.btn} ${InputCSS.btn_1} josefin-sans-bold`}>
          Login
        </div>
      </div>
    </header>
  );
};

export default Header;
