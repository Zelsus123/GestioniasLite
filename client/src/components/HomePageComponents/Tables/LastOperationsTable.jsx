import {
  Box,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Table,
  useTheme,
  TableBody,
} from "@mui/material";
import React from "react";
import { fakeDataLastOperationSidebar } from "./fakeData/LastOperationsTableData";

export const LastOperationsTable = () => {
  const dataOrdenada = fakeDataLastOperationSidebar.sort((a, b) => b.id - a.id);
  const slicedData = dataOrdenada.slice(0, 5);
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "49%",
        height: "350px",
        backgroundColor: "background.paper",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mt: "10px",
        boxShadow: 3,
      }}
    >
      <Box sx={{ height: "1%" }}></Box>
      <TableContainer
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "98%",
          height: "90%",
          borderRadius: "5px",
        }}
      >
        <Table sx={{ "& .MuiDivider-root": { backgroundColor: "blue" } }}>
          <TableHead>
            <TableRow>
              <TableCell>Cliente</TableCell>
              <TableCell>Producto</TableCell>
              <TableCell>Monto</TableCell>
              <TableCell>Pago</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slicedData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.nombre}</TableCell>
                <TableCell>{item.producto}</TableCell>
                <TableCell>{item.monto}</TableCell>
                <TableCell>{item.pago}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
