import { IProduct } from "@/types/products";

export interface MksContextProps {
  products: IProduct[];
  productPrice: number;
  open: boolean;
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  addProduct: (productSelect: IProduct) => void;
  removeProduct: (index: number) => void;
  addPrice: (price: number) => void;
  onOpenModal: (value: boolean) => void;
  clearLocalStorageAndScroll: () => void;
}
