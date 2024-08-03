// src/components/Blog.js
import React, { useEffect, useState } from 'react';
import BlogPosts from '../components/BlogPosts';
import axios from 'axios';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Uncomment this block to fetch real data from the API
    /*
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
    */

    // Fake blog posts data
    const fakePosts = [
      {
        id: 1,
        title: 'Understanding React Hooks',
        content: 'React Hooks are functions that let you use state and other React features without writing a class. In this post, we will explore the basics of useState and useEffect hooks.',
        author: 'John Doe',
        date: '2024-08-01',
      },
      {
        id: 2,
        title: 'Introduction to Tailwind CSS',
        content: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML. This post will guide you through the basics of using Tailwind CSS in your projects.',
        author: 'Jane Smith',
        date: '2024-08-02',
      },
      {
        id: 3,
        title: 'How to Build a REST API with Django',
        content: 'Django is a powerful web framework for building web applications. This post will cover the essentials of creating a REST API with Django and how to use Django REST Framework.',
        author: 'Alex Johnson',
        date: '2024-08-03',
      },
    ];

    // Simulate fetching data
    setTimeout(() => {
      setPosts(fakePosts);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="p-4 mt-20">
      <div className="flex mb-4">
        <div className="border-r-2 border-gray-700 h-12 mr-4"></div>
        <h1 className="text-2xl font-bold">Blog</h1>
      </div>
      <hr className="mt-4 border-t-2 border-gray-300" />
      <BlogPosts posts={posts} />
    </div>
  );
};

export default Blog;
