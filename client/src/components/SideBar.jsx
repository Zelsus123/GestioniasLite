import React from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { MenuOutlined } from "@mui/icons-material";

export const SideBarLateral = () => {
  const { collapseSidebar } = useProSidebar();
  return (
    <Sidebar style={{ height: "100vh" }}>
      <Menu>
        <MenuItem
          icon={<MenuOutlined />}
          onClick={() => {
            collapseSidebar();
          }}
          style={{ textAlign: "center" }}
        >
          {" "}
          <h2>Admin</h2>
        </MenuItem>
      </Menu>
    </Sidebar>
  );
};
