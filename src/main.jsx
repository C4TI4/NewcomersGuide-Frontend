import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContext } from "./context/AuthContext.jsx";
import { ThemeContext } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <ThemeContext>
          <AuthContext>
          <App />
          </AuthContext>
        </ThemeContext>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
