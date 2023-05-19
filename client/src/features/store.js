import { configureStore } from "@reduxjs/toolkit";
import theme from "./theme/themeSlice";
import proveedor from "./crud/proveedoresSlice";
import clientes from "./crud/clientesSlice";
import empleados from "./crud/empleadosSlice";
import cargos from "./crud/cargosSlice";

export const Store = configureStore({
  reducer: {
    theme,
    proveedor,
    clientes,
    empleados,
    cargos,
  },
});
