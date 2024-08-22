import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/theme";
import CssBaseline from "@mui/material/CssBaseline";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
    </ThemeProvider>
  );
};
export default App;
