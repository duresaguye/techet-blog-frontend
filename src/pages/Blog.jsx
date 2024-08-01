// src/components/Blog.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPosts from '../components/BlogPosts';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch blog posts from the Django API
    axios.get('http://localhost:8000/api/posts/')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to load blog posts');
        setLoading(false);
        console.error('There was an error fetching the blog posts!', error);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 mt-20">
      <div className="flex  mb-4">
        <div className="border-r-2 border-gray-700 h-12 mr-4"></div>
        <h1 className="text-2xl font-bold">Blog</h1>
      </div>
      <hr className="mt-4 border-t-2 border-gray-300" />
      <BlogPosts posts={posts} />
    </div>
  );
};

export default Blog;
