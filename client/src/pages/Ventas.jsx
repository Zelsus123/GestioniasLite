import React from "react";
import { Box, Typography } from "@mui/material";

export const Ventas = () => {
  return (
    <Box>
      <Typography sx={{ ml: "5%" }} variant="h4">
        Punto de Venta
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          mt: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              backgroundColor: "background.paper",
              width: "45%",
              borderRadius: "5px",
              boxShadow: 3,
              height: "500px",
              display: "flex",
              padding: "5px",
            }}
          >
            <Typography variant="h5" sx={{ margin: "0 auto" }}>
              Lista de Productos
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "background.paper",
              width: "35%",
              borderRadius: "5px",
              boxShadow: 3,
              height: "500px",
              display: "flex",
              padding: "5px",
            }}
          >
            <Typography variant="h5" sx={{ margin: "0 auto" }}>
              Totales
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "primary.main",
              width: "15%",
              borderRadius: "5px",
              boxShadow: 3,
              height: "500px",
              display: "flex",
              padding: "5px",
            }}
          >
            <Typography
              variant="h5"
              sx={{ margin: "0 auto", color: "primary.contrastText" }}
            >
              Lista de Pagos
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
