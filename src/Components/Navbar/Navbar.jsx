import { AppBar, Avatar, Toolbar, Box } from "@mui/material";
import { NavbarItems } from "./Items";
import logo from "../../assets/logo.png";
import { styled } from "@mui/system";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main, // Set the background color here
}));

const StyledToolBar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const Navbar = () => {
  return (
    <>
      <StyledAppBar position='relative'>
        <StyledToolBar>
          <Box
            sx={{
              marginLeft: "100px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Avatar src={logo} sx={{ width: "94px", height: "56px" }} />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <NavbarItems />
          </Box>
          <Box
            sx={{
              marginRight: "100px",
              display: "flex",
              justifyContent: "flex-end",
            }}
          ></Box>
        </StyledToolBar>
      </StyledAppBar>
    </>
  );
};

export default Navbar;
