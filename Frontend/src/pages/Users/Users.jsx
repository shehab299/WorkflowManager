import React, { createContext, useEffect, useState } from "react";
import styles from "./Users.module.css";

import UsersTable from "../../components/UsersTable/UsersTable";
import SideBar from "../../components/SideBar/SideBar";
import SearchBy from "../../components/SearchBy/SearchBy";
import SearchBar from "../../components/SearchBar/SearchBar";
import PagePagination from "../../components/PagePagination/PagePagination";
import { useUsers } from "../../contexts/UsersContext";

export default function DataTable() {
  const { filteredData } = useUsers();

  return (
    <div className={styles.container}>
      <SideBar />
      <div className={styles.usersSide}>
        <div className={styles.search}>
          <SearchBy />
          <SearchBar />
        </div>

        <UsersTable />

        <div className={styles.results}>
          <p>{filteredData.length} results</p>
          <PagePagination />
        </div>
      </div>
    </div>
  );
}
