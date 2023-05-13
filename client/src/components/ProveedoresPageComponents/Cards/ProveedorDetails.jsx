import { Box, Button, Chip, Divider, Icon, Typography } from "@mui/material";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import AlternateEmailOutlinedIcon from "@mui/icons-material/AlternateEmailOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AttachMoneyOutlinedIcon from "@mui/icons-material/AttachMoneyOutlined";
import React from "react";

export const ProveedorDetails = ({ info, setInfo }) => {
  const estadoProveedor = info ? (info.Activo ? "Activo" : "Inactivo") : null;
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "40px",
        margin: "0 auto",
        gap: "5px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4">
          {info
            ? info.Proveedor + ` (${estadoProveedor})`
            : "Seleccione un Proveedor"}
        </Typography>
      </Box>
      <Divider variant="full">
        <Chip label="Informacion de Identificación" />
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box display="flex" flexDirection="column">
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              boxSizing: "border-box",
              alignItems: "baseline",
            }}
          >
            <Icon>
              <BadgeOutlinedIcon />
            </Icon>
            <Typography variant="h6">RIF</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {info ? info.RIF : "Seleccione un Proveedor"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              boxSizing: "border-box",
              alignItems: "baseline",
            }}
          >
            <Icon>
              <FmdGoodOutlinedIcon />
            </Icon>
            <Typography variant="h6">Direccion</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {info ? info.Direccion : "Seleccione un Proveedor"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider>
        <Chip label="Datos de contacto" />
      </Divider>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              boxSizing: "border-box",
              alignItems: "baseline",
            }}
          >
            <Icon>
              <LocalPhoneOutlinedIcon />
            </Icon>
            <Typography variant="h6">Telefono</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {info ? info.Telefono : "Seleccione un Proveedor"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              boxSizing: "border-box",
              alignItems: "baseline",
            }}
          >
            <Icon>
              <AlternateEmailOutlinedIcon />
            </Icon>
            <Typography variant="h6">Correo Electronico</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {info ? info.Correo : "Seleccione un Proveedor"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider>
        <Chip label="Datos Financieros" />
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              boxSizing: "border-box",
              alignItems: "baseline",
            }}
          >
            <Icon>
              <PaymentsOutlinedIcon />
            </Icon>
            <Typography variant="h6">Total Compras Bs</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {info
                ? info.ComprasDolares * 25 + " Bs"
                : "Seleccione un Proveedor"}
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              boxSizing: "border-box",
              alignItems: "baseline",
            }}
          >
            <Icon>
              <AttachMoneyOutlinedIcon />
            </Icon>
            <Typography variant="h6">Total Compras Divisas</Typography>
          </Box>
          <Box>
            <Typography variant="body2">
              {info ? info.ComprasDolares + "$" : "Seleccione un Proveedor"}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        variant="contained"
        color="primary"
        sx={{ mt: "20px" }}
        onClick={() => setInfo(null)}
      >
        Cerrar Proveedor
      </Button>
    </Box>
  );
};
