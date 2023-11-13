"use client";
import { Wrapper } from "./styled";
import ItemBox from "../ItemBox/ItemBox";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api";
import { IProduct } from "@/types/products";
import { useMks } from "@/app/Context/MksContext";

const ItemList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(1),
    staleTime: 10 * 1000,
  });
  const {addProduct} = useMks()

  return (
    <Wrapper>
      {data?.products.map((product: IProduct) => (
        <ItemBox
          key={product.id}
          description={product.description}
          itemName={product.name}
          photo={product.photo}
          price={product.price}
          onclick={() => addProduct(product)}
        />
      ))}
    </Wrapper>
  );
};

export default ItemList;
