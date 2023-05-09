import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#457cb6",
    },
    secondary: {
      main: "#1e56b8",
    },
    info: {
      main: "#0e2067",
    },
    divider: "rgba(51,47,47,0.12)",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#457cb6",
    },
    secondary: {
      main: "#1e56b8",
    },
    info: {
      main: "#0e2067",
    },

    divider: "rgba(51,47,47,0.12)",
  },
  components: {
    MuiDataGrid: {
      styleOverrides: {
        root: {
          "& .MuiDataGrid-cell .MuiButton-root": {
            color: "#fff",
            backgroundColor: "#424242",
            "&:hover": {
              backgroundColor: "#616161",
            },
          },
        },
      },
    },
  },
});
