import { Box } from "@mui/material";
import React from "react";
import { SideBarLateral } from "./SideBar";
import { TopBar } from "./TopBar";

export const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      width="100%"
      sx={{
        overflow: "hidden",
      }}
    >
      <SideBarLateral />

      <Box width="100%">
        <TopBar />
        <Box
          sx={{
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
            overflow: "hidden",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
