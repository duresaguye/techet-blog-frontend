import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeSwitcher';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-16 bg-transparent border-b border-gray-700 z-10 backdrop-filter backdrop-blur-lg`}>
      <nav className="container mx-auto h-full flex items-center justify-between px-4">
        <div className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Logo</div>
        <div className="ml-4 hidden lg:flex space-x-6">
          <Link to="/" className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Home</Link>
          <Link to="/blog" className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Blog</Link>
          <Link to="/podcast" className="hover:text-gray-300 cursor-pointer transition-colors duration-200">Podcast</Link>
          <Link to="/about" className="hover:text-gray-300 cursor-pointer transition-colors duration-200">About</Link>
        </div>
        <button
          onClick={handleSidebarToggle}
          className="lg:hidden p-2 text-3xl hover:text-gray-600 cursor-pointer transition-colors duration-200"
        >
          <FaBars />
        </button>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={handleSidebarToggle} />
    </div>
  );
};

export default Navbar;
