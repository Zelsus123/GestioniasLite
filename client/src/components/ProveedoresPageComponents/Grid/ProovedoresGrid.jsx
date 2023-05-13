import { Box, useTheme, IconButton } from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { DataGrid, esES } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import { HeaderListProveedores } from "./Data/HeaderList";
import { useSelector, useDispatch } from "react-redux";
import { deleteProvider } from "../../../features/crud/proveedoresSlice";

export const ProovedoresGrid = ({ setInfo, info, setEdit, setEditItem }) => {
  const data = useSelector((state) => state.proveedor);
  const dispatch = useDispatch();

  const handleSeeClick = (params) => {
    const selectedObject = data.find((obj) => obj.id === params);
    setInfo(selectedObject);
  };

  const handleEditClick = (params) => {
    setEdit(true);
    const selectedObject = data.find((p) => p.id === params);
    setEditItem(selectedObject);
  };

  const handleDeleteClick = (params) => {
    dispatch(deleteProvider(params));
  };
  const columnasFinales = [
    ...HeaderListProveedores,
    {
      field: "acciones",
      headerName: "Acciones",
      sortable: false,
      width: 150,
      renderCell: (params) => (
        <>
          <IconButton onClick={() => handleSeeClick(params.id)}>
            <VisibilityOutlinedIcon />
          </IconButton>
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

  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "500px",
        paddingBottom: "50px",
      }}
    >
      <DataGrid
        rows={data}
        columns={columnasFinales}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick={true}
        localeText={esES.components.MuiDataGrid.defaultProps.localeText}
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
