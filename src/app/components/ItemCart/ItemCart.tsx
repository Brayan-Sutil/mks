import { PaperStyled, NameItem, ValueItem, FabIcon } from "./styled";
import ButtonCout from "./ButtonCout/ButtonCout";
import CloseIcon from "@mui/icons-material/Close";

interface IProps {
  onclick: () => void;
  nameItemCart: string;
  priceItemCart: string;
  photoItemCart: string;
}

const ItemCart = ({
  onclick,
  nameItemCart,
  priceItemCart,
  photoItemCart,
}: IProps) => {
  return (
    <PaperStyled elevation={6}>
      <img src={photoItemCart} alt="random" height={60} width={60} />
      <NameItem>{nameItemCart}</NameItem>
      <ButtonCout value={parseInt(priceItemCart)} />
      <ValueItem>R${priceItemCart}</ValueItem>
      <FabIcon color="primary" onClick={onclick}>
        <CloseIcon fontSize="small" />
      </FabIcon>
    </PaperStyled>
  );
};

export default ItemCart;
