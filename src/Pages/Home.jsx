import  { useState } from "react";
import { NextUIProvider } from "@nextui-org/react";
import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import LookingSomething from "../Components/LookingSomething";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar"; // Assumed import

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
        <LookingSomething />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
