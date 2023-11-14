import { useMks } from "@/app/Context/MksContext";
import { Box, Stack, Paper, Divider, Button } from "@mui/material";
import { useEffect, useState } from "react";

interface ButtonCoutProps {
  value: number;
}

const ButtonCout = ({ value }: ButtonCoutProps) => {
  const { addPrice, productPrice } = useMks();
  const [cout, setCout] = useState(1);

  const handleCout = () => {
    addPrice(value);
    setCout((prevCout) => prevCout + 1);
  }

  const handleCoutRemove = () => {
    if (cout > 1) {
      addPrice(-value);
      setCout((prevCout) => prevCout - 1);
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "5px",
        border: "1px solid black",
        padding: "2px 0",
      }}
    >
      <Button
        style={{
          padding: "0 5px",
          minWidth: "5px",
          backgroundColor: "transparent",
          color: "black",
        }}
        onClick={() => handleCoutRemove()}
      >
        -
      </Button>
      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={0}
        sx={{ borderLeft: "1px solid black", borderRight: "1px solid black" }}
      >
        <Paper elevation={0} style={{ padding: "0 5px" }}>
          {cout}
        </Paper>
      </Stack>
      <Button
        style={{
          padding: "0 5px",
          minWidth: "5px",
          backgroundColor: "transparent",
          color: "black",
        }}
        onClick={() => handleCout()}
      >
        +
      </Button>
    </Box>
  );
};

export default ButtonCout;
