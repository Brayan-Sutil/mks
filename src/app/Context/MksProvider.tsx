import { ReactNode } from "react";
import MksContext from "./MksContext";

interface MksProviderProps {
  children: ReactNode;
}

export const MksProvider = ({children}: MksProviderProps) => {
     return (
       <MksContext.Provider
         value={{}}
       >
         {children}
       </MksContext.Provider>
     );
};