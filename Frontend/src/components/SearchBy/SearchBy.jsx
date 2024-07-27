// import {useState} from "react";

// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";

// import styles from "./SearchBy.module.css";

// export default function SearchBy() {
//   const [search, setSearch] = useState("");

//   const handleChange = (event) => {
//     setSearch(event.target.value);
//   };

//   return (
//     <div>
//       <FormControl sx={{ m: 1, minWidth: 160 }}>
//         <InputLabel
//           sx={{
//             // color: "black", // Change this to your desired color
//             "&.Mui-focused": {
//               color: "#00bdd6ff", // Change this to your desired focus color
//             },
//           }}
//         >
//           Search-By
//         </InputLabel>
//         <Select
//           sx={{
//             border: "none",
//             "&:hover": {
//               outline: "none",
//             },
//             "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
//               borderColor: "inherit",
//             },
//           }}
//           className={styles.select}
//           value={search}
//           label="Search-By"
//           onChange={handleChange}
//         >
//           <MenuItem value="">
//             <em>None</em>
//           </MenuItem>
//           <MenuItem value={10}>Name</MenuItem>
//           <MenuItem value={20}>Email</MenuItem>
//           <MenuItem value={30}>Department</MenuItem>
//           <MenuItem value={30}>Role</MenuItem>
//         </Select>
//       </FormControl>
//     </div>
//   );
// }


import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "./SearchBy.module.css";

export default function SearchBy() {
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel
          sx={{
            "&.Mui-focused": {
              color: "#00bdd6ff", // Change this to your desired focus color
            },
          }}
        >
          Search-By
        </InputLabel>
        <Select
          sx={{
            // height: 40, // Adjust this value to reduce the height
            "& .MuiSelect-select": {
              // paddingTop: 8, // Adjust this value to center text vertically
              // paddingBottom: 8, // Adjust this value to center text vertically
            },
            "&:hover": {
              outline: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "grey", // Change this to your desired outline color when focused
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "grey", // Change this to your desired outline color when not focused
            },
          }}
          className={styles.select}
          value={search}
          label="Search-By"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Name</MenuItem>
          <MenuItem value={20}>Email</MenuItem>
          <MenuItem value={30}>Department</MenuItem>
          <MenuItem value={40}>Role</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
