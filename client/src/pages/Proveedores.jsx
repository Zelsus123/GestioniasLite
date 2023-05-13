import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import { SnippetCard } from "../components/ProveedoresPageComponents/Cards/SnippetCard";
import { ProovedoresGrid } from "../components/ProveedoresPageComponents/Grid/ProovedoresGrid";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";
import LocalHotelOutlinedIcon from "@mui/icons-material/LocalHotelOutlined";
import { ProveedorForm } from "../components/ProveedoresPageComponents/Form/ProveedorForm";
import { ProveedorEditForm } from "../components/ProveedoresPageComponents/Form/ProveedorEditForm";
import { ProveedorDetails } from "../components/ProveedoresPageComponents/Cards/ProveedorDetails";

export const Proveedores = () => {
  const theme = useTheme();
  const [info, setInfo] = useState(null);
  const [edit, setEdit] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [editItem]);
  const colors = {
    fistCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #1d976c, #93f9b9)"
          : "linear-gradient(to right, #3ca55c, #b5ac49)",
      text: "Proveedores Registrados",
      icon: <LocalShippingOutlinedIcon />,
      number: "20",
    },

    secondCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #ff5f6d, #ffc371)"
          : "linear-gradient(to right, #ff4b1f, #ff9068)",
      text: "Proveedores Activos",
      icon: <InventoryOutlinedIcon />,
      number: "25",
    },
    thirdCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #36d1dc, #5b86e5)"
          : "linear-gradient(to right, #2980b9, #2c3e50)",
      text: "Proovedores Inactivos",
      icon: <LocalHotelOutlinedIcon />,
      number: "50",
    },
    fourthCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #67b26f, #4ca2cd)"
          : "linear-gradient(to right, #4ecdc4, #556270)",
      text: "",
      icon: "",
      number: "45",
    },
  };
  return (
    <Box overflowY="scroll" paddingBottom="50px">
      <Typography variant="h4" marginLeft="5%">
        Proveedores
      </Typography>
      {/*Snippets*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "5px",
        }}
      >
        <SnippetCard
          color={colors.fistCard.color}
          text={colors.fistCard.text}
          icon={colors.fistCard.icon}
          number={colors.fistCard.number}
        />
        <SnippetCard
          color={colors.secondCard.color}
          text={colors.secondCard.text}
          icon={colors.secondCard.icon}
          number={colors.secondCard.number}
        />
        <SnippetCard
          color={colors.thirdCard.color}
          text={colors.thirdCard.text}
          icon={colors.thirdCard.icon}
          number={colors.thirdCard.number}
        />
      </Box>
      <Divider>
        <Chip label="Proveedores" sx={{ mt: "10px" }} />
      </Divider>
      <Box
        sx={{ mt: "15px", display: "flex", justifyContent: "space-between" }}
      >
        <Box
          sx={{
            width: "49%",
            height: "500px",
            boxShadow: 3,
            backgroundColor: "background.paper",
            borderRadius: "5px",
          }}
        >
          <ProovedoresGrid
            setInfo={setInfo}
            info={info}
            setEdit={setEdit}
            setEditItem={setEditItem}
          />
        </Box>
        <Box
          sx={{
            width: "49%",
            height: "500px",
            boxShadow: 3,
            backgroundColor: "background.paper",
            borderRadius: "5px",
          }}
        >
          {loading ? (
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              verticalAlign="center"
              height="100%"
            >
              <CircularProgress size={100} color="primary" />
            </Box>
          ) : edit ? (
            <ProveedorEditForm
              edit={edit}
              editItem={editItem}
              setEdit={setEdit}
              setEditItem={setEditItem}
            />
          ) : (
            <ProveedorForm edit={edit} editItem={editItem} setEdit={setEdit} />
          )}
        </Box>
      </Box>
      <Divider sx={{ mt: "10px" }}>
        <Chip label="Detalles Proveedor" />
      </Divider>
      <Box
        sx={{
          width: "100%",
          height: "450px",
          backgroundColor: "background.paper",
          boxShadow: 3,
          borderRadius: "5px",
          mt: "10px",
          justifyContent: "space-between",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: "49%",
          }}
        >
          <ProveedorDetails info={info} setInfo={setInfo} />
        </Box>
        <Divider orientation="vertical" variant="fullWidth" />
        <Box
          sx={{
            width: "49%",
          }}
        ></Box>
      </Box>
    </Box>
  );
};
