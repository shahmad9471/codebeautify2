import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import AllToolsPage from './pages/AllToolsPage';
import JsonFormatter from './pages/JsonFormatter';
import JavaScriptFormatter from './pages/JavaScriptFormatter';
import CssFormatter from './pages/CssFormatter';
import SqlFormatter from './pages/SqlFormatter';
import XmlFormatter from './pages/XmlFormatter';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has a preference saved in localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      return JSON.parse(savedDarkMode);
    }
    // Otherwise check if user prefers dark mode via OS settings
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });
  
  // Save dark mode preference to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    // Also update the HTML class for global styling
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'}`}>
        <Toaster position="top-right" toastOptions={{
          duration: 4000,
          style: {
            background: darkMode ? '#374151' : '#ffffff',
            color: darkMode ? '#f3f4f6' : '#111827',
            border: darkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
          },
          success: {
            iconTheme: {
              primary: '#10b981',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ef4444',
              secondary: '#ffffff',
            },
          },
        }} />
        
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <Routes>
          <Route path="/" element={<HomePage darkMode={darkMode} />} />
          <Route path="/all-tools" element={<AllToolsPage darkMode={darkMode} />} />
          <Route path="/json-formatter" element={<JsonFormatter darkMode={darkMode} />} />
          <Route path="/javascript-formatter" element={<JavaScriptFormatter darkMode={darkMode} />} />
          <Route path="/css-formatter" element={<CssFormatter darkMode={darkMode} />} />
          <Route path="/sql-formatter" element={<SqlFormatter darkMode={darkMode} />} />
          <Route path="/xml-formatter" element={<XmlFormatter darkMode={darkMode} />} />
        </Routes>
        
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;