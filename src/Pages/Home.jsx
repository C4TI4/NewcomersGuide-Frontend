import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import ArticleList from "../Components/ArticleList";
import LookingSomething from "../Components/LookingSomething";
import Footer from "../Components/Footer";
// import CultureFaqs from "../Components/CultureFaqs"; // Commented out if not needed

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
        <HomeButtons />
        <ArticleList />
        {/* <CultureFaqs /> */} {/* Commented out*/}
        <LookingSomething />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
