import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { toggleTheme } from "../features/theme/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

export const TopBar = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const tema = useSelector((state) => state.theme);
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        borderRadius="3px"
        sx={{ backgroundColor: theme.palette.primary.main, color: "#fff" }}
      >
        <InputBase
          sx={{ ml: 2, flex: 1, color: "#fff" }}
          placeholder="Buscar..."
        />
        <IconButton type="button" sx={{ p: 1, color: "#fff" }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box display="flex">
        <IconButton onClick={() => dispatch(toggleTheme())}>
          {theme.palette.mode === "dark" ? (
            <LightModeOutlinedIcon />
          ) : (
            <DarkModeOutlinedIcon />
          )}
        </IconButton>
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
