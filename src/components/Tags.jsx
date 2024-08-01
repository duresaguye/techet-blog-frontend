// src/components/Tags.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Tags = ({ onSelectTag }) => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/tags/')
      .then(response => {
        setTags(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError('Error fetching tags');
        setLoading(false);
        console.error('Error fetching tags:', error);
      });
  }, []);

  if (loading) return <div className="flex justify-center py-4">Loading...</div>;
  if (error) return <div className="flex justify-center py-4 text-red-500">{error}</div>;

  return (
    <div className="flex justify-center py-4">
      {tags.map(tag => (
        <span
          key={tag.id}
          className=" px-3 py-1 rounded-full mx-1 cursor-pointer"
          onClick={() => onSelectTag(tag.name)}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

export default Tags;
