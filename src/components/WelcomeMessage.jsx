// src/components/WelcomeMessage.js
import React from 'react';
import TechetLogo from '../assets/Techet.png';

const WelcomeMessage = () => {
  return (
    <div className="relative overflow-hidden py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative z-10">
          <main className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hi 👋, Welcome to Techኢት </span>
               
              </h1>
              <p className="mt-3 text-base sm:mt-5 sm:text-lg md:mt-5 md:text-xl">
                Dive into the world of technology with us! From insightful blogs to engaging podcasts, Techኢት is your ultimate destination for staying ahead in the tech universe.
              </p>
              <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row sm:space-x-4">
                <a href="/blog" className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Read Our Blog
                </a>
                <a href="/podcast" className="mt-3 sm:mt-0 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100">
                  Listen to Podcasts
                </a>
              </div>
            </div>
          </main>
        </div>
        <div className="mt-12">
          <div className="flex ">
 <div className="border-r-2 border-gray-700 h-12 mr-4"></div>
          <h3 className="text-xl tracking-tight  sm:text-4xl md:text-5xl text-center">
            Latest Posts
          </h3>
          </div>
          
          <hr className="mt-4 border-t-2 border-gray-300" />
        </div>
      </div>
    </div>
  );
};

export default WelcomeMessage;
