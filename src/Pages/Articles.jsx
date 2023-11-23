// import { useState } from 'react';
// import { NextUIProvider } from '@nextui-org/react';
// import NavBar from '../Components/NavBar';
// import Footer from '../Components/Footer';
// export default function Articles() {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setIsDarkMode((prev) => !prev);
//   };

//   return (
//     <NextUIProvider dark={isDarkMode.toString()}>
//     <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
//     <div>
//     <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
//     </div>
//       <Footer />
//     </div>
//     </NextUIProvider>
//   );
// }