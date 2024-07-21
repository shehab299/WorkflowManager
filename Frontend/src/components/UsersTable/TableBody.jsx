import React from "react";
import { useNavigate } from "react-router-dom";

import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

import styles from "./TableBody.module.css";
import { useUsers } from "../../contexts/UsersContext";

export default function TableBody() {
  const { filteredData, currentPage, postsPerPage } = useUsers();
  const navigate = useNavigate();

  console.log(filteredData);
  const lastIndex = currentPage * postsPerPage;
  const firstIndex = lastIndex - postsPerPage;

  function handleEdit(id) {
    navigate(`${id}`);
  }

  return (
    <tbody>
      {filteredData.slice(firstIndex, lastIndex).map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.role}</td>
            <td>
              <ModeEditOutlinedIcon
                className={styles.icon}
                onClick={() => handleEdit(user.id)}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
