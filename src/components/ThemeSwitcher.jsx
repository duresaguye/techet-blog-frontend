import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

 
  useEffect(() => {
    if (!theme) {
      toggleTheme('dark');
    }
  }, [theme, toggleTheme]);

  const handleToggle = (newTheme) => {
    toggleTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`p-2 rounded-full ${
          theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'
        } text-white flex items-center justify-center`}
      >
        {theme === 'light' ? <FaMoon className="text-gray-800" /> : <FaSun />}
      </button>
      {isOpen && (
        <div className={`absolute right-0 mt-2 w-32 ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-800'} text-${theme === 'light' ? 'black' : 'white'} rounded shadow-lg`}>
          <ul className="list-none p-2">
            <li
              onClick={() => handleToggle('light')}
              className={`p-2 ${theme === 'light' ? 'hover:bg-gray-300' : 'hover:bg-gray-700'} cursor-pointer flex items-center`}
            >
              <FaSun className="mr-2" /> Light
            </li>
            <li
              onClick={() => handleToggle('dark')}
              className={`p-2 ${theme === 'light' ? 'hover:bg-gray-300' : 'hover:bg-gray-700'} cursor-pointer flex items-center`}
            >
              <FaMoon className="mr-2" /> Dark
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
