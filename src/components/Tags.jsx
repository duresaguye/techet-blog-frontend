// src/components/Tags.js
import React, { useState, useEffect } from 'react';

const Tags = () => {
  const [tags, setTags] = useState([]);

  // Commenting out the API fetching part
  // useEffect(() => {
  //   axios.get('/api/tags') // Adjust the endpoint according to your backend
  //     .then(response => setTags(response.data))
  //     .catch(error => console.error('Error fetching tags:', error));
  // }, []);

  // Using hardcoded data for now
  useEffect(() => {
    // Fake data as a placeholder
    const fakeTags = [
      { id: 1, name: 'Technology' },
      { id: 2, name: 'Science' },
      { id: 3, name: 'Health' },
      { id: 4, name: 'Lifestyle' }
    ];
    setTags(fakeTags);
  }, []);

  return (
    <div className="flex justify-center py-4">
      {tags.map(tag => (
        <span key={tag.id} className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full mx-1">
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
