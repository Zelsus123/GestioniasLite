import {
  Box,
  TextField,
  Button,
  Divider,
  Typography,
  Chip,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useFormik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { editCliente } from "../../../features/crud/clientesSlice";

export const ClientEditForm = ({ edit, editItem, setEdit, setEditItem }) => {
  const [initialValues, setInitialValues] = useState(editItem);
  const data = useSelector((state) => state.proveedor);

  const handleCancelar = () => {
    setEdit(false);
    setEditItem(null);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setInitialValues(editItem);
  }, [editItem]);

  const formSchema = yup.object({
    Cliente: yup.string().required("El nombre de cliente es obligatorio"),
    Cedula: yup.string().required("El RIF es obligatorio"),
    Correo: yup
      .string()
      .email("Ingrese un email válido")
      .required("El email es obligatorio"),
    Telefono: yup.string().required("El telefono es obligatorio"),
    Direccion: yup.string().required("Debe ingresar una dirección"),
  });

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values) => {
      dispatch(editCliente(values));
      setEdit(false);
      setEditItem(null);
    },
  });

  return (
    <Box
      component="form"
      sx={{
        padding: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        mt: "10px",
      }}
      onSubmit={formik.handleSubmit}
    >
      <Typography variant="h5">Editar Proveedor</Typography>
      <Divider>
        <Chip label="Datos del Cliente" />
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          label="Cliente"
          name="Cliente"
          value={formik.values.Cliente}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Cliente && Boolean(formik.errors.Cliente)}
          helperText={formik.touched.Cliente && formik.errors.Cliente}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Cedula"
          name="Cedula"
          value={formik.values.Cedula}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Cedula && Boolean(formik.errors.Cedula)}
          helperText={formik.touched.Cedula && formik.errors.Cedula}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          marginLeft: "8.5%",
        }}
      >
        <TextField
          label="Direccion"
          name="Direccion"
          value={formik.values.Direccion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Direccion && Boolean(formik.errors.Direccion)}
          helperText={formik.touched.Direccion && formik.errors.Direccion}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Divider>
        <Chip label="Datos de Contacto" />
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          label="Telefono"
          name="Telefono"
          value={formik.values.Telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Telefono && Boolean(formik.errors.Telefono)}
          helperText={formik.touched.Telefono && formik.errors.Telefono}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Correo Electronico"
          name="Correo"
          value={formik.values.Correo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Correo && Boolean(formik.errors.Correo)}
          helperText={formik.touched.Correo && formik.errors.Correo}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-evenly", mt: "10px" }}>
        <Button variant="outlined" color="error" onClick={handleCancelar}>
          Cancelar
        </Button>
        <Button variant="contained" color="success" type="submit">
          Editar Cliente
        </Button>
      </Box>
    </Box>
  );
};
