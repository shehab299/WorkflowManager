import React from 'react';
import styles from "./SearchBar.module.css"

const SearchBar = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.searchBar}
    />
  );
};

export default SearchBar;