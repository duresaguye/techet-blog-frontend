import React, { useState, useContext } from 'react';
import { FaBars, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeSwitcher';
import Sidebar from './Sidebar';
import TechetLogo from '../assets/Techet.png';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-full h-20 border-b ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <nav className="container mx-auto h-full flex items-center justify-between">
        <div>
          <img
            src={TechetLogo}
            alt="Techኢት Logo"
            className="w-16 h-16"
          />
        </div>
        <div className="hidden lg:flex space-x-20 text-lg">
          <Link
            to="/"
            className="hover:text-gray-600 cursor-pointer transition-colors duration-200"
          >
            Home
          </Link>

          {/* Articles & News with Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:text-gray-600 cursor-pointer transition-colors duration-200 focus:outline-none flex items-center"
            >
              Articles & News
              <span className="ml-2">
                {isDropdownOpen ? (
                  <FaChevronUp className="ml-2 text-lg" />
                ) : (
                  <FaChevronDown className="ml-2 text-lg" />
                )}
              </span>
            </button>
            {isDropdownOpen && (
              <div
                className={`absolute left-0 mt-2 w-48 ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-600 text-gray-200'
                    : 'bg-white border-gray-300 text-gray-700'
                } border rounded-md shadow-lg z-50`}
              >
                <Link
                  to="/articles/digital-marketing"
                  className={`block px-4 py-2 text-sm ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/articles/local-news"
                  className={`block px-4 py-2 text-sm ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  Local News
                </Link>
                <Link
                  to="/articles/international-news"
                  className={`block px-4 py-2 text-sm ${
                    theme === 'dark' ? 'hover:bg-gray-700' : 'hover:bg-gray-200'
                  }`}
                >
                  International News
                </Link>
              </div>
            )}
          </div>

          <Link
            to="/events"
            className="hover:text-gray-600 cursor-pointer transition-colors duration-200"
          >
            Events & Opportunities
          </Link>
          <Link
            to="/podcast"
            className="hover:text-gray-600 cursor-pointer transition-colors duration-200"
          >
            Podcast
          </Link>
          <Link
            to="/resources"
            className="hover:text-gray-600 cursor-pointer transition-colors duration-200"
          >
            Resources
          </Link>
          <Link
            to="/about"
            className="hover:text-gray-600 cursor-pointer transition-colors duration-200"
          >
            About
          </Link>
        </div>
        <button
          onClick={handleSidebarToggle}
          className="lg:hidden p-2 text-3xl hover:text-gray-600 cursor-pointer transition-colors duration-200"
        >
          <FaBars />
        </button>
        <div className="mr-10">
          <ThemeToggle
            onThemeChange={() =>
              toggleTheme(theme === 'dark' ? 'light' : 'dark')
            }
          />
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Navbar;
