import React from "react";
import uniLogo from "/image.png";
import Button from "../Button/Button";

import styles from './NavBar.module.css'

export default function NavBar() {
  return (
      <div className={styles.navBar}>
      <img className={styles.logo} src={uniLogo} alt="Cairo Uni Logo" />
      <h1>Cairo Univerity</h1>
      <Button>Sign Up</Button>
    </div>
  );
}
