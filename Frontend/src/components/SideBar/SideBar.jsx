import React from "react";
import styles from "./SideBar.module.css";

import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkspacesOutlinedIcon from "@mui/icons-material/WorkspacesOutlined";

export default function SideBar() {
  return (
    <div className={styles.sideBar}>
      <h1>:) LOGO</h1>
      <ul>
        <li>
          <DashboardOutlinedIcon />
          <p>Dashboard</p>
        </li>
        <li>
          <FolderOutlinedIcon />
          <p>Users</p>
        </li>
        <li>
          <WorkspacesOutlinedIcon />
          <p>Workflow</p>
        </li>
      </ul>
    </div>
  );
}
