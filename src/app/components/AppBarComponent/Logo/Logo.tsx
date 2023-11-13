"use client"
import Typography from "@mui/material/Typography"
import { LogoText } from "./styled";

const Logo = () => {
  return (
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} fontWeight={"600"}>
        MKS <LogoText>Sistemas</LogoText>
      </Typography>
  );
};

export default Logo;
