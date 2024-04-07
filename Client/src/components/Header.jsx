import React from "react";
import HeaderCSS from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderCSS.header}>
      <div className={HeaderCSS.logo}>
        <img src="src/assets/img/logo.jpeg" alt="logo" />
      </div>
      <div className="university-title"></div>
      <div className="btn-1"></div>
    </header>
  );
};

export default Header;
