import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
import proveedor from "./crud/proveedoresSlice";
import clientes from "./crud/clientesSlice";

export const Store = configureStore({
  reducer: {
    theme,
    proveedor,
    clientes,
  },
});
