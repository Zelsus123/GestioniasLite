import React, { useEffect, useState } from "react";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import TextSnippetOutlinedIcon from "@mui/icons-material/TextSnippetOutlined";
import ChecklistOutlinedIcon from "@mui/icons-material/ChecklistOutlined";
import { Box, Typography } from "@mui/material";
import { TabContext, TabPanel } from "@mui/lab";
import { TabComponent } from "../components/EmpleadosAndCargosPagesComponents/TabComponent";
import { LayoutEyCPage } from "../components/EmpleadosAndCargosPagesComponents/LayoutEyCPage";
import { useSelector } from "react-redux";
import { deleteEmpleado } from "../features/crud/empleadosSlice";
import { deleteCargo } from "../features/crud/cargosSlice";

const gridHeaderEmpleados = [
  {
    field: "Empleado",
    headerName: "Empleado",
    width: 140,
    editable: false,
  },
  {
    field: "Cedula",
    headerName: "Cedula",
    width: 120,
    editable: false,
  },
  {
    field: "Telefono",
    headerName: "Telefono",
    width: 160,
    editable: false,
  },
];
const gridHeaderCargos = [
  {
    field: "Cargo",
    headerName: "Cargo",
    width: 160,
    editable: false,
  },
  {
    field: "Descripcion",
    headerName: "Descripcion",
    width: 160,
    editable: false,
  },
];

export const EmpleadosAndCargosPage = () => {
  const empleadosData = useSelector((state) => state.empleados);
  const cargosData = useSelector((state) => state.cargos);
  const [value, setValue] = useState("1");
  const [info, setInfo] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState(false);

  useEffect(() => {
    setInfo(null);
  }, [value]);

  const detailsEmpleados = {
    firstDetail: {
      text: "Cedula",
      icon: <BadgeOutlinedIcon />,
      detalle: info?.Cedula,
    },
    secondDetail: {
      text: "Dirección",
      icon: <LocationOnOutlinedIcon />,
      detalle: info?.Direccion,
    },
    thirdDetail: {
      text: "Cargo",
      icon: <WorkOutlineOutlinedIcon />,
      detalle: info?.Cargo,
    },
    fourthDetail: {
      text: "Salario",
      icon: <MonetizationOnOutlinedIcon />,
      detalle: info?.Salario,
    },
    Nombre: {
      text: "",
      icon: "",
      detalle: info?.Empleado,
    },
    sixthDetail: {
      text: "",
      icon: "",
      detalle: info?.Activo,
    },
    septDetail: {
      text: "Telefono",
      icon: <LocalPhoneOutlinedIcon />,
      detalle: info?.Telefono,
    },
    octDetail: {
      text: "Correo",
      icon: <EmailOutlinedIcon />,
      detalle: info?.Telefono,
    },
    Avatar: {
      text: "",
      icon: "",
      detalle: info?.Avatar,
    },
  };
  const detailsCargos = {
    firstDetail: {
      text: "Descripción",
      icon: <TextSnippetOutlinedIcon />,
      detalle: info ? (info.Descripcion ? info.Descripcion : null) : null,
    },
    septDetail: {
      text: "Permisos",
      icon: <ChecklistOutlinedIcon />,
      detalle: info ? (info.Permisos ? info.Permisos : null) : null,
    },

    Nombre: {
      text: "",
      icon: "",
      detalle: info ? (info.Cargo ? info.Cargo : null) : null,
    },
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", width: "100%" }}>
      <Typography variant="h4" marginLeft="5%" sx={{ mb: "15px" }}>
        {value === "1" ? "Empleados" : "Cargos"}
      </Typography>
      <TabContext value={value}>
        <Box sx={{ width: "100%", justifyContent: "center" }}>
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabComponent setValue={setValue} />
          </Box>
        </Box>

        <Box>
          <TabPanel value="1">
            <LayoutEyCPage
              data={empleadosData}
              columnasGrid={gridHeaderEmpleados}
              info={info}
              setInfo={setInfo}
              details={detailsEmpleados}
              page={value}
              deleteItem={deleteEmpleado}
              edit={edit}
              setEdit={setEdit}
              editItem={editItem}
              setEditItem={setEditItem}
            />
          </TabPanel>
          <TabPanel value="2">
            <LayoutEyCPage
              data={cargosData}
              columnasGrid={gridHeaderCargos}
              info={info}
              setInfo={setInfo}
              page={value}
              details={detailsCargos}
              deleteItem={deleteCargo}
              edit={edit}
              setEdit={setEdit}
              editItem={editItem}
              setEditItem={setEditItem}
            />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};
