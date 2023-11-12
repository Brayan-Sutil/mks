import { Box } from "@mui/material";
import Typography from "@mui/material/Typography"

const Logo = () => {
  return (
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }} fontWeight={"600"}>
        MKS <span style={{
            fontWeight: "300",
            fontSize: "20px",
            lineHeight: "19px",
            marginLeft: "-10px"
        }}>Sistemas</span>
      </Typography>
  );
};

export default Logo;
