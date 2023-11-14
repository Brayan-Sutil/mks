"use client";
import { ReactNode, useEffect, useState } from "react";
import MksContext from "./MksContext";
import { IProduct } from "@/types/products";
interface MksProviderProps {
  children: ReactNode;
}
export const MksProvider = ({children}: MksProviderProps) => {
  const [product, setProduct] = useState<IProduct[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [productPrice, setProductPrice] = useState(0);
  const [open, setOpen] = useState(false);

  const clearLocalStorageAndScroll = () =>  {
    setProduct([]);
    localStorage.removeItem("ListItem");
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedProduct = localStorage.getItem("ListItem");
      const todosLength = savedProduct ? JSON.parse(savedProduct) : [];
      setProduct(todosLength);
      localStorage.setItem("ListItem", JSON.stringify(todosLength));
    }
  }, []);

  useEffect(() => {
    const totalPrice: number = product.reduce((total: number, item: any) => {
      return total + parseInt(item.price)
    }, 0);
    setProductPrice(totalPrice);
    if (typeof window !== "undefined") {
      localStorage.setItem("ListItem", JSON.stringify(product));
    }
  }, [product]);

  const onOpenModal = (value: boolean) => {
    console.log(value);
    setOpen(value);
  }

  const addPrice = (price: number) => {
    setProductPrice(productPrice + price);
  }

  const addProduct = (productSelect: IProduct) => {
    const productIndex = product.findIndex((item) => item.id === productSelect.id);
    if (productIndex === -1) {
      setProduct([...product, productSelect]);
    } else {
      const newProduct = [...product];
      newProduct[productIndex] = productSelect;
      setProduct(newProduct);
    }
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
        open,
        products: product,
        productPrice,
        isDrawerOpen,
        toggleDrawer,
        addProduct,
        removeProduct,
        addPrice,
        onOpenModal,
        clearLocalStorageAndScroll,
      }}
    >
      {children}
    </MksContext.Provider>
  );
};