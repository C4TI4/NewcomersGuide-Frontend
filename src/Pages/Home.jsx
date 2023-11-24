import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import LookingSomething from "../Components/LookingSomething";
import Footer from "../Components/Footer";
import CultureFaqs from "../Components/CultureFaqs"; // Import CultureFaqs

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Header />
        <CultureFaqs /> {/* Add CultureFaqs component */}
        <LookingSomething />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
