import React from "react";
import reactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { ContextProvider } from "./contexts/ContextProvider";

reactDOM.render(
   <ContextProvider>
      <App />
   </ContextProvider>,
   document.getElementById("root")
);
