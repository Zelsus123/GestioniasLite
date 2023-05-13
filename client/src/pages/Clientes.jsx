import React, { useEffect, useState } from "react";
import {
  Box,
  Chip,
  CircularProgress,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import Diversity3OutlinedIcon from "@mui/icons-material/Diversity3Outlined";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import PersonAddAlt1OutlinedIcon from "@mui/icons-material/PersonAddAlt1Outlined";
import PercentOutlinedIcon from "@mui/icons-material/PercentOutlined";
import { ClientesSnippet } from "../components/ClientesPageComponents/Cards/ClientesSnippet";
import { ClientesGrid } from "../components/ClientesPageComponents/Grid/ClientesGrid";
import { ClienteForm } from "../components/ClientesPageComponents/Forms/ClientForm";
import { ClientEditForm } from "../components/ClientesPageComponents/Forms/ClientEditForm";
import { ClientDetails } from "../components/ClientesPageComponents/Cards/ClientDetails";

export const Clientes = () => {
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
      text: "Clientes Registrados",
      icon: <Diversity3OutlinedIcon />,
      number: "15",
    },

    secondCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #ff5f6d, #ffc371)"
          : "linear-gradient(to right, #ff4b1f, #ff9068)",
      text: "Promedio Compras por Cliente",
      icon: <ShoppingBasketOutlinedIcon />,
      number: "25",
    },
    thirdCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #36d1dc, #5b86e5)"
          : "linear-gradient(to right, #2980b9, #2c3e50)",
      text: "Registrados Hoy",
      icon: <PersonAddAlt1OutlinedIcon />,
      number: "5",
    },
    fourthCard: {
      color:
        theme.palette.mode === "light"
          ? "linear-gradient(to right, #67b26f, #4ca2cd)"
          : "linear-gradient(to right, #4ecdc4, #556270)",
      text: "Clientes con compras recurrentes",
      icon: <PercentOutlinedIcon />,
      number: "85%",
    },
  };
  return (
    <Box overflowY="scroll" paddingBottom="50px">
      <Typography variant="h4" marginLeft="5%">
        Clientes
      </Typography>
      {/*Snippets*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <ClientesSnippet
          color={colors.fistCard.color}
          text={colors.fistCard.text}
          icon={colors.fistCard.icon}
          number={colors.fistCard.number}
        />
        <ClientesSnippet
          color={colors.secondCard.color}
          text={colors.secondCard.text}
          icon={colors.secondCard.icon}
          number={colors.secondCard.number}
        />
        <ClientesSnippet
          color={colors.thirdCard.color}
          text={colors.thirdCard.text}
          icon={colors.thirdCard.icon}
          number={colors.thirdCard.number}
        />
        <ClientesSnippet
          color={colors.fourthCard.color}
          text={colors.fourthCard.text}
          number={colors.fourthCard.number}
          icon={colors.fourthCard.icon}
        />
      </Box>
      <Divider>
        <Chip label="Clientes" sx={{ mt: "10px" }} />
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
          <ClientesGrid
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
            <ClientEditForm
              edit={edit}
              editItem={editItem}
              setEdit={setEdit}
              setEditItem={setEditItem}
            />
          ) : (
            <ClienteForm edit={edit} editItem={editItem} setEdit={setEdit} />
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
          <ClientDetails info={info} setInfo={setInfo} />
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
