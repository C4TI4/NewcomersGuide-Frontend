import { useState, createContext, useContext, useEffect } from 'react';

const ThemeContextObj = createContext();

const useThemeContext = () => useContext(ThemeContextObj);

export const ThemeContext = ({ children }) => {

  //  initial theme preference from localStorage or system preference

  const initialTheme = localStorage.theme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const [isDarkMode, setIsDarkMode] = useState(initialTheme === 'dark');

  useEffect(() => {

    document.documentElement.classList.toggle('dark', isDarkMode);

    localStorage.theme = isDarkMode ? 'dark' : 'light';
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContextObj.Provider value={{ isDarkMode, toggleDarkMode }}>
      <main className={isDarkMode ? 'dark text-foreground bg-background' : 'light'}>
        {children}
      </main>
    </ThemeContextObj.Provider>
  );
};

export default useThemeContext;