"use client";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Logo from "./Logo/Logo";
import { CustomToolbar } from "./styled";
import { useMks } from "@/app/Context/MksContext";

const AppBarComponent = () => {
  const { toggleDrawer } = useMks()
  
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
            5
          </Button>
        </CustomToolbar>
      </AppBar>
    </Box>
  );
};

export default AppBarComponent;
