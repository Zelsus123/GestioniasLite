import { Box, Divider, Icon, Typography, useTheme } from "@mui/material";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import CategoryOutlinedIcon from "@mui/icons-material/CategoryOutlined";
import React from "react";

export const CategoriasTotalesCard = () => {
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
            ? "linear-gradient(to right, #67b26f, #4ca2cd)"
            : "linear-gradient(to right, #4ecdc4, #556270)",
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
          <Typography variant="subtitle2">Categorias Registradas</Typography>
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
            <CategoryOutlinedIcon color="#fff" />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};
