import React, { useState } from 'react';
import { FaTimes, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { HiHome, HiDocumentText, HiMicrophone, HiInformationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, onClose }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const isDarkMode = document.body.classList.contains('dark');

  return (
    <div
      className={`fixed top-0 z-50 left-0 w-64 h-full ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <button
        onClick={onClose}
        className={`absolute top-4 right-4 text-3xl ${
          isDarkMode ? 'text-gray-400 hover:text-gray-600' : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <FaTimes />
      </button>
      <div className="flex flex-col items-start mt-24 px-6 space-y-6">
        <Link
          to="/"
          className="flex items-center text-lg font-semibold hover:text-gray-500"
        >
          <HiHome className="mr-3 text-2xl" /> Home
        </Link>

        {/* Articles & News Dropdown */}
        <div className="flex flex-col w-full">
          <button
            onClick={toggleDropdown}
            className="flex items-center text-lg font-semibold hover:text-gray-500"
          >
            <HiDocumentText className="mr-3 text-2xl" /> Articles & News
            {isDropdownOpen ? (
              <FaChevronUp className="ml-2 text-lg" />
            ) : (
              <FaChevronDown className="ml-2 text-lg" />
            )}
          </button>
          {isDropdownOpen && (
            <div className="ml-6 mt-2 flex flex-col space-y-2">
              <Link
                to="/articles/digital-marketing"
                className="text-sm hover:text-gray-500"
              >
                Digital Marketing
              </Link>
              <Link
                to="/articles/local-news"
                className="text-sm hover:text-gray-500"
              >
                Local News
              </Link>
              <Link
                to="/articles/international-news"
                className="text-sm hover:text-gray-500"
              >
                International News
              </Link>
            </div>
          )}
        </div>

        <Link
          to="/podcast"
          className="flex items-center text-lg font-semibold hover:text-gray-500"
        >
          <HiMicrophone className="mr-3 text-2xl" /> Podcast
        </Link>

        <Link
          to="/about"
          className="flex items-center text-lg font-semibold hover:text-gray-500"
        >
          <HiInformationCircle className="mr-3 text-2xl" /> About
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
