import { createSlice } from "@reduxjs/toolkit";
import { EmpleadosFakeData } from "../../components/EmpleadosAndCargosPagesComponents/Grid/Data/EmpleadosFakeData";

const initialState = EmpleadosFakeData;

const empleadosSlice = createSlice({
  name: "empleados",
  initialState,
  reducers: {
    addEmpleado: (state, action) => {
      const {
        Empleado,
        Cedula,
        Cargo,
        Salario,
        Telefono,
        Direccion,
        Correo,
        Activo,
        Password,
        preview,
      } = action.payload;
      const nuevoEmpleado = {
        id: state.length + 1,
        Empleado,
        Cedula,
        Cargo,
        Salario,
        Telefono,
        Direccion,
        Correo,
        Activo,
        Password,
        Avatar: preview,
      };
      state.push(nuevoEmpleado);
    },
    editEmpleado: (state, action) => {
      const {
        Activo,
        Cargo,
        Cedula,
        Correo,
        Direccion,
        Empleado,
        Password,
        Salario,
        Telefono,
        preview,
        id,
      } = action.payload;

      const foundEmpleado = state.find((empleado) => empleado.id === id);
      if (foundEmpleado) {
        foundEmpleado.Activo = Activo;
        foundEmpleado.Cargo = Cargo;
        foundEmpleado.Cedula = Cedula;
        foundEmpleado.Correo = Correo;
        foundEmpleado.Direccion = Direccion;
        foundEmpleado.Empleado = Empleado;
        foundEmpleado.Password = Password;
        foundEmpleado.Salario = Salario;
        foundEmpleado.Telefono = Telefono;
        foundEmpleado.Avatar = preview;
      }
    },
    deleteEmpleado: (state, action) => {
      const eFound = state.find((eF) => eF.id === action.payload);
      if (eFound) {
        state.splice(state.indexOf(eFound), 1);
      }
    },
  },
});

export const { addEmpleado, deleteEmpleado, editEmpleado } =
  empleadosSlice.actions;
export default empleadosSlice.reducer;
