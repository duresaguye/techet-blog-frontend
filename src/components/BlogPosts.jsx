import React from 'react';
import { Link } from 'react-router-dom';

// Sample blog data
const blogPosts = [
  { id: '1', title: 'First Blog Post', imageUrl: 'https://via.placeholder.com/600x400', excerpt: 'This is a brief excerpt of the first blog post.' },
  { id: '2', title: 'Second Blog Post', imageUrl: 'https://via.placeholder.com/600x400', excerpt: 'This is a brief excerpt of the second blog post.' },
  { id: '1', title: 'First Blog Post', imageUrl: 'https://via.placeholder.com/600x400', excerpt: 'This is a brief excerpt of the first blog post.' },
  { id: '2', title: 'Second Blog Post', imageUrl: 'https://via.placeholder.com/600x400', excerpt: 'This is a brief excerpt of the second blog post.' },
  { id: '1', title: 'First Blog Post', imageUrl: 'https://via.placeholder.com/600x400', excerpt: 'This is a brief excerpt of the first blog post.' },
  { id: '2', title: 'Second Blog Post', imageUrl: 'https://via.placeholder.com/600x400', excerpt: 'This is a brief excerpt of the second blog post.' },
  
];

const BlogPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {blogPosts.map(post => (
        <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.excerpt}</p>
            <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 block">Read More</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
