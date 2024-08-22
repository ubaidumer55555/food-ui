import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./Utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import TailSection from "./Components/TailSection/TailSection";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <TailSection />
    </ThemeProvider>
  );
};
export default App;
