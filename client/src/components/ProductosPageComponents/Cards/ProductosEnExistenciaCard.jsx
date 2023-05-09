import { Box, Icon, Typography, useTheme } from "@mui/material";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import React from "react";

export const ProductosEnExistenciaCard = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="24%"
      height="140px"
      borderRadius="5px"
      sx={{
        backgroundImage:
          theme.palette.mode === "light"
            ? "linear-gradient(to right, #ff5f6d, #ffc371)"
            : "linear-gradient(to right, #ff4b1f, #ff9068)",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        height="100%"
        justifyContent="center"
        alignItems="center"
        sx={{
          verticalAlign: "center",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          color="#fff"
          marginLeft="5%"
        >
          <Typography variant="h3" marginBottom="0px">
            2400
          </Typography>
          <Typography variant="subtitle2">Productos en Stock</Typography>
        </Box>
        <Box
          width="45%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            transform: "scale(3)", // Escala el icono 1.5 veces su tamaño original
            verticalAlign: "center",
            color: "#fff",
          }}
        >
          <Icon color="#fff">
            <InventoryOutlinedIcon color="#fff" />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};
