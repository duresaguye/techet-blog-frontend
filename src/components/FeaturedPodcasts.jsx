import React from 'react';

const FeaturedPodcasts = () => {
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

  return (
    <div className="py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Podcasts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {fakePodcasts.map((podcast) => (
            <div key={podcast.id} className="shadow-md rounded-lg p-6">
              <h3 className="text-xl font-bold">{podcast.title}</h3>
              <p className="text-gray-600 mt-2">{podcast.description}</p>
              <a href={podcast.link} className="text-blue-600 hover:underline mt-4 block">Listen Now</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPodcasts;
