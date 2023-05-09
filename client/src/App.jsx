import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "./themes/blueTheme.js";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "./features/theme/themeSlice.js";
import { TopBar } from "./components/TopBar.jsx";
import { Router } from "./Routes/Router.jsx";
import { SideBarLateral } from "./components/SideBar.jsx";
import { Layout } from "./components/Layout.jsx";

export default function App() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Layout>
        <Box sx={{ overflowY: "scroll", overflowX: "hidden", height: "100vh" }}>
          <Router />
        </Box>
      </Layout>
    </ThemeProvider>
  );
}
