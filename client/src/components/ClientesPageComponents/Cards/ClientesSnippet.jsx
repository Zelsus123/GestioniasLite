import { Box, Divider, Icon, Typography } from "@mui/material";

import React from "react";

export const ClientesSnippet = ({ color, text, icon, number }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      width="24%"
      height="140px"
      borderRadius="5px"
      sx={{
        backgroundImage: color,
      }}
    >
      <Box
        display="flex"
        flexDirection="row"
        height="80%"
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
            {number}
          </Typography>
          <Typography variant="subtitle2">{text}</Typography>
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
          <Icon color="#fff">{icon}</Icon>
        </Box>
      </Box>
      <Divider />
      <Box marginLeft="5%" color="#fff">
        <Typography variant="h6">Ultimo Cierre: 25/02/23</Typography>
      </Box>
    </Box>
  );
};
