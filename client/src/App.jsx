import React from "react";
import { tokens } from "./themes/blueTheme";
import { useTheme } from "@emotion/react";
import { useSelector } from "react-redux";
import { Layout } from "./components/Layout";

import { Dashboard } from "./pages/Dashboard";

function App() {
  const theme = useTheme();
  const tema = useSelector((state) => state.theme.theme);
  const colors = tokens(tema);
  return (
    <div className="App">
      <Layout>
        <Dashboard />
      </Layout>
    </div>
  );
}

export default App;
