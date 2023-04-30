import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./reducers/themeSlice";

const Store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

export default Store;
