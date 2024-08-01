import React from 'react';
import { useParams } from 'react-router-dom';

// Sample blog data
const blogPosts = [
  { id: '1', title: 'First Blog Post', imageUrl: 'https://via.placeholder.com/600x400', content: 'This is the content of the first blog post.' },
  { id: '2', title: 'Second Blog Post', imageUrl: 'https://via.placeholder.com/600x400', content: " Welcome to Tailwind Play, the official Tailwind CSS playground!Everything here works just like it does when you're running Tailwind locallywith a real build pipeline. You can customize your config file, use featureslike `@apply`, or even add third-party plugins.Feel free to play with this example if you're just learning, or trash it andstart from scratch if you know enough to be dangerous. Have fun!" },
  // Add more posts as needed
];

const SingleBlog = () => {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) return <div>Blog post not found</div>;

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
