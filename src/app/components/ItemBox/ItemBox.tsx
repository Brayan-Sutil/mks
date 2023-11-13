"use client"
import { Box, Typography, Button } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import {
  ItemBoxContainer,
  ItemBoxPaper,
  ItemBoxText,
  MyBoxClass,
  PriceItem,
  TypographyName,
  TypographyDescripiton,
} from "./styled";

interface IProps {
  descripiton?: string;
  nameProduct?: string;
  photo?: string;
  itemPrice?: string;
}

const ItemBox = ({ descripiton, nameProduct, photo, itemPrice }: IProps) => {
  return (
    <ItemBoxPaper elevation={6}>
      <ItemBoxContainer>
        <img src={photo} alt="Item" style={{ width: "100%", height: 150 }} />
        <ItemBoxText>
          <MyBoxClass>
            <TypographyName variant="h6">{nameProduct}</TypographyName>
            <PriceItem variant="contained">R${itemPrice}</PriceItem>
          </MyBoxClass>
          <TypographyDescripiton variant="body1" sx={{ mt: 1 }}>
            {descripiton}
          </TypographyDescripiton>
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
