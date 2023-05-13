import { createSlice } from "@reduxjs/toolkit";
import { FakeProveedorData } from "../../components/ProveedoresPageComponents/Grid/Data/FakeProveedoresData";

const initialState = FakeProveedorData;

const providersSlice = createSlice({
  name: "proveedores",
  initialState,
  reducers: {
    addProvider: (state, action) => {
      state.push(action.payload);
    },
    updateProvider: (state, action) => {
      const { id, Proveedor, RIF, Telefono, Direccion, Correo, Activo } =
        action.payload;

      const foundProveedor = state.find((proveedor) => proveedor.id === id);
      if (foundProveedor) {
        foundProveedor.Activo = Activo;
        foundProveedor.Correo = Correo;
        foundProveedor.Direccion = Direccion;
        foundProveedor.Proveedor = Proveedor;
        foundProveedor.RIF = RIF;
        foundProveedor.Telefono = Telefono;
      }
    },
    deleteProvider: (state, action) => {
      const pFound = state.find((p) => p.id === action.payload);
      if (pFound) {
        state.splice(state.indexOf(pFound), 1);
      }
    },
  },
});

export const { addProvider, updateProvider, deleteProvider } =
  providersSlice.actions;

export default providersSlice.reducer;
