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
import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { useFormik, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addProvider } from "../../../features/crud/proveedoresSlice";

export const ProveedorForm = ({ edit, editItem, setEdit }) => {
  const data = useSelector((state) => state.proveedor);
  const id = data.length + 1;
  const ComprasDolares = 0;
  const dispatch = useDispatch();
  const formSchema = yup.object({
    Proveedor: yup.string().required("El nombre de proveedor es obligatorio"),
    RIF: yup.string().required("El RIF es obligatorio"),
    Correo: yup
      .string()
      .email("Ingrese un email válido")
      .required("El email es obligatorio"),
    Telefono: yup.string().required("El telefono es obligatorio"),
    Direccion: yup.string().required("Debe ingresar una dirección"),
    Activo: yup
      .string()
      .required("Debe seleccionar si el proveedor está activo"),
  });

  const formik = useFormik({
    initialValues: {
      Proveedor: "",
      RIF: "",
      Correo: "",
      Telefono: "",
      Direccion: "",
      Activo: "",
    },

    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      const valores = { ...values, id, ComprasDolares };
      dispatch(addProvider(valores));
      resetForm();
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
      <Typography variant="h5">
        {edit ? "Editar Proveedor" : "Registrar Proveedor"}
      </Typography>
      <Divider>
        <Chip label="Datos del Proveedor" />
      </Divider>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        <TextField
          label="Proveedor"
          name="Proveedor"
          value={formik.values.Proveedor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Proveedor && Boolean(formik.errors.Proveedor)}
          helperText={formik.touched.Proveedor && formik.errors.Proveedor}
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="RIF"
          name="RIF"
          value={formik.values.RIF}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.RIF && Boolean(formik.errors.RIF)}
          helperText={formik.touched.RIF && formik.errors.RIF}
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
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
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="activo-label">Proveedor Activo</InputLabel>
          <Select
            labelId="activo-label"
            id="Activo"
            name="Activo"
            value={formik.values.Activo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Activo && Boolean(formik.errors.Activo)}
            label="Proveedor Activo"
            autoWidth
            sx={{
              minWidth: 210,
            }}
          >
            <MenuItem value={true}>Activo</MenuItem>
            <MenuItem value={false}>Inactivo</MenuItem>
          </Select>
        </FormControl>
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
        <Button variant="outlined" color="error" onClick={() => setEdit(false)}>
          Cancelar
        </Button>
        <Button variant="contained" color="success" type="submit">
          Agregar Proveedor
        </Button>
      </Box>
    </Box>
  );
};
