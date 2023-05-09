import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";

export const Store = configureStore({
  reducer: {
    theme,
  },
});
