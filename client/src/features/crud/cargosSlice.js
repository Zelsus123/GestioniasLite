import { createSlice } from "@reduxjs/toolkit";
import { CargosFakeData } from "../../components/EmpleadosAndCargosPagesComponents/Grid/Data/CargosFakeData";

const initialState = CargosFakeData;

const cargosSlice = createSlice({
  name: "cargos",
  initialState,
  reducers: {
    addCargo: (state, action) => {
      state.push(action.payload);
    },
    editCargo: (state, action) => {
      const { id, Cargo, Descripcion, Permisos } = action.payload;
      const foundCargo = state.find((cargo) => cargo.id === id);

      if (foundCargo) {
        foundCargo.Cargo = Cargo;
        foundCargo.Descripcion = Descripcion;
        foundCargo.Permisos = Permisos;
      }
    },
    deleteCargo: (state, action) => {
      const foundCargo = state.find((cargo) => cargo.id === action.payload);
      if (foundCargo) {
        state.splice(state.indexOf(foundCargo), 1);
      }
    },
  },
});

export const { addCargo, deleteCargo, editCargo } = cargosSlice.actions;
export default cargosSlice.reducer;
