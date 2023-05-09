import React from "react";
import { Box, Typography, useTheme, Icon } from "@mui/material";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";

export const ProductosEnOferta = () => {
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
            ? "linear-gradient(to right, #36d1dc, #5b86e5)"
            : "linear-gradient(to right, #2980b9, #2c3e50)",
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
            50
          </Typography>
          <Typography variant="subtitle2">Productos en Oferta</Typography>
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
            <LocalOfferOutlinedIcon color="#fff" />
          </Icon>
        </Box>
      </Box>
    </Box>
  );
};
