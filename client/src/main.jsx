import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider, useSelector } from "react-redux";
import store from "./features/store";
import { ThemeProvider } from "@mui/material";
import { blueTheme } from "./themes/blueTheme";
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={blueTheme}>
        <ProSidebarProvider>
          <App />
        </ProSidebarProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
