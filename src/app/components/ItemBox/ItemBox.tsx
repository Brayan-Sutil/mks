"use client"
import { Box, Typography, Button } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {
  ItemBoxContainer,
  ItemBoxPaper,
  ItemBoxText,
  MyBoxClass,
  PriceItem,
  DescriptionItem,
  NameItem,
} from "./styled";

interface IProps {
  itemName: string;
  description: string;
  photo: string;
  price: string;
  onclick: () => void;
}

const ItemBox = ({ description, itemName, photo, price, onclick }: IProps) => {
  return (
    <ItemBoxPaper elevation={6}>
      <ItemBoxContainer>
        <img src={photo} alt="Item" style={{ width: "100%", height: 150 }} />
        <ItemBoxText>
          <MyBoxClass>
            <NameItem variant="h6">{itemName}</NameItem>
            <PriceItem variant="contained">R${price}</PriceItem>
          </MyBoxClass>
          <DescriptionItem variant="body1">
            {description}
          </DescriptionItem>
        </ItemBoxText>
        <Button
          variant="contained"
          sx={{ width: "100%", height: 30 }}
          startIcon={<LocalMallOutlinedIcon />}
          onClick={onclick}
        >
          COMPAR
        </Button>
      </ItemBoxContainer>
    </ItemBoxPaper>
  );
};

export default ItemBox;
