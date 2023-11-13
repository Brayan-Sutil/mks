import { Button, Typography } from "@mui/material";
import { PaperStyled, NameItem, ValueItem } from "./styled";
import ButtonCout from "./ButtonCout/ButtonCout";

const ItemCart = () => {
        return (
            <PaperStyled elevation={4}>
                <img src="https://picsum.photos/200/300" alt="random" height={60} width={60} />
                <NameItem>Apple Watch Series 4 GPS</NameItem>
                <ButtonCout />
                <ValueItem>
                    R$ 2.899,00
                </ValueItem>
            </PaperStyled>
        );
}

export default ItemCart