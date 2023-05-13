import { createSlice } from "@reduxjs/toolkit";
import { FakeClienteData } from "../../components/ClientesPageComponents/Grid/Data/FakeClienteData";

const initialState = FakeClienteData;

const clienteSlice = createSlice({
  name: "clientes",
  initialState,
  reducers: {
    addCliente: (state, action) => {
      state.push(action.payload);
    },
    editCliente: (state, action) => {
      const { id, Cliente, Correo, Telefono, Direccion, Cedula } =
        action.payload;
      const foundClient = state.find((client) => client.id === id);

      if (foundClient) {
        foundClient.Cedula = Cedula;
        foundClient.Cliente = Cliente;
        foundClient.Correo = Correo;
        foundClient.Telefono = Telefono;
        foundClient.Direccion = Direccion;
      }
    },
    deleteCliente: (state, action) => {
      const foundClient = state.find((client) => client.id === action.payload);
      if (foundClient) {
        state.splice(state.indexOf(foundClient), 1);
      }
    },
  },
});

export const { addCliente, deleteCliente, editCliente } = clienteSlice.actions;
export default clienteSlice.reducer;
