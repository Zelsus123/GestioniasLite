import { Box, IconButton, useTheme } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import { DataGrid, esES as SpanishLocale } from "@mui/x-data-grid";
import React from "react";
import { HeaderList } from "./Data/HeaderList";
import { FakeProductData } from "./Data/FakeProductData";
import { esES } from "@mui/material/locale";

export const ListaProductos = () => {
  const theme = useTheme();
  const handleDeleteClick = () => {};

  const handleEditClick = () => {};
  const columnasFinales = [
    ...HeaderList,
    {
      field: "acciones",
      headerName: "Acciones",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton
            onClick={() => handleEditClick(params.id)}
            color={
              theme.palette.mode === "light" ? "info" : "primary.contrastText"
            }
          >
            <ModeEditOutlineOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={() => handleDeleteClick(params.id)}
            color="error"
          >
            <DeleteForeverOutlinedIcon />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <Box
      sx={{
        height: "500px",
        paddingBottom: "50px",
      }}
    >
      <DataGrid
        rows={FakeProductData}
        columns={columnasFinales}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        localeText={
          SpanishLocale.components.MuiDataGrid.defaultProps.localeText
        }
        sx={{
          color: theme.palette.text.primary,
          "& .MuiDataGrid-cell": {
            color:
              theme.palette.mode === "dark"
                ? theme.palette.common.white
                : theme.palette.text.primary,
            "& .MuiDataGrid-rowActions": {
              visibility: "inherit",
            },
          },
          "& .css-1pe4mpk-MuiButtonBase-root-MuiIconButton-root": {
            color: theme.palette.mode === "light" ? "black " : "#fff",
          },
          "& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root": {
            color: theme.palette.mode === "light" ? "black" : "#fff",
          },
          "& .css-rtrcn9-MuiTablePagination-root": {
            color: theme.palette.text.primary,
          },
          "& .css-194a1fa-MuiSelect-select-MuiInputBase-input, & .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon, & .css-i4bv87-MuiSvgIcon-root":
            {
              color: theme.palette.text.primary,
            },
        }}
      />
    </Box>
  );
};
