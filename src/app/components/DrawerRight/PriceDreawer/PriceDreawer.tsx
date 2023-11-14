import { useMks } from "@/app/Context/MksContext";
import { StyledBox, StyledTypography } from "./styled";

const PriceDreawer = () => {
  const {productPrice} = useMks()
    return (
      <StyledBox>
        <StyledTypography>Total:</StyledTypography>
        <StyledTypography>R$ {productPrice}</StyledTypography>
      </StyledBox>
    );
}

export default PriceDreawer