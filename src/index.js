import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { CountryProvider } from "./context";

ReactDOM.render(
  <CountryProvider>
    <App />
  </CountryProvider>,
  document.getElementById("root")
);
