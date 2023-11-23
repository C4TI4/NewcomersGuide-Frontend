import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import Home from './Pages/Home';
import  ArticleList  from './Components/ArticleList.jsx';
import  SingleArticle  from './Components/SingleArticle.jsx';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // const toggleDarkMode = () => {
  //   setIsDarkMode((prev) => !prev);
  // };

    return (
      <NextUIProvider dark={isDarkMode.toString()}>
      <div className={`App ${isDarkMode ? 'dark-mode' : ''}`}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/" element={<ArticleList />} />
        <Route path="/article/:id" element={<SingleArticle />} />
        </Routes>
      </div>
    </NextUIProvider>
  );
}