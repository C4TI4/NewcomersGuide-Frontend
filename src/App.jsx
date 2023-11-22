import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "./Components/NavBar";
import Header from "./Components/Header"; // Import Header
import NewsCarousel from "./Components/NewsFeauture";
import HomeButtons from "./Components/HomeButtons";
import CultureFaqs from "./Components/CultureFaqs";
import "./App.css";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Header /> {/* Include Header here */}
      <NewsCarousel />
      <HomeButtons />
      <CultureFaqs />
      {/* NewsCarousel component right below the Header */}
      {/* Other components or content */}
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        {/* Additional parts of your application */}
        {/* Dark mode toggle */}
        <div className="dark-mode-toggle">
          <label>
            Dark Mode
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
            />
          </label>
        </div>
      </div>
    </NextUIProvider>
  );
}
