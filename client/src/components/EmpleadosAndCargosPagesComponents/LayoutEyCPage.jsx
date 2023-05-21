import { Box, CircularProgress } from "@mui/material";
import React, { useState, useEffect } from "react";
import { DataGridEyC } from "./Grid/DataGridEyC";
import { DetailsEyCComponent } from "./DetailsEyCComponent";
import { CreateForm } from "./Forms/CreateEmpleadoForm";
import { EditEmpleadoForm } from "./Forms/EditEmpleadoForm";
import { CreateCargoForm } from "./Forms/CreateCargoForm";
import { EditCargoForm } from "./Forms/EditCargoForm";

export const LayoutEyCPage = ({
  data,
  columnasGrid,
  info,
  setInfo,
  details,
  page,
  deleteItem,
  edit,
  setEdit,
  editItem,
  setEditItem,
}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [editItem]);
  const valueButton = page === "1" ? "Empleado" : "Cargo";
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          display: "inherit",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            width: "49%",
            backgroundColor: "background.paper",
            boxShadow: 3,
            borderRadius: "5px",
            height: "530px",
          }}
        >
          <DataGridEyC
            data={data}
            columnas={columnasGrid}
            setInfo={setInfo}
            deleteItem={deleteItem}
            setEdit={setEdit}
            setEditItem={setEditItem}
          />
        </Box>
        <Box
          sx={{
            width: "49%",
            backgroundColor: "background.paper",
            boxShadow: 3,
            borderRadius: "5px",
            height: "530px",
          }}
        >
          <DetailsEyCComponent
            info={info}
            details={details}
            page={valueButton}
            setInfo={setInfo}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: "20px",
        }}
      >
        <Box
          sx={{
            width: "60%",
            backgroundColor: "background.paper",
            height: "550px",
            borderRadius: "5px",
            boxShadow: 3,
          }}
        >
          {page === "1" ? (
            edit ? (
              loading ? (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  verticalAlign="center"
                  height="100%"
                >
                  <CircularProgress size={100} color="primary" />
                </Box>
              ) : (
                <EditEmpleadoForm
                  editItem={editItem}
                  setEdit={setEdit}
                  setEditItem={setEditItem}
                />
              )
            ) : (
              <CreateForm />
            )
          ) : edit ? (
            loading ? (
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                verticalAlign="center"
                height="100%"
              >
                <CircularProgress size={100} color="primary" />
              </Box>
            ) : (
              <EditCargoForm
                editItem={editItem}
                setEdit={setEdit}
                setEditItem={setEditItem}
              />
            )
          ) : (
            <CreateCargoForm />
          )}
        </Box>
        <Box
          sx={{
            width: "39%",
            backgroundColor: "background.paper",
            height: "550px",
            borderRadius: "5px",
            boxShadow: 3,
          }}
        ></Box>
      </Box>
    </Box>
  );
};
