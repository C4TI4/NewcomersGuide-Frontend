import React from 'react';
import ReactDOM from 'react-dom/client';
import { NextUIProvider } from '@nextui-org/react';
import App from './App.jsx';
import './index.css';
import Footer from './Components/Footer.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
    <Router>
        <Routes>
          <Route path="/" element={<App />} />
          {/* add extra routes here */}
        </Routes>
      </Router>
    </NextUIProvider>
  </React.StrictMode>
);
