import React from "react";
import { styled } from "@mui/material/styles";
import { Box, useTheme } from "@mui/material";
import { useSelector } from "react-redux";
import { tokens } from "../themes/blueTheme";
import { TopBar } from "./TopBar";
import { SideBarLateral as SideBar } from "./SideBar";

const LayoutWrapper = styled(Box)({
  display: "flex",
  marginTop: 0,
});

const ContentWrapper = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(1),
  marginTop: 0,
  marginLeft: theme.spacing(4), // Ajusta el margen izquierdo según el ancho del sidebar
}));

export const Layout = ({ children }) => {
  return (
    <>
      <LayoutWrapper>
        <SideBar />
        <ContentWrapper>
          <TopBar />
          {children}
        </ContentWrapper>
      </LayoutWrapper>
    </>
  );
};
