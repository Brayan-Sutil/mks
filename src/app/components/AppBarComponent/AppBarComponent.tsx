"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Logo from "./Logo/Logo";
import { CustomToolbar } from "./styled";
import { useMks } from "@/app/Context/MksContext";

const AppBarComponent = () => {
  const { toggleDrawer, products } = useMks()
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" component="div" sx={{ bgcolor: "#0F52BA" }}>
        <CustomToolbar>
          <Logo />
          <Button
            variant="contained"
            startIcon={<LocalGroceryStoreIcon />}
            color="primary"
            sx={{ color: "black", bgcolor: "white" }}
            onClick={() => toggleDrawer(true)}
          >
            {products.length}
          </Button>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
