<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import "./index.css";
import Footer from "./Components/Footer.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <App /> {/* App now includes Header and NewsCarousel */}
      <Footer />
    </NextUIProvider>
=======
import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
const isDarkMode = true;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider dark={isDarkMode.toString()}>
        <App />
      </NextUIProvider>
    </BrowserRouter>
>>>>>>> a1749cd6313cb75429230445ca3a07f342782c9d
  </React.StrictMode>
);