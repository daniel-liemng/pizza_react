import React from "react";

import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Desserts</SidebarLink>
        <SidebarLink to='/'>Full Menu</SidebarLink>
      </SidebarMenu>
      <SidebarBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SidebarBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
