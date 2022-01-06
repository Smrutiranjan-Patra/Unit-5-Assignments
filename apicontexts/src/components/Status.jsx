import React from "react";
import { AppContext } from "../contexts/AppContextProvider";

export const Status = () => {
  return (
    <div>
      Status: logged in
      <AppContext.Consumer>
        {(value) => {
          return <div>token: {value.token}</div>;
        }}
      </AppContext.Consumer>
    </div>
  );
};
