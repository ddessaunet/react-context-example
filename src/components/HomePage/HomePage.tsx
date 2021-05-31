import React, { useContext } from "react";
import appContext from "../../context/app-context";

export const HomePage = (): JSX.Element => {
  const { message, isAuth, setIsAuth } = useContext(appContext);
  return (
    <div>
      <h1>This is the home page</h1>
      <div style={{ background: isAuth ? "green" : "red" }}>
        <h2>{message}</h2>
        <button onClick={() => setIsAuth(true)}>Login</button>
      </div>
    </div>
  );
};
