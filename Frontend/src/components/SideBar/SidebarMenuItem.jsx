import React from "react";
import styles from "./SidebarMenuItem.module.css";
import { useMenuContext } from "./SideBar";

import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import { NavLink } from "react-router-dom";

const iconMapping = {
  dashboard: <DashboardOutlinedIcon />,
  users: <PersonOutlineOutlinedIcon />,
  workflow: <WorkOutlineIcon />,
  logout: <LogoutIcon />,
  "cairo university": <MenuIcon />,
};

const SidebarMenuItem = ({ title, onClick }) => {
  const { isMenuOpened } = useMenuContext();

  return (
      <div
        className={`${styles.item} ${!isMenuOpened ? styles.closed : ""}`}
        onClick={onClick}
      >
        <div className={styles.icon}>{iconMapping[title.toLowerCase()]}</div>
        {isMenuOpened && <p className={styles.title}>{title}</p>}
      </div>
  );
};

export default SidebarMenuItem;
