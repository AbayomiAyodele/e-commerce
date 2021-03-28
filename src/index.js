import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter as Router } from "react-router-dom";

import { StoreContextProvider } from "context/storeContext";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
