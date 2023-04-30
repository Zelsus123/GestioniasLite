import React from "react";
import { Box, IconButton, useTheme, InputBase } from "@mui/material";
import { tokens } from "../themes/blueTheme";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../features/reducers/themeSlice";
import {
  SearchOutlined,
  DarkModeOutlined,
  LightModeOutlined,
  NotificationsOutlined,
  SettingsOutlined,
  PersonOutlined,
} from "@mui/icons-material";

export const TopBar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const tema = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  const handleChangeTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      {/* SEARCH BAR */}
      <Box
        display="flex"
        backgroundColor={colors.AzulPrimario[500]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Buscar..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlined />
        </IconButton>
      </Box>

      {/* ICONOS */}
      <Box display="flex">
        <IconButton onClick={handleChangeTheme}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlined />
          ) : (
            <DarkModeOutlined />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlined />
        </IconButton>
      </Box>
    </Box>
  );
};
