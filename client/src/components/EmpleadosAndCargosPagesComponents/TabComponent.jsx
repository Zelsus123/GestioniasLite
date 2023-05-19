import { Box, Tab } from "@mui/material";
import { TabList } from "@mui/lab";
import React from "react";

export const TabComponent = ({ setValue }) => {
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        backgroundColor: "background.paper",
        width: "100%",
        borderRadius: "5px",
        boxShadow: 3,
      }}
    >
      <TabList
        sx={{ width: "100%", display: "flex", ml: "25%" }}
        aria-label="tabs example"
        onChange={handleChange}
      >
        <Tab sx={{ width: "50%" }} label="Empleados" value="1" />
        <Tab sx={{ width: "50%" }} label="Cargos" value="2" />
      </TabList>
    </Box>
  );
};
