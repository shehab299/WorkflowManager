import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

import styles from "./UsersTable.module.css";

export default function UsersTable() {
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <TableHead />
        <TableBody />
      </table>
    </div>
  );
}
