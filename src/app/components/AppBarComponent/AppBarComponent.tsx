import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Logo from "./Logo/Logo";

const AppBarComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" component="div" sx={{ bgcolor: '#0F52BA' }}>
        <Toolbar sx={{ height: 100 }} style={{ padding: "0 85px"}}>
          <Logo/>
          <Button variant="contained" startIcon={<LocalGroceryStoreIcon />} color="primary" sx={{ color: 'black', bgcolor: 'white' }}>
            0
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarComponent;