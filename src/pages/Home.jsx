// src/pages/Home.js
import React, { useState, useEffect } from 'react';
import WelcomeMessage from '../components/WelcomeMessage';
import Tags from '../components/Tags';
import BlogPosts from '../components/BlogPosts';
import axios from 'axios';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
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
