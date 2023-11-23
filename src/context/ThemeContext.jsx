import {useState, createContext, useContext} from 'react';

const ThemeContextObj = createContext()

const useThemeContext = () => useContext(ThemeContextObj)

export const ThemeContext = ({children}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContextObj.Provider value={{isDarkMode, toggleDarkMode}}>
      <main className={isDarkMode ? 'dark text-foreground bg-background' : 'light'}>{children}</main>
    </ThemeContextObj.Provider>
  )
}

export default useThemeContext;