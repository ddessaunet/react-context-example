import React, { useState } from "react";
import AppContext from "./app-context";

type AppStateProps = {
  children: React.ReactNode;
};

const AppState = ({ children }: AppStateProps): JSX.Element => {
  const [isAuth, setIsAuth] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isAuth,
        setIsAuth,
        message: "This comes from the context"
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppState;
