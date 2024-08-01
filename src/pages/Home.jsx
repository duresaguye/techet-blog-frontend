// src/pages/Home.js
import React from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import Tags from '../components/Tags';
import BlogPosts from '../components/BlogPosts';

const Home = () => {
  return (
    <div className="mt-12">
      <WelcomeMessage />
      <Tags />
     <BlogPosts />
    </div>
  );
};

export default Home;
