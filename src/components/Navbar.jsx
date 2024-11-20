import React, { useState } from 'react';
import { FaBars, FaChevronUp, FaChevronDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeSwitcher';
import Sidebar from './Sidebar';

import TechetLogo from '../assets/Techet.png';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={`fixed top-0 z-50 left-0 w-full h-20 border-b border-gray-700 ${document.body.classList.contains('dark') ? 'bg-gray-800' : 'bg-white'}`}>
      <nav className="container mx-auto h-full flex items-center justify-between ">
        <div>
          <img 
            src={TechetLogo} 
            alt="Techኢት Logo" 
            className="w-16 h-16"
          />
        </div>
        <div className="hidden lg:flex space-x-20 text-lg">
          <Link to="/" className="hover:text-gray-600 cursor-pointer transition-colors duration-200">Home</Link>
          
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
              <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg z-50 dark:bg-gray-800 dark:border-gray-600">
                <Link
                  to="/articles/digital-marketing"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/articles/local-news"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  Local News
                </Link>
                <Link
                  to="/articles/international-news"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  International News
                </Link>
              </div>
            )}
          </div>

          <Link to="/events" className="hover:text-gray-600 cursor-pointer transition-colors duration-200">Events & Opportunities</Link>
          <Link to="/podcast" className="hover:text-gray-600 cursor-pointer transition-colors duration-200">Podcast</Link>
          <Link to="/resources" className="hover:text-gray-600 cursor-pointer transition-colors duration-200">Resources</Link>
          <Link to="/about" className="hover:text-gray-600 cursor-pointer transition-colors duration-200">About</Link>
        </div>
        <button
          onClick={handleSidebarToggle}
          className="lg:hidden p-2 text-3xl hover:text-gray-600 cursor-pointer transition-colors duration-200"
        >
          <FaBars />
        </button>
        <div className="mr-10">
          <ThemeToggle />
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Navbar;
