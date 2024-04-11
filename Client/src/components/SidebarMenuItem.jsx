import React from "react";
import SidebarMenuItemCSS from "./SidebarMenuItem.module.css";
import { useMenuContext } from "./Sidebar";

const SidebarMenuItem = ({ onClick, path, title }) => {
  const { isMenuOpened, activeMenuItem } =
    useMenuContext();

  return (
    <div
      className={`${SidebarMenuItemCSS.item} 
      ${isMenuOpened ? SidebarMenuItemCSS.open : ""} 
      ${activeMenuItem == title ? SidebarMenuItemCSS.active : ""}`}
      onClick={onClick}
    >
      <img className={SidebarMenuItemCSS.icon} src={path} alt={title} />
      <h2 className={`${SidebarMenuItemCSS.title} josefin-sans-bold`}>
        {title}
      </h2>
    </div>
  );
};

export default SidebarMenuItem;
