import React from 'react';

const About = () => {
  const teamMembers = [
    {
      name: 'Duresa Guye',
      role: 'Founder & Full-Stack Developer',
      description: 'Leading the team with expertise in web development, React, and innovative solutions.',
      link: 'https://www.linkedin.com/in/duresa-guye', // Replace with actual link
    },
    {
      name: 'Alpha Lenco',
      role: 'AI and ML Engineer',
      description: 'Passionate about building intelligent systems that drive efficiency and innovation.',
      link: 'https://www.linkedin.com/in/alpha-lenco', // Replace with actual link
    },
    {
      name: 'Hilina Adamn',
      role: 'Content Creator & Graphics Designer',
      description: 'Crafting visually appealing designs and creating compelling content for our audience.',
      link: 'https://www.linkedin.com/in/hilina-adamn', // Replace with actual link
    },
    {
      name: 'Ruth Dehane',
      role: 'Content Creator & Graphics Designer',
      description: 'Specializing in storytelling through design and engaging digital content.',
      link: 'https://www.linkedin.com/in/ruth-dehane', // Replace with actual link
    },
    {
      name: 'Tolosa Dirba',
      role: 'Web Developer & Digital Marketing Specialist',
      description: 'Ensuring optimal web presence and implementing effective marketing strategies.',
      link: 'https://www.linkedin.com/in/tolosa-dirba', // Replace with actual link
    },
    {
      name: 'Muhammed Ahmed',
      role: 'Video Editor',
      description: 'Transforming raw footage into visually stunning and impactful videos.',
      link: 'https://www.linkedin.com/in/muhammed-ahmed', // Replace with actual link
    },
  ];

  return (
    <div className="p-6 mt-20 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About Techኢት Digital Solutions</h1>
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <strong>Techኢት Digital Solutions</strong>, your one-stop shop for all things digital.
        Our team specializes in empowering businesses and individuals through cutting-edge technology
        services, including website development, SEO optimizations, digital marketing, social media management,
        and more.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        With a talented team of experts, we combine technical excellence with creativity to deliver exceptional
        solutions tailored to your needs. Whether you're building a strong online presence or creating captivating content,
        we are here to help you succeed in the digital age.
      </p>

      <h2 className="text-3xl font-bold mb-6 text-center">What We Do</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="flex items-start space-x-4">
          <div className="text-blue-600 text-3xl">
            <i className="fas fa-laptop-code"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Website Development</h3>
            <p className="text-gray-700">
              Modern, responsive, and user-friendly websites.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-green-600 text-3xl">
            <i className="fas fa-search"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">SEO Optimizations</h3>
            <p className="text-gray-700">
              Helping your business rank higher and reach its audience.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-yellow-600 text-3xl">
            <i className="fas fa-bullhorn"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Digital Marketing</h3>
            <p className="text-gray-700">
              Tailored marketing strategies with measurable results.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-purple-600 text-3xl">
            <i className="fas fa-users"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Social Media Management</h3>
            <p className="text-gray-700">
              Engaging audiences and building your online presence.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-red-600 text-3xl">
            <i className="fas fa-pen"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Content Creation</h3>
            <p className="text-gray-700">
              Compelling and audience-focused content.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-indigo-600 text-3xl">
            <i className="fas fa-palette"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Graphic Design</h3>
            <p className="text-gray-700">
              Stunning visuals to elevate your brand.
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <div className="text-orange-600 text-3xl">
            <i className="fas fa-video"></i>
          </div>
          <div>
            <h3 className="text-xl font-bold">Video Editing</h3>
            <p className="text-gray-700">
              Captivating videos that tell your story.
            </p>
          </div>
        </div>
      </div>


      <h2 className="text-3xl font-bold mb-6 text-center">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="border p-6 rounded shadow-md bg-gray-50 text-center hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
            <p className="text-gray-600 italic">{member.role}</p>
            <p className="text-gray-700 mt-3">{member.description}</p>
            <a
              href={member.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-4 inline-block font-medium hover:underline"
            >
              linkedin
            </a>
          </div>
        ))}
      </div>

      <p className="text-lg font-semibold text-center mt-10">
        Thank you for choosing Techኢት Digital Solutions as your partner in the digital journey.
      </p>
    </div>
  );
};

export default About;
