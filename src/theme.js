import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fff', // white
      main: '#333',  // gray
      dark: '#262626', // dark gray
    },
    secondary: {
      main: '#a5ebc8', // mint
    },
    tertiary: {
      main: '#eeab63' // orange
    },
  },
});