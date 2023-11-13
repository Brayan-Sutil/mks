"use client";
import { Box, Typography, Button, Skeleton } from "@mui/material";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import { Wrapper } from "./styled";
import ItemBox from "../ItemBox/ItemBox";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/api";
import { useMemo } from "react";
import { IProduct } from "@/types/products";

const ItemList = () => {
  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(1),
    staleTime: 10 * 1000,
  });

  return (
    <Wrapper>
      {data?.products.map((product: IProduct) => (
        <ItemBox key={product.id} />
      ))}
    </Wrapper>
  );
};

export default ItemList;
