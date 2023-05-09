import { Box, Divider, Icon, Typography, useTheme } from "@mui/material";
import RequestQuoteOutlinedIcon from "@mui/icons-material/RequestQuoteOutlined";
import React from "react";

export const WastingCard = () => {
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
        height="80%"
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
            5.000$
          </Typography>
          <Typography variant="h6">Gastos</Typography>
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
            <RequestQuoteOutlinedIcon color="#fff" />
          </Icon>
        </Box>
      </Box>
      <Divider />
      <Box marginLeft="5%" color="#fff">
        <Typography variant="h6">Ultimo Cierre: 25/02/23</Typography>
      </Box>
    </Box>
  );
};
