import React, { Box } from "@mui/material";
import DrawerContenrHeader from "../DreawerContentHeader/DreawerContentHeader";
import ListItemCart from "../../ListItemCart/ListItemCart";
import { FooterBotton } from "../FooterDreawer/styled";
import FooterDreawer from "../FooterDreawer/FooterDreawer";
import PriceDreawer from "../PriceDreawer/PriceDreawer";

const DreawerContent = () => {
    return (
      <Box
        sx={{ width: 430, height: "100%", bgcolor: "#0F52BA", padding: "35px 45px" }}
      >
        <DrawerContenrHeader />
        <ListItemCart/>
        <PriceDreawer />
        <FooterDreawer />
      </Box>
    );
}

export default DreawerContent;