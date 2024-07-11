import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../utils/AuthContext";
import menuItems from "../../../data/menu_items.json";
import SidebarMenuItem from "./SidebarMenuItem";
import SidebarCSS from "./Sidebar.module.css";
import moreIcon from "../../assets/icons/more.png";
import logoutIcon from "../../assets/icons/log-out.png";

// Create a context
const SidebarContext = createContext();

const SideBar = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(
    () => localStorage.getItem("isMenuOpened") === "true"
  );
  const [activeMenuItem, setActiveMenuItem] = useState(null);

  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    localStorage.setItem("isMenuOpened", isMenuOpened);
  }, [isMenuOpened]);

  useEffect(() => {
    const currentUrl = location.pathname;
    const newUrl = `/${activeMenuItem}`;

    if (activeMenuItem != null && currentUrl !== newUrl) {
      navigate(newUrl);
    }
  }, [activeMenuItem, navigate, location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpened(!isMenuOpened);
  };

  const setActiveItem = (item) => {
    setActiveMenuItem(item);
  };

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
          {menuItems.map((menuItem) => (
            <SidebarMenuItem
              key={menuItem.title}
              onClick={() => setActiveItem(menuItem.title)}
              path={menuItem.path}
              title={menuItem.title}
            />
          ))}
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

// Custom hook to use the SidebarContext
export const useMenuContext = () => {
  return useContext(SidebarContext);
};

export default SideBar;
