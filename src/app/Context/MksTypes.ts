import { IProduct } from "@/types/products";

export interface MksContextProps {
  products: IProduct[];
  isDrawerOpen: boolean;
  toggleDrawer: (open: boolean) => void;
  addProduct: (productSelect: IProduct) => void;
  removeProduct: (index: number) => void;
}
