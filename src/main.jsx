import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const isDarkMode = true;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider dark={isDarkMode.toString()}>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
