import React, { Box } from "@mui/material";
import DrawerContenrHeader from "../DreawerContentHeader/DreawerContentHeader";
import ItemCart from "../../ItemCart/ItemCart";

const DreawerContent = () => {
    return (
      <Box
        sx={{ width: 480, height: "100%", bgcolor: "#0F52BA", padding: "35px 45px" }}
      >
        <DrawerContenrHeader />
        <ItemCart />
      </Box>
    );
}

export default DreawerContent;