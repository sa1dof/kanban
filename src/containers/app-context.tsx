import { createContext, FC, ReactNode, useContext } from "react";

import { Types } from "modules/home";

export const Context = createContext({} as Types.IContext.Context);

Context.displayName = "ThemeContext";

export interface ThemeProviderProps {
  value: Types.IContext.Context;
  children: ReactNode;
}

export const Provider: FC<ThemeProviderProps> = ({ value, children }) => (
  <Context.Provider value={value}>{children}</Context.Provider>
);

export const useTheme = () => useContext(Context);
