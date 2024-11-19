import React from 'react';

const UpcomingEvents = () => {
  const fakeEvents = [
    {
      id: 1,
      title: 'React Workshop for Beginners',
      date: '2024-09-15',
      location: 'Virtual Event',
      link: '#',
    },
    {
      id: 2,
      title: 'Techኢት Live Podcast',
      date: '2024-09-25',
      location: 'Addis Ababa, Ethiopia',
      link: '#',
    },
    {
      id: 3,
      title: 'Hackathon: Innovate Africa',
      date: '2024-10-10',
      location: 'Nairobi, Kenya',
      link: '#',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Upcoming Events</h2>
        <ul className="space-y-4">
          {fakeEvents.map((event) => (
            <li key={event.id} className=" shadow-md rounded-lg p-4">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-gray-600">{event.date} - {event.location}</p>
              <a href={event.link} className="text-blue-600 hover:underline mt-2 block">Register</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UpcomingEvents;
