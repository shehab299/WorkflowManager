import React from "react";

import styles from "./SearchBar.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { useUsers } from "../../contexts/UsersContext";

export default function SearchBar() {
  const { searchValue, setSearchValue, handleSearch } = useUsers();

  // function handleChange(value) {
  //   setSearchValue(value);
  //   handleSearch();
  // }

  return (
    <div className={styles.container}>
      <SearchOutlinedIcon className={styles.icon} />
      <input
        placeholder="Search..."
        className={styles.search}
        value={searchValue}
        type="search"
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}
