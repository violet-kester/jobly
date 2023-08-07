import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#333',
      dark: '#262626',
    },
    secondary: {
      main: '#58009b',
    },
  },
  components: {
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '0',
          '@media (min-width: 600px)': {
            minHeight: '0',
            padding: '15px',
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