import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MovieProvider } from "./createContext/MovieContext";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <MovieProvider>
      {" "}
      {/* Wrap your app with MovieProvider */}
      <App />
    </MovieProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
