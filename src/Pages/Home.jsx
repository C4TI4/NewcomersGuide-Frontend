import React from "react";
import useThemeContext from "../context/ThemeContext";
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import FaqsSearchbar from "../Components/FaqsSearchbar";
import Faqs from "../Components/Faqs";
import ContactForm from "../Components/ContactForm";
import LookingSomething from "../Components/LookingSomething";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  const { isDarkMode } = useThemeContext();

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <Header />
        <HomeButtons />
        <FaqsSearchbar />
        <div className="container mx-auto p-6">
          <div className="flex flex-wrap -mx-3">
            <div className="w-full lg:w-2/3 px-3 mb-6 md:mb-0">
              <Faqs />
            </div>
            <div className="w-full lg:w-1/3 px-3">
              <ContactForm />
            </div>
          </div>
        </div>
        <LookingSomething />
      </div>
    </NextUIProvider>
  );
}
