import { useState } from 'react';
import { NextUIProvider } from '@nextui-org/react';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
export default function Home() {
  const [count, setCount] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <NextUIProvider dark={isDarkMode.toString()}>
    <div className={`app-container ${isDarkMode ? 'dark' : ''}`}>
    <div>
        {/* pass isDarkMode and toggleDarkMode as props to NavBar */}
        <NavBar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
    </div>
    <div>
        <header>
          <h1>Header</h1>
        </header>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            Count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> 3</p>
        </div>
        <p className="read-the-docs">Let`s get building ladiessss :D</p>
        <div className="dark-mode-toggle">
        
        </div>
      </div>
      <Footer />
</div>
    </NextUIProvider>
  );
}