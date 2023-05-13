import { Typography, Box, Divider, Chip, Button, Icon } from "@mui/material";
import React from "react";
import { CategoriasTotalesCard } from "../components/ProductosPageComponents/Cards/CategoriasTotalesCard";
import { ProductosTotalesCard } from "../components/ProductosPageComponents/Cards/ProductosTotalesCard";
import { ProductosEnExistenciaCard } from "../components/ProductosPageComponents/Cards/ProductosEnExistenciaCard";
import { ProductosEnOferta } from "../components/ProductosPageComponents/Cards/ProductosEnOferta";
import { ListaProductos } from "../components/ProductosPageComponents/Grids/ListaProductos";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

export const Productos = () => {
  return (
    <Box>
      <Typography variant="h4" marginLeft="5%">
        Productos
      </Typography>
      <Box marginTop="5px" display="flex" justifyContent="space-between">
        <ProductosTotalesCard />
        <ProductosEnExistenciaCard />
        <ProductosEnOferta />
        <CategoriasTotalesCard />
      </Box>
      <Divider>
        <Chip sx={{ mt: "10px" }} label="Productos" />
      </Divider>
      <Box marginTop="10px">
        <Box display="flex" justifyContent="space-around" alignItems="center">
          <Typography>Lista de productos</Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddOutlinedIcon />}
          >
            Agregar Producto
          </Button>
        </Box>
        <Box
          marginTop="10px"
          sx={{
            backgroundColor: "background.paper",
            borderRadius: "5px",
            boxShadow: 2,
          }}
        >
          <ListaProductos />
        </Box>
      </Box>
    </Box>
  );
};
