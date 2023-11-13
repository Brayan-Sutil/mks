"use client"
import { Box, Typography, Button } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {
  ItemBoxContainer,
  ItemBoxPaper,
  ItemBoxText,
  MyBoxClass,
  PriceItem,
} from "./styled";

const ItemBox = () => {
  return (
    <ItemBoxPaper>
      <ItemBoxContainer>
        <img
          src="https://via.placeholder.com/150x120.png"
          alt="Item"
          style={{ width: "100%", height: 100 }}
        />
        <ItemBoxText>
          <MyBoxClass>
            <Typography variant="h6">Apple Macbook Pro</Typography>
            <PriceItem />
          </MyBoxClass>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Redesigned from scratch and completely revised.
          </Typography>
        </ItemBoxText>
        <Button
          variant="contained"
          sx={{ width: "100%", height: 30 }}
          startIcon={<LocalMallOutlinedIcon />}
        >
          COMPAR
        </Button>
      </ItemBoxContainer>
    </ItemBoxPaper>
  );
};

export default ItemBox;
