import React from "react";
import useThemeContext from "../context/ThemeContext"; // Adjust the path as necessary
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import Faqs from "../Components/Faqs";
import LookingSomething from "../Components/LookingSomething";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  const { isDarkMode } = useThemeContext();

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <Header />
        <HomeButtons />
        <Faqs />
        <LookingSomething />
      </div>
    </NextUIProvider>
  );
}
