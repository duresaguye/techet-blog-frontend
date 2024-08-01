import React from 'react';
import BlogPosts from '../components/BlogPosts';

const Blog = () => {
  return (
    <div className="p-4 mt-20">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      <BlogPosts />
    </div>
  );
};

export default Blog;
