<<<<<<< HEAD
import React, { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import NavBar from "../Components/NavBar";
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import LookingSomething from "../Components/LookingSomething";
import Footer from "../Components/Footer";
// import CultureFaqs from "../Components/CultureFaqs"; // Commented out if not needed

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

=======
import ArticleList from '../Components/ArticleList';
export default function Home() {  
>>>>>>> d427447bf6982480573ceb402740997cbda52875
  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Header />
        <HomeButtons />
        {/* <CultureFaqs /> */} {/* Commented out or removed */}
        <LookingSomething />
        <Footer />
      </div>
<<<<<<< HEAD
    </NextUIProvider>
=======
      <ArticleList />
      <p className="read-the-docs">Let`s get building ladies :D</p>
      <div className="dark-mode-toggle"></div>
    </>
>>>>>>> d427447bf6982480573ceb402740997cbda52875
  );
}
