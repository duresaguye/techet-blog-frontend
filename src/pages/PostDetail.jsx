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
        content: `
          <p>React Hooks are functions that allow you to use state and other React features in functional components without writing a class. In this post, we will explore the basics of the useState and useEffect hooks:</p>
          <ul>
            <li><strong>useState:</strong> Lets you add state management to functional components. It helps you track and update values, such as counters or form inputs.</li>
            <li><strong>useEffect:</strong> Manages side effects in your components, like fetching data from an API or setting up subscriptions. It runs after the component renders and can be customized to run only when specific dependencies change.</li>
            <li><strong>useContext:</strong> Provides access to context values directly in functional components, making it easier to share data (such as themes or user information) across your application without manually passing props.</li>
            <li><strong>useReducer:</strong> Handles more complex state logic using a reducer function, similar to Redux but within the component itself. It is useful for managing multiple related state updates.</li>
            <li><strong>useMemo:</strong> Optimizes performance by memoizing the results of expensive calculations. It ensures that recalculations occur only when specific dependencies change, reducing unnecessary computations.</li>
            <li><strong>useCallback:</strong> Memoizes callback functions to prevent their recreation on every render. This is useful for passing stable callbacks to child components, helping to avoid unnecessary re-renders.</li>
          </ul>
          <pre><code>
          // Example of useState
          import React, { useState } from 'react';

          const Counter = () => {
            const [count, setCount] = useState(0);

            return (
              <div>
                <p>You clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                  Click me
                </button>
              </div>
            );
          };

          export default Counter;
          </code></pre>
        `,
        author: 'John Doe',
        featured_image: 'data:image/jpeg;base64,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',
        published_date: '2024-08-01',
        tags: [{ name: 'React' }, { name: 'JavaScript' }],
      },
      {
        id: 2,
        title: 'Introduction to Tailwind CSS',
        content: `
          <p>Tailwind CSS is a utility-first CSS framework for creating custom designs without having to leave your HTML. This post will guide you through the basics of using Tailwind CSS in your projects.</p>
          <ul>
            <li><strong>Utility-first:</strong> Tailwind provides low-level utility classes to build custom designs without writing custom CSS.</li>
            <li><strong>Responsive Design:</strong> Easily create responsive designs with Tailwind's built-in responsive utilities.</li>
            <li><strong>Customization:</strong> Tailwind can be customized to fit your project's needs using the Tailwind configuration file.</li>
          </ul>
          <pre><code>
          // Example of Tailwind CSS usage
          &lt;div className="bg-blue-500 text-white p-4"&gt;
            Hello, Tailwind CSS!
          &lt;/div&gt;
          </code></pre>
        `,
        featured_image: 'data:image/png;base64,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',
        published_date: '2024-08-02',
      },
      {
        id: 3,
        title: 'How to Build a REST API with Django',
        content: `
          <p>Django is a powerful web framework for building web applications. This post will cover the essentials of creating a REST API with Django and how to use Django REST Framework (DRF).</p>
          <ul>
            <li><strong>Installation:</strong> Install Django and DRF using pip.</li>
            <li><strong>Model Creation:</strong> Define your data models using Django's ORM.</li>
            <li><strong>Serializers:</strong> Create serializers to convert your models to JSON format.</li>
            <li><strong>Views and URLs:</strong> Create API views and URL patterns to handle API requests.</li>
          </ul>
          <pre><code>
          // Example of Django REST Framework
          from rest_framework import serializers, viewsets
          from .models import MyModel

          class MyModelSerializer(serializers.ModelSerializer):
              class Meta:
                  model = MyModel
                  fields = '__all__'

          class MyModelViewSet(viewsets.ModelViewSet):
              queryset = MyModel.objects.all()
              serializer_class = MyModelSerializer
          </code></pre>
        `,
        featured_image: 'https://res.cloudinary.com/practicaldev/image/fetch/s--rAk2-3Xf--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/gz5xantp1vycu7ueleh4.jpg',
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
        <article className="shadow-lg rounded-lg overflow-hidden ">
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
