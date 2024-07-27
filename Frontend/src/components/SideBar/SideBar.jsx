import React, { createContext, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./SideBar.module.css";

import menuItems from "../../../data/menu_items.json";
import SidebarMenuItem from "./SidebarMenuItem";

import useLogout from "../../hooks/useLogout";

const SidebarContext = createContext();

const SideBar = () => {
  const { logout } = useLogout();

  const [isMenuOpened, setIsMenuOpened] = useState(
    () => localStorage.getItem("isMenuOpened") === "true"
  );

  useEffect(() => {
    localStorage.setItem("isMenuOpened", isMenuOpened);
  }, [isMenuOpened]);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  return (
    <SidebarContext.Provider value={{ isMenuOpened, toggleMenu }}>
      <div className={`${styles.sidebar} ${isMenuOpened ? styles.open : ""}`}>
        <div className={styles.more_icon}>
          <SidebarMenuItem onClick={toggleMenu} title={"Cairo University"} />
        </div>
        <div className={styles.menu_items}>
          {menuItems.map((menuItem) => (
            <NavLink
              className={styles.navLink}
              key={menuItem.title}
              to={`/${menuItem.title}`}
            >
              <SidebarMenuItem title={menuItem.title} />
            </NavLink>
          ))}
        </div>
        <div className={styles.logout}>
          <SidebarMenuItem onClick={logout} title={"logout"} />
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(SidebarContext);
};

export default SideBar;
