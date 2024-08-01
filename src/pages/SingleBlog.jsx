import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the Django API
    axios.get(`http://localhost:8000/api/posts/`)
      .then(response => {
        setPost(response.data);
      })
      .catch(error => {
        setError('Blog post not found');
        console.error('There was an error fetching the blog post!', error);
      });
  }, [id]);

  if (error) return <div>{error}</div>;

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <img src={post.imageUrl} alt={post.title} className="w-full h-64 object-cover mb-4" />
      <div className="text-gray-700">
        {post.content}
      </div>
    </div>
  );
};

export default SingleBlog;
