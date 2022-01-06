import React, { useContext } from "react";
import { Status } from "./Status";
import { AppContext } from "../contexts/AppContextProvider";

export function Form({ title, children }) {
  const value = useContext(AppContext);
  const logout = () => {
    value.setIsAuth(false);
  };

  const onSubmit = () => {
    value.setIsAuth(true);
  };

  if (!value.isAuth) {
    return (
      <form title={title} onSubmit={onSubmit}>
        {children}
        <input type="submit" value="LOGIN" />
      </form>
    );
  } else {
    return (
      <>
        <Status />
        <input onClick={logout} type="submit" value="LOGOUT" />
      </>
    );
  }
}
