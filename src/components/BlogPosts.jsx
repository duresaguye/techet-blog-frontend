// src/components/BlogPosts.js
import React from 'react';

const BlogPosts = ({ posts }) => {
  if (posts.length === 0) return <div>No blog posts available.</div>;

  return (
    <div className="flex flex-wrap justify-center">
      {posts.map(post => (
        <div
          key={post.id}
          className="border border-gray-200 shadow-lg rounded-lg p-4 m-4 max-w-xs transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-2xl hover:border-blue-400 "
        >
          <h2 className="text-3xl md:text-4xl font-bold text-green-500 mb-3">{post.title}</h2>
          {post.featured_image && (
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-40 object-cover rounded mb-2"
            />
          )}
          <p>{post.content.substring(0, 100)}...</p>
          <a href={`/posts/${post.id}`} className="text-blue-500 hover:underline">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
