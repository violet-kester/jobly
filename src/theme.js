import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#333',
      dark: '#262626',
    },
    secondary: {
      main: '#a5ebc8',
    },
    tertiary: {
      main: '#eeab63'
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 600px)': {
            padding: '0',
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          letterSpacing: '1px',
        },
        h1: {
          color: '#333',
          letterSpacing: '4px'
        },
        h4: {
          color: '#333',
        },
        h5: {
          color: '#333'
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        contained: {
          letterSpacing: '2px',
        },
        outlined: {
          letterSpacing: '2px',
        },
      },
    },
  },
});