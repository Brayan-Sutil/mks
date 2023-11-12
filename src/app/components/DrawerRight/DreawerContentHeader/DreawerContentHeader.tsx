import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { CartButton, TypographyStyled, BoxStyled } from "./styled";

const DreawerContentHeader = () => {
    return (
      <BoxStyled>
        <TypographyStyled variant="h5" component="div">
          Carrinho de compras
        </TypographyStyled>
        <CartButton color="primary">
          <CloseRoundedIcon />
        </CartButton>
      </BoxStyled>
    );
}

export default DreawerContentHeader