import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import ArticleList from "../Components/ArticleList";
import LookingSomething from "../Components/LookingSomething";
import CultureFaqs from "../Components/CultureFaqs"; // Commented out if not needed

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <Header />
        <HomeButtons />
        <ArticleList />
        <CultureFaqs />
        <LookingSomething />
      </div>
    </NextUIProvider>
  );
}
