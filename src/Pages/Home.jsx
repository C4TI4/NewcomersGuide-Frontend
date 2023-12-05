import React from "react";
import useThemeContext from "../context/ThemeContext";
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import ArticleSlider from "../Components/ArticleSlider";
import JourneyGermany from "../Components/JourneyGermany";
import Faqs from "../Components/Faqs";
import ContactForm from "../Components/ContactForm";
import LookingSomething from "../Components/LookingSomething";
import HeroSection from "../Components/HeroSection";
import { NextUIProvider } from "@nextui-org/react";

export default function Home() {
  const { isDarkMode } = useThemeContext();

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <HeroSection />
        <HomeButtons />
        <ArticleSlider />
        <JourneyGermany />
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
