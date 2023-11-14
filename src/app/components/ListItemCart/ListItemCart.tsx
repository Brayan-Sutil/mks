import { useMks } from "@/app/Context/MksContext";
import ItemCart from "../ItemCart/ItemCart"
import { Whapper } from "./styled";

const ListItemCart = () => {
  const {products, removeProduct} = useMks()
    return (
      <Whapper >
        {products.map((product, index) => (
          <ItemCart 
            photoItemCart={product.photo}
            nameItemCart={product.name}
            priceItemCart={product.price}
            key={index} 
            onclick={() => removeProduct(index)} 
          />
        )
        )}
      </Whapper>
    );
}

export default ListItemCart