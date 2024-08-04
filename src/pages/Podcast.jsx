// src/components/Podcast.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';

const Podcast = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    // Uncomment this block to fetch real data from the API
    /*
    const fetchPodcasts = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/youtube/');
        setPodcasts(response.data);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }
    };

    fetchPodcasts();
    */

    // Fake podcast data
    const fakePodcasts = [
      {
        id: 1,
        embed_url: 'https://www.youtube.com/embed/21N1x-vJ_gE?si=2MreJ-_XS5LSFQbT', 
        title: 'TechኢትPodcast S02 Ep01 [Dagmawi Esayas and Mulu Tsega] ',
      },
      {
        id: 2,
        embed_url: 'https://www.youtube.com/embed/Crfy2QkeM0M?si=zfSWoJuk3rIePK_r', 
        title: 'Techኢት Podcast S01 E12 [GUEST: MULU TSEGA]',
      },
      {
        id: 3,
        embed_url: 'https://www.youtube.com/embed/5ocNYkEj3fk?si=ez0HNoUswDUyVp6N', 
        title: 'Techኢት Podcast TechNerd and DesignGuru',
      },
    ];

    // Simulate fetching data
    setTimeout(() => {
      setPodcasts(fakePodcasts);
    }, 1000);
  }, []);

  return (
    <div className="p-4 mt-20">
      <h1 className="text-3xl font-bold mb-6">Podcasts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {podcasts.map((podcast, index) => (
          <div key={podcast.id} className="shadow-md rounded-lg overflow-hidden">
            <div className="relative">
              <iframe
                width="100%"
                height="315"
                src={podcast.embed_url}
                title={podcast.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-48 object-cover"
              ></iframe>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{podcast.title}</h2>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
