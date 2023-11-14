import { useMks } from "@/app/Context/MksContext";
import PriceDreawer from "../PriceDreawer/PriceDreawer";
import { FooterBotton } from "./styled";

const FooterDreawer = () => {
  const {onOpenModal} = useMks();
    return (
      <>
        <FooterBotton variant="contained" onClick={() => onOpenModal(true)}>
          Finalizar compra
        </FooterBotton>
      </>
    );
}

export default FooterDreawer;