import Header from "../Components/Header";
import HomeButtons from "../Components/HomeButtons";
import Faqs from "../Components/Faqs";
import LookingSomething from "../Components/LookingSomething";

export default function Home() {
  return (
    <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`app-container ${isDarkMode ? "dark" : ""}`}>
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <Header />
        <HomeButtons />
        <Faqs />
        <LookingSomething />
        <Footer />
      </div>
    </NextUIProvider>
  );
}
