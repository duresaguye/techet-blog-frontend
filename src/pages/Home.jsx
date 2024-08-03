// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import Tags from '../components/Tags';
import BlogPosts from '../components/BlogPosts';
// import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

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
        tags: [{ name: 'React' }, { name: 'JavaScript' }],
      },
      {
        id: 2,
        title: 'Introduction to Tailwind CSS',
        content: 'Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML. This post will guide you through the basics of using Tailwind CSS in your projects.',
        author: 'Jane Smith',
        date: '2024-08-02',
        tags: [{ name: 'CSS' }, { name: 'Design' }],
      },
      {
        id: 3,
        title: 'How to Build a REST API with Django',
        content: 'Django is a powerful web framework for building web applications. This post will cover the essentials of creating a REST API with Django and how to use Django REST Framework.',
        author: 'Alex Johnson',
        date: '2024-08-03',
        tags: [{ name: 'Django' }, { name: 'API' }],
      },
    ];

    // Simulate fetching data
    setTimeout(() => {
      setPosts(fakePosts);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredPosts = selectedTag
    ? posts.filter(post => post.tags && post.tags.some(tag => tag.name === selectedTag))
    : posts;

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <div className="mt-12">
      <WelcomeMessage />
      <Tags onSelectTag={setSelectedTag} />
      <BlogPosts posts={filteredPosts} />
    </div>
  );
};

export default Home;
