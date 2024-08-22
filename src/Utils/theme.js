// src/theme.js
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Arial, sans-serif", // Set Montserrat as the default font
    h1: {
      fontFamily: "Montserrat", // Ensure headers use Montserrat
    },
    h2: {
      fontFamily: "Montserrat",
    },
    // Add other typography settings if needed
  },
  palette: {
    primary: {
      main: "#F48E28", // Primary color
    },
    secondary: {
      main: "#B6B6B6", // Secondary color
    },
    text: {
      primary: "#000000", // Text color
    },
  },
});

export default theme;
