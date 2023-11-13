import { createContext, useContext } from "react";
import { MksContextProps } from "../Context/MksTypes";

const MksContext = createContext<MksContextProps | undefined>(undefined);

export function useMks() {
  const context = useContext(MksContext);
  if (!context) {
    throw new Error("useTodos deve ser usado dentro de um TodoProvider");
  }
  return context;
}

export default MksContext;
