import React, { Box } from "@mui/material";
import DrawerContenrHeader from "../DreawerContentHeader/DreawerContentHeader";
import ListItemCart from "../../ListItemCart/ListItemCart";

const DreawerContent = () => {
    return (
      <Box
        sx={{ width: 430, height: "100%", bgcolor: "#0F52BA", padding: "35px 45px" }}
      >
        <DrawerContenrHeader />
        <ListItemCart/>
      </Box>
    );
}

export default DreawerContent;