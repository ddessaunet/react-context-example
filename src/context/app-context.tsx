import React, { createContext } from "react";

const appContext = createContext<{
  message: string;
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
}>({ message: "", isAuth: false, setIsAuth: () => {} });

export default appContext;
