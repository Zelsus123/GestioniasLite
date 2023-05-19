import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Input,
  Paper,
  Avatar,
} from "@mui/material";
import * as yup from "yup";
import { useFormik } from "formik";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmpleado } from "../../../features/crud/empleadosSlice";

export const CreateForm = () => {
  const dispatch = useDispatch();
  const dataCargos = useSelector((state) => state.cargos);
  const formSchema = yup.object({
    Empleado: yup.string().required("Debe ingresar el nombre del empleado"),
    Cedula: yup.string().required("Debe ingresar la cedula del empleado"),
    Cargo: yup.string().required("Debe seleccionar el cargo del empleado"),
    Salario: yup.number().required("Debe ingresar el salario del usuario"),
    Telefono: yup
      .string()
      .required("Debe ingresar el numero de telefono del usuario"),
    Direccion: yup.string().required("Debe ingresar la dirección del usuario"),
    Correo: yup
      .string()
      .email("Debe ingresar un email valido")
      .required("Debe ingresar el email del usuario"),
    Activo: yup.string().required("Debe seleccionar el estado del Empleado"),
    Password: yup.string().required("Debe ingresar una contraseña"),
    Avatar: yup
      .mixed()
      .required("Debe asignar una imagen de perfil para el Empleado"),
  });
  const initialValues = {
    Empleado: "",
    Cedula: "",
    Cargo: "",
    Salario: "",
    Contraseña: "",
    Telefono: "",
    Direccion: "",
    Correo: "",
    Activo: "",
    Password: "",
    Avatar: null,
    preview: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: formSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addEmpleado(values));
      resetForm();
    },
  });

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue("Avatar", file);
    formik.setFieldValue("preview", URL.createObjectURL(file));
  };

  return (
    <Box
      display="flex"
      component="form"
      onSubmit={formik.handleSubmit}
      sx={{ padding: "5px", flexDirection: "column", mt: "5px" }}
    >
      <Typography variant="h5" sx={{ margin: "0 auto" }}>
        Crear Empleado
      </Typography>
      <Box
        sx={{
          display: "inherit",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextField
          label="Empleado"
          name="Empleado"
          value={formik.values.Empleado}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Empleado && Boolean(formik.errors.Empleado)}
          helperText={formik.touched.Empleado && formik.errors.Empleado}
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

        <TextField
          label="Contraseña"
          name="Password"
          value={formik.values.Password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Contraseña}
          helperText={
            formik.touched.Contarseña && Boolean(formik.errors.Contraseña)
          }
          margin="normal"
          variant="outlined"
        />
      </Box>
      <Box
        sx={{
          display: "inherit",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <TextField
          label="Dirección"
          name="Direccion"
          value={formik.values.Direccion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Direccion && Boolean(formik.errors.Direccion)}
          helperText={formik.touched.Direccion && formik.errors.Direccion}
          margin="normal"
          variant="outlined"
        />

        <TextField
          label="Correo"
          name="Correo"
          value={formik.values.Correo}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Correo && Boolean(formik.errors.Correo)}
          helperText={formik.touched.Correo && formik.errors.Correo}
          margin="normal"
          variant="outlined"
        />

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
      </Box>
      <Box
        sx={{
          display: "inherit",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="cargo-label">Cargo</InputLabel>
          <Select
            labelId="cargo-label"
            id="Cargo"
            name="Cargo"
            value={formik.values.Cargo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Cargo && Boolean(formik.errors.Cargo)}
            label="Empleado Cargo"
            autoWidth
            sx={{
              minWidth: 210,
            }}
          >
            {dataCargos.map((data) => (
              <MenuItem key={data.id} value={data.Cargo}>
                {data.Cargo}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <TextField
          label="Salario"
          name="Salario"
          value={formik.values.Salario}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.Salario && Boolean(formik.errors.Salario)}
          helperText={formik.touched.Salario && formik.errors.Salario}
          margin="normal"
          variant="outlined"
        />
        <FormControl variant="outlined" margin="normal">
          <InputLabel id="activo-label">Empleado Activo</InputLabel>
          <Select
            labelId="activo-label"
            id="Activo"
            name="Activo"
            value={formik.values.Activo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.Activo && Boolean(formik.errors.Activo)}
            label="Empleado Activo"
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
      <Box
        sx={{
          display: "inherit",
          flexDirection: "row",
          justifyContent: "space-around",
          mt: "5px",
          alignItems: "center",
        }}
      >
        <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
          {formik.values.Avatar && formik.values.preview && (
            <Avatar
              src={formik.values.preview}
              sx={{
                width: "140px",
                height: "140px",
                border: "3px solid",
                borderColor: "primary.main",
              }}
            />
          )}
        </Box>
        <Box sx={{ width: "40%", display: "flex", justifyContent: "center" }}>
          <input
            accept="image/*"
            id="avatar"
            name="Avatar"
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label htmlFor="avatar">
            <Button variant="contained" component="span">
              Subir imagen
            </Button>
          </label>
        </Box>
      </Box>
      <Box
        sx={{
          display: "inherit",
          flexDirection: "row",
          justifyContent: "space-around",
          mt: "30px",
        }}
      >
        <Button variant="text" color="error">
          Cancelar
        </Button>
        <Button variant="contained" color="success" type="submit">
          Registrar
        </Button>
      </Box>
    </Box>
  );
};
