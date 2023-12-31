import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import { CartButton, TypographyStyled, BoxStyled } from "./styled";
import { useMks } from "@/app/Context/MksContext";

const DreawerContentHeader = () => {
  const { toggleDrawer } = useMks();
    return (
      <BoxStyled>
        <TypographyStyled variant="h5" component="div">
          Carrinho de compras
        </TypographyStyled>
        <CartButton color="primary" onClick={() => toggleDrawer(false)}>
          <CloseRoundedIcon />
        </CartButton>
      </BoxStyled>
    );
}

export default DreawerContentHeader