import { AppBar, Avatar, Toolbar, Box } from "@mui/material";
import { NavbarItems } from "./Items";
import logo from "../../assets/logo192.png";

function Navbar() {
  return (
    <>
      <AppBar position='relative'>
        <Toolbar>
          <Box>
            <Avatar src={logo} />
          </Box>
          <Box>
            <NavbarItems />
          </Box>
          <Box>Search</Box>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
