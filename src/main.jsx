import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import App from "./App.jsx";
import Footer from './Components/Footer.jsx'
//  import AppContext from "./context/AppContext.jsx";
import "./index.css";
import "./App.css";

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <React.StrictMode>
            <NextUIProvider>
            {/* <main className="dark text-foreground bg-background"> */}
               {/*     <AppContext> */}
                        <App />
                        <Footer/>
                   {/* </AppContext> */}
                {/* </main> */}
            </NextUIProvider>
        </React.StrictMode>
    </BrowserRouter>
); 