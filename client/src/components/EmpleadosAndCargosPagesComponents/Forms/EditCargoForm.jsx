import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Box,
  TextField,
  Divider,
  Typography,
  Chip,
  Button,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { editCargo } from "../../../features/crud/cargosSlice";

export const EditCargoForm = ({ editItem, setEdit, setEditItem }) => {
  const dispatch = useDispatch();
  const formSchema = yup.object({
    Cargo: yup.string().required("Debe ingresar el nombre del cargo"),
    Descripcion: yup
      .string()
      .required("Debe ingresar una descripcion para el cargo"),
    Permisos: yup.string().required("Debe ingresar los permisos"),
  });
  const initialValues = {
    Cargo: editItem.Cargo,
    Descripcion: editItem.Descripcion,
    Permisos: editItem.Permisos,
  };
  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      const cargoEditado = {
        id: editItem.id,
        Cargo: values.Cargo,
        Descripcion: values.Descripcion,
        Permisos: values.Permisos,
      };
      dispatch(editCargo(cargoEditado));
      setEditItem(null);
      setEdit(false);
    },
  });
  return (
    <Box
      component="form"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: "10px",
      }}
      onSubmit={formik.handleSubmit}
    >
      <Box
        sx={{
          display: "inherit",
          flexDirection: "column",
          width: "100%",
          gap: "10px",
        }}
      >
        <Typography variant="h5" sx={{ margin: "0 auto" }}>
          Registrar Nuevo Cargo
        </Typography>
        <Divider variant="fullwidth">
          <Chip label="Nombre del Cargo" />
        </Divider>
        <TextField
          label="Cargo"
          name="Cargo"
          value={formik.values.Cargo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Cargo && Boolean(formik.errors.Cargo)}
          helperText={formik.touched.Cargo && formik.errors.Cargo}
          margin="normal"
          variant="outlined"
        />
        <Divider variant="fullwidth">
          <Chip label="Descripcion del Cargo" />
        </Divider>
        <TextField
          label="Descripcion"
          name="Descripcion"
          value={formik.values.Descripcion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.Descripcion && Boolean(formik.errors.Descripcion)
          }
          helperText={formik.touched.Descripcion && formik.errors.Descripcion}
          margin="normal"
          variant="outlined"
        />
        <Divider variant="fullwidth">
          <Chip label="Descripcion del Cargo" />
        </Divider>
        <TextField
          label="Permisos"
          name="Permisos"
          value={formik.values.Permisos}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Permisos && Boolean(formik.errors.Permisos)}
          helperText={formik.touched.Permisos && formik.errors.Permisos}
          margin="normal"
          variant="outlined"
        />
        <Box
          sx={{
            display: "inherit",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Button variant="text" color="error">
            Cancelar
          </Button>
          <Button variant="contained" color="success" type="submit">
            Registrar Cargo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
