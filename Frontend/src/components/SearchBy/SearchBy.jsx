import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import styles from "./SearchBy.module.css";

export default function SearchBy() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel
          sx={{
            color: "black", // Change this to your desired color
            "&.Mui-focused": {
              color: "black", // Change this to your desired focus color
            },
          }}
        >
          Search-By
        </InputLabel>
        <Select
          sx={{
            border: "none",
            "&:hover": {
              outline: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "inherit",
            },
          }}
          className={styles.select}
          value={age}
          label="Search-By"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Name</MenuItem>
          <MenuItem value={20}>Email</MenuItem>
          <MenuItem value={30}>Department</MenuItem>
          <MenuItem value={30}>Role</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
