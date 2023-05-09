import { Box, Icon, Typography, useTheme } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

import React from "react";

export const ProductosTotalesCard = () => {
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
            ? "linear-gradient(to right, #1d976c, #93f9b9)"
            : "linear-gradient(to right, #3ca55c, #b5ac49)",
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        height="100%"
        justifyContent="space-between"
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
            95
          </Typography>
          <Typography variant="subtitle2">Productos Registrados</Typography>
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
            <Inventory2OutlinedIcon color="#fff" />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};
