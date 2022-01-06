import React from "react";
import { createContext } from "react";
export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = React.useState(false);
  const [token, setToken] = React.useState("abcdef");
  const value = { isAuth, token, setIsAuth };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
