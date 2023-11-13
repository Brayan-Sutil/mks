"use client";
import { ReactNode, useState } from "react";
import MksContext from "./MksContext";
import { IProduct } from "@/types/products";

interface MksProviderProps {
  children: ReactNode;
}

export const MksProvider = ({children}: MksProviderProps) => {
  const savedProduct = localStorage.getItem("ListItem");
  const todosLength = savedProduct ? JSON.parse(savedProduct) : [];
  const [product, setProduct] = useState<IProduct[]>(todosLength);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  localStorage.setItem("ListItem", JSON.stringify(product));

   const addProduct = (productSelect: IProduct) => {
     setProduct([...product, productSelect]);
   };

   const removeProduct = (index: number) => {
     const newProduct = [...product];
     newProduct.splice(index, 1);
     setProduct(newProduct);
   };

  const toggleDrawer = (open: boolean) => {
    setIsDrawerOpen(open);
  };

     return (
       <MksContext.Provider
         value={{
           products: product,
           isDrawerOpen,
           toggleDrawer,
           addProduct,
           removeProduct,
         }}
       >
         {children}
       </MksContext.Provider>
     );
};