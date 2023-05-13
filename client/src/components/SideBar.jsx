import React, { useState } from "react";
import {
  Avatar,
  Box,
  Divider,
  Icon,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { Link, useLocation } from "react-router-dom";
import { SideBarData } from "./data/SideBarData";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

export const SideBarLateral = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        width: open ? 250 : 80,
        color: theme.palette.primary.contrastText,
        textAlign: "center",
        height: "100vh",
        justifyContent: "center",
        borderRadius: "0 10px 10px 0",
        transition: "0.5s",
        position: "sticky", // Agregamos position relative para que el icono pueda ser posicionado absolutamente en relación a este contenedor.
      }}
    >
      <IconButton
        onClick={() => setOpen(!open)}
        sx={{
          color: theme.palette.primary.contrastText,
          position: "absolute", // Establecemos la posición absoluta para que el icono se sitúe en el borde del contenedor principal.
          right: open ? "-10px" : "-10px", // Si el sidebar está abierto, lo colocamos a la derecha del contenedor principal, en caso contrario a la izquierda.
          top: "20%", // Alineamos verticalmente el icono al centro.
          transform: "translateY(-50%)", // Corregimos el posicionamiento vertical.
          backgroundColor: theme.palette.primary.main,
          height: "30px",
          width: "30px",
        }}
      >
        {open ? (
          <ArrowCircleLeftOutlinedIcon />
        ) : (
          <ArrowCircleRightOutlinedIcon />
        )}
      </IconButton>
      <Box
        sx={{
          display: "inherit",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          height: "200px",
          width: "100%",
          marginTop: open ? "270px" : "140px",
          flexDirection: "column",
        }}
      >
        <Avatar
          alt="Profile"
          src="/profile.jpg"
          sx={{
            marginTop: "20px",
            border: "3px solid #fff",
            width: open ? "150px" : "50px",
            height: open ? "150px" : "50px",
            transition: "0.5s",
          }}
        />

        {open ? (
          <Box sx={{ mb: "15px" }}>
            <Typography variant="h6" marginTop="4px">
              Usuario Prueba
            </Typography>
            <Typography variant="h7" marginBottom="4px">
              Developer
            </Typography>
          </Box>
        ) : null}
        <Box
          sx={{
            width: open ? "100%" : "50%",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <List
            sx={{
              alignItems: "center",
              gap: "0px",
              justifyContent: open ? "flex-start" : "center",
            }}
          >
            {SideBarData.map((item) => (
              <Link
                to={item.to}
                style={{ textDecoration: "none", color: "inherit", mb: "2px" }}
                key={item.to}
              >
                <ListItemButton
                  sx={{
                    textAlign: "center",
                    borderRadius: "10px",
                    mb: "5px",
                    justifyContent: open ? "flex-start" : "center",
                    alignItems: "center",
                    boxSizing: "border-box",
                    display: "flex",
                    color: "#fff",
                    backgroundColor:
                      location.pathname === item.to
                        ? "primary.light"
                        : "transparent",
                  }}
                  aria-current={
                    location.pathname === item.to ? "page" : undefined
                  }
                >
                  <ListItemIcon
                    sx={{ color: "#fff", justifyContent: "center" }}
                  >
                    {item.Icon}
                  </ListItemIcon>
                  {open ? <ListItemText primary={item.text} /> : null}
                </ListItemButton>
              </Link>
            ))}
          </List>
        </Box>
        <Divider />
        <Box
          sx={{
            width: open ? "100%" : "50%",
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <List
            sx={{
              alignItems: "center",
              gap: "0px",
              justifyContent: open ? "flex-start" : "center",
            }}
          >
            {" "}
            <Link
              to="/logout"
              style={{ textDecoration: "none", color: "inherit", mb: "2px" }}
            >
              <ListItemButton
                sx={{
                  textAlign: "center",
                  borderRadius: "10px",
                  mb: "5px",
                  justifyContent: open ? "flex-start" : "center",
                  alignItems: "center",
                  boxSizing: "border-box",
                  display: "flex",
                  color: "#fff",
                }}
              >
                <ListItemIcon sx={{ color: "#fff", justifyContent: "center" }}>
                  <LogoutOutlinedIcon />
                </ListItemIcon>
                {open ? <ListItemText primary="Cerrar Sesion" /> : null}
              </ListItemButton>
            </Link>
          </List>
        </Box>
      </Box>
    </Box>
  );
};
