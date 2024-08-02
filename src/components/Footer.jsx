import React from 'react';
import { FaGithub, FaTelegramPlane, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
      <footer className=" py-6">
          <hr className="mt-4 mb-4 border-t-2 border-gray-300" />
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 ">
          <a
            href="https://t.me/TechInEthio"
            className="inline-flex items-center justify-center w-12 h-12 bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold mr-4"
          >
            <FaTelegramPlane className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com/@Techinethio"
            className="inline-flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-700 rounded-full text-white font-bold"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
        <div className="text-center md:text-right ">
          <a href="https://github.com/duresaguye"> <p className="text-sm">Developed by Dura</p></a>
          <FaGithub className="text-3xl" />
         
        </div>
      </div>
    </footer>
  );
};

export default Footer;
