import React from "react";
import { TopBar } from "./components/TopBar";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { blueTheme } from "./themes/blueTheme";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={blueTheme}>
      <CssBaseline />
      <div className="app">
        <main className="content">
          <TopBar />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
