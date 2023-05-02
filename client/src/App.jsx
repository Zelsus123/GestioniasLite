import React from "react";
import { TopBar } from "./components/TopBar";
import { Box, CssBaseline } from "@mui/material";
import { tokens } from "./themes/blueTheme";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { SideBarLateral as Sidebar } from "./components/SideBar";

function App() {
  const theme = useTheme();
  const tema = useSelector((state) => state.theme.theme);
  const colors = tokens(tema);
  return (
    <>
      <CssBaseline />
      <Box
        backgroundColor={
          tema === "light" ? colors.Gris[100] : colors.AzulPrimario[200]
        }
        sx={{ height: "100vh", width: "100%" }}
      >
        <div className="app">
          <Sidebar />
          <main className="content">
            <TopBar />
          </main>
        </div>
      </Box>
    </>
  );
}

export default App;
