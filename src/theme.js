import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    h1: {
      fontSize: "5.1rem",
      fontFamily: "Poppins, sans-serif",
    },
    h2: {
      fontFamily: "Poppins, sans-serif",
    },
    h4: {
      fontFamily: "Poppins, sans-serif",
    },
    h5: {
      fontFamily: "Poppins, sans-serif",
    },
    h6: {
      fontFamily: "Poppins, sans-serif",
    },
    subtitle1: {
      fontFamily: "Poppins, sans-serif",
      fontWeight: "bold",
    },
    subtitle2: {
      fontFamily: "Poppins, sans-serif",
    },
    body1: {
      fontFamily: "Poppins, sans-serif",
    },
    body2: {
      fontFamily: "Poppins, sans-serif",
    },
    button: {
      fontFamily: "Poppins, sans-serif",
      textTransform: "none",
    },
    caption: {
      fontFamily: "Poppins, sans-serif",
    },
    overline: {
      fontFamily: "Poppins, sans-serif",
    },
  },
});
