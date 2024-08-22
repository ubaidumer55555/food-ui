import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import footerLogo from "../../assets/footerlogo.png";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  padding: "20px",
  position: "fixed",
  bottom: 0,
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const TailSection = () => {
  return (
    <StyledBox>
      <Box sx={{ marginLeft: "100px", maxWidth: "10%" }}>
        <Avatar src={footerLogo} sx={{ width: "181px", height: "108px" }} />
        <Typography align='left' sx={{ fontSize: "0.8rem" }}>
          Experience culinary excellence at FoodUI, where every meal is a
          celebration of flavor and freshness. Feel free to adjust any details
          to better fit your restaurant’s unique style and offerings!
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "15%" }}>
        <Typography variant='h6' sx={{ fontWeight: "700" }}>
          Opening Restaurant
        </Typography>
        <Typography align='left' sx={{ fontSize: "0.8rem" }}>
          Experience culinary excellence at FoodUI, where every meal is a
          celebration of flavor and freshness. Feel free to adjust any details
          to better fit your restaurant’s unique style and offerings!
        </Typography>
      </Box>
      <Box sx={{ maxWidth: "15%" }}></Box>
      <Box sx={{ marginRight: "100px", maxWidth: "10%" }}>hi</Box>
    </StyledBox>
  );
};

export default TailSection;
