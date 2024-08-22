import { items } from "../../Utils/navbarItems";
import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export const NavbarItems = () => {
  const theme = useTheme(); // Access the theme object

  return (
    <>
      {items.map((item) => (
        <Button key={item.key} sx={{ color: theme.palette.text.primary }}>
          {item.label}
        </Button>
      ))}
    </>
  );
};
