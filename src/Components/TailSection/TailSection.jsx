import { Avatar, Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.text.primary,
  padding: "20px",
  textAlign: "center",
  position: "fixed",
  bottom: 0,
  width: "100%",
}));

const TailSection = () => {
  return (
    <StyledBox>
      <Box>
        <Avatar />
      </Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </StyledBox>
  );
};

export default TailSection;
