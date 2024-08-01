// src/components/PostDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
  }, [id]);

  if (loading) return <div className="flex justify-center items-center h-screen text-gray-500">Loading...</div>;

  if (error) return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;

  return (
    <div className="p-6 md:p-12 mx-auto max-w-3xl mt-10">
      {post && (
        <article className="light:bg-gray-900 text-gray-600 shadow-lg rounded-lg overflow-hidden">
          {post.featured_image && (
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-64 object-cover mb-6 rounded-t-lg"
            />
          )}
          <header className="p-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              {post.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
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
