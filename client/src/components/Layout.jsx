import { Box } from "@mui/material";
import React from "react";
import { SideBarLateral } from "./SideBar";
import { TopBar } from "./TopBar";

export const Layout = ({ children }) => {
  return (
    <Box
      display="flex"
      width="100%"
      height="100vh"
      sx={{
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "sticky" }}>
        <SideBarLateral />
      </Box>

      <Box width="100%" height="100vh">
        <Box
          sx={{
            marginTop: "10px",
            marginLeft: "20px",
            marginRight: "20px",
            overflowX: "hidden",
            overflowY: "auto",
            height: "100%",
            paddingBottom: "20px",
          }}
        >
          <TopBar />
          {children}
        </Box>
      </Box>
    </Box>
  );
};
