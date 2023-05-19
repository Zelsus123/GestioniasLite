import { createSlice } from "@reduxjs/toolkit";
import { CargosFakeData } from "../../components/EmpleadosAndCargosPagesComponents/Grid/Data/CargosFakeData";

const initialState = CargosFakeData;

const cargosSlice = createSlice({
  name: "cargos",
  initialState,
  reducers: {
    addCargo: (state, action) => {},
    editCargo: (state, action) => {},
    deleteCargo: (state, action) => {},
  },
});

export const { addCargo, deleteCargo, editCargo } = cargosSlice.actions;
export default cargosSlice.reducer;
