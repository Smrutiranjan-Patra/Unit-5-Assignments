import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { AppContextProvider } from "./contexts/AppContextProvider";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </StrictMode>,
  rootElement
);
