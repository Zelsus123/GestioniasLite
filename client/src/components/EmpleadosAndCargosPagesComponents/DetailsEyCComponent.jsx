import {
  Avatar,
  Box,
  Button,
  Chip,
  Divider,
  Icon,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";

export const DetailsEyCComponent = ({ info, details, page, setInfo }) => {
  return info ? (
    <Box sx={{ display: "flex", flexDirection: "column", padding: "20px" }}>
      <Box
        sx={{
          mt: "10px",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {details.Avatar ? (
          <Avatar
            alt="Perfil"
            src={details.Avatar?.detalle}
            sx={{
              width: 120,
              height: 120,
              border: "3px solid",
              borderColor: "primary.main",
            }}
          />
        ) : null}

        <Typography variant="h4">
          {details?.Nombre.detalle || "Seleccione el elemento"}
        </Typography>
      </Box>
      <Divider sx={{ mt: "10px" }}>
        <Chip label={`informacion del ${page}`} />
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "inherit", flexDirection: "row" }}>
            <Icon>{details.firstDetail?.icon}</Icon>
            <Typography variant="h6">{details.firstDetail?.text}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {details.firstDetail?.detalle}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "inherit", flexDirection: "row" }}>
            <Icon>{details.secondDetail?.icon}</Icon>
            <Typography variant="h6">{details.secondDetail?.text}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {details.secondDetail?.detalle}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "inherit", flexDirection: "row" }}>
            <Icon>{details.thirdDetail?.icon}</Icon>
            <Typography variant="h6">{details.thirdDetail?.text}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {details.thirdDetail?.detalle}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "inherit", flexDirection: "row" }}>
            <Icon>{details.fourthDetail?.icon}</Icon>
            <Typography variant="h6">{details.fourthDetail?.text}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {details.fourthDetail?.detalle}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider>
        <Chip
          label={
            page === "Empleado"
              ? "Informacion de Contacto"
              : "Informacion de Permisos"
          }
        />
      </Divider>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "4px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "inherit", flexDirection: "row" }}>
            <Icon>{details.septDetail?.icon}</Icon>
            <Typography variant="h6">{details.septDetail?.text}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {details.septDetail?.detalle}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box sx={{ display: "inherit", flexDirection: "row" }}>
            <Icon>{details.octDetail?.icon}</Icon>
            <Typography variant="h6">{details.octDetail?.text}</Typography>
          </Box>
          <Box>
            <Typography variant="body1">
              {details.octDetail?.detalle}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Button
        sx={{ mt: "30px" }}
        variant="contained"
        onClick={() => setInfo(null)}
      >{`Cerrar ${page}`}</Button>
    </Box>
  ) : (
    <Box sx={{ display: "flex", height: "100%", alignItems: "center" }}>
      <Typography variant="h5" sx={{ margin: "0 auto" }}>
        Debe seleccionar un {page}
      </Typography>
    </Box>
  );
};
