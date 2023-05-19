import * as yup from "yup";

export const validacionesEmpleados = yup.object({
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
  Password: yup
    .string()
    .required("Debe ingresar una contraseña para el Empleado "),
  Avatar: yup
    .string()
    .required("Debe asignar una imagen de perfil para el Empleado"),
});

export const validacionesCargos = yup.object({
  Cargo: yup.string().required("Debe ingresar el nombre del cargo"),
  Descripcion: yup
    .string()
    .required("Debe ingresar una descripción para el cargo a registrar"),
  Permisos: yup
    .string()
    .required("Debe seleccionar los permisos para el usuario"),
});
