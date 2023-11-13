import * as React from "react";
import { Box, Stack, Paper, Divider, Button } from "@mui/material";

const ButtonCout = () => {
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
          2
        </Paper>
      </Stack>
      <Button
        style={{
          padding: "0 5px",
          minWidth: "5px",
          backgroundColor: "transparent",
          color: "black",
        }}
      >
        +
      </Button>
    </Box>
  );
};

export default ButtonCout;
