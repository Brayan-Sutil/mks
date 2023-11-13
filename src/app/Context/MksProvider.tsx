"use client";
import { ReactNode, useState } from "react";
import MksContext from "./MksContext";

interface MksProviderProps {
  children: ReactNode;
}

export const MksProvider = ({children}: MksProviderProps) => {
 const [isDrawerOpen, setIsDrawerOpen] = useState(false);

 const toggleDrawer = (open: boolean) => {
   setIsDrawerOpen(open);
 };

     return (
       <MksContext.Provider
         value={{
           isDrawerOpen,
           toggleDrawer,
         }}
       >
         {children}
       </MksContext.Provider>
     );
};