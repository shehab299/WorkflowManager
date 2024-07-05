import React from "react";
import TableHead from "./TableHead";
import TableBody from "./TableBody";

import styles from "./UsersTable.module.css";

export default function UsersTable({ users }) {
  return (
    <table className={styles.container}>
      <TableHead users={users} />
      <TableBody users={users} />
    </table>
  );
}
