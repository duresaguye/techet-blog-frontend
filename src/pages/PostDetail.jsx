// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Uncomment this block to fetch real data from the API
    /*
    axios.get(`http://localhost:8000/api/posts/${id}/`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Failed to load post');
        setLoading(false);
        console.error('There was an error fetching the post!', error);
      });
    */

    // Fake post data
    const fakePosts = [
      {
        id: 1,
        title: 'Understanding React Hooks',
        content: '<p>React Hooks are functions that let you use state and other React features without writing a class. In this post, we will explore the basics of useState and useEffect hooks.</p>',
        featured_image: 'https://via.placeholder.com/800x400?text=React+Hooks',
        published_date: '2024-08-01',
      },
      {
        id: 2,
        title: 'Introduction to Tailwind CSS',
        content: '<p>Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML. This post will guide you through the basics of using Tailwind CSS in your projects.</p>',
        featured_image: 'https://via.placeholder.com/800x400?text=Tailwind+CSS',
        published_date: '2024-08-02',
      },
      {
        id: 3,
        title: 'How to Build a REST API with Django',
        content: '<p>Django is a powerful web framework for building web applications. This post will cover the essentials of creating a REST API with Django and how to use Django REST Framework.</p>',
        featured_image: 'https://via.placeholder.com/800x400?text=Django+REST+API',
        published_date: '2024-08-03',
      },
    ];

    // Find the post with the matching ID
    const post = fakePosts.find(p => p.id === parseInt(id));
    
    // Simulate fetching data
    setTimeout(() => {
      if (post) {
        setPost(post);
      } else {
        setError('Post not found');
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen text-gray-500">Loading...</div>;

  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  return (
    <div className="p-6 md:p-12 mx-auto max-w-3xl mt-10">
      {post && (
        <article className=" shadow-lg rounded-lg overflow-hidden">
          {post.featured_image && (
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-64 object-cover mb-6 rounded-t-lg"
            />
          )}
          <header className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-green-500 mb-3">
              {post.title}
            </h1>
            <p className="text-lg mb-6">
              {new Date(post.published_date).toLocaleDateString()}
            </p>
          </header>
          <div 
            className="prose prose-lg dark:prose-invert p-6" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      )}
    </div>
  );
};

export default PostDetail;
