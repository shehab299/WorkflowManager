import React from "react";
import { useNavigate } from "react-router-dom";

import ModeEditOutlinedIcon from "@mui/icons-material/ModeEditOutlined";

export default function TableBody({ users }) {
  const navigate = useNavigate();

  function handleEdit(id) {
    navigate(`${id}`);
  }

  return (
    <tbody>
      {users.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role}</td>
            <td>{user.role}</td>
            <td>
              <ModeEditOutlinedIcon
                onClick={() => handleEdit(user.id)}
                sx={{ opacity: 0.4 }}
              />
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}
