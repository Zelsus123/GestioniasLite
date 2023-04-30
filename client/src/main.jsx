import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import store from "./features/store";
import { ThemeProvider } from "@mui/material";
import { blueTheme } from "./themes/blueTheme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={blueTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
