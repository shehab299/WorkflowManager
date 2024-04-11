import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthContext";
import menuItems from "../../data/menu_items.json";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarCSS from "./Sidebar.module.css";
import InputCSS from "./Input.module.css";
import logo from "../assets/img/logo.jpeg";
import moreIcon from "../assets/icons/more.png"
import logoutIcon from "../assets/icons/log-out.png"

// Create a context
const SidebarContext = createContext();

const Sidebar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(
    () => localStorage.getItem("isMenuOpened") === "true"
  );
  const [activeMenuItem, setActiveMenuItem] = useState("dashboard");

  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("isMenuOpened", isMenuOpened);
  }, [isMenuOpened]);

  useEffect(() => {
    const currentUrl = location.pathname;
    const newUrl = `/${activeMenuItem}`;

    if (currentUrl !== newUrl) {
      navigate(newUrl);
    }
  }, [activeMenuItem]);

  const toggleMenu = () => {
    const prevIsMenuOpened = isMenuOpened;
    setIsMenuOpened(!prevIsMenuOpened);
  };

  const setActiveItem = (item) => {
    console.log(item);
    setActiveMenuItem(item);
  };

  const basePath = process.env.NODE_ENV === "production" ? "/build/" : "/src/";

  return (
    <SidebarContext.Provider
      value={{ isMenuOpened, toggleMenu, activeMenuItem, setActiveItem }}
    >
      <div
        className={`${SidebarCSS.sidebar} ${
          isMenuOpened ? SidebarCSS.open : ""
        }`}
      >
        <div className={SidebarCSS.more_icon}>
          <SidebarMenuItem
            onClick={toggleMenu}
            path={moreIcon}
            title={"Cairo University"}
          />
        </div>
        <div className={SidebarCSS.menu_items}>
        {
          menuItems.map(menuItem => {
            return <SidebarMenuItem
            onClick={() => setActiveItem(menuItem.title)}
            path={basePath + menuItem.path}
            title={menuItem.title}
          />
          })
        }
        </div>
        <div className={SidebarCSS.logout}>
          <SidebarMenuItem
            onClick={logout}
            path={logoutIcon}
            title={"logout"}
          />
        </div>
      </div>
    </SidebarContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useMenuContext = () => {
  return useContext(SidebarContext);
};

export default Sidebar;
