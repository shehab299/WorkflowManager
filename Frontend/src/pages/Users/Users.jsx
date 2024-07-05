import React, { useEffect, useState } from "react";
import styles from "./Users.module.css";

import UsersTable from "../../components/UsersTable/UsersTable";
import SideBar from "../../components/SideBar/SideBar";
import SearchBy from "../../components/SearchBy/SearchBy";

const BASE_URL = "http://localhost:3000";

export default function DataTable() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    async function fetchUsers() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/data`, {
          signal: controller.signal,
        });
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        if (error.name === "AbortError") return;
      } finally {
        setIsLoading(false);
      }
    }

    fetchUsers();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className={styles.container}>
      <SideBar />
      <SearchBy />
      <UsersTable users={users} />
    </div>
  );
}
