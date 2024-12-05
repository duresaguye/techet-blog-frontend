// import React from 'react';
import alphaImage from '../assets/alpha_photo.jpg';
import duresaImage from '../assets/icon-modified.jpg';
import hilinaImage from '../assets/hilina_photo-modified.jpg';
import ruthImage from '../assets/ruth_photo-modified.jpg';
import tolosaImage from '../assets/tolosa_photo.jpg';
import mohammedImage from '../assets/mohammed_photo-modified.jpg';

const About = () => {
  const teamMembers = [
    {
      name: 'Duresa Guye',
      role: 'Founder & Full-Stack Developer',
      description: 'Leading the team with expertise in web development, React, and innovative solutions.',
      link: 'https://www.linkedin.com/in/duresa-guye',
      image: duresaImage,
    },
    {
      name: 'Alpha Lencho',
      role: 'AI and ML Engineer',
      description: 'Passionate about building intelligent systems that drive efficiency and innovation.',
      link: 'https://www.linkedin.com/in/alpha-lenco',
      image: alphaImage,
    },
    {
      name: 'Hilina Adane',
      role: 'Content Creator & Graphics Designer',
      description: 'Crafting visually appealing designs and creating compelling content for our audience.',
      link: 'https://www.linkedin.com/in/hilina-adamn',
      image: hilinaImage,
    },
    {
      name: 'Ruth Dehane',
      role: 'Content Creator & Graphics Designer',
      description: 'Specializing in storytelling through design and engaging digital content.',
      link: 'https://www.linkedin.com/in/ruth-dehane',
      image: ruthImage,
    },
    {
      name: 'Tolosa Diriba',
      role: 'Web Developer & Digital Marketing Specialist',
      description: 'Ensuring optimal web presence and implementing effective marketing strategies.',
      link: 'https://www.linkedin.com/in/tolosa-dirba',
      image: tolosaImage,
    },
    {
      name: 'Muhammed Ahmed',
      role: 'Video Editor',
      description: 'Transforming raw footage into visually stunning and impactful videos.',
      link: 'https://www.linkedin.com/in/muhammed-ahmed',
      image: mohammedImage,
    },
  ];

  return (
    <div className="p-6 mt-20 max-w-4xl mx-auto card">
      <h1 className="text-4xl font-bold mb-8 text-center">About Techኢት Digital Solutions</h1>
      <p className="text-lg leading-relaxed mb-6">
        Welcome to <strong>Techኢት Digital Solutions</strong>, your one-stop shop for all things digital.
        Our team specializes in empowering businesses and individuals through cutting-edge technology
        services, including website development, SEO optimizations, digital marketing, social media management,
        and more.
      </p>
      <p className="text-lg leading-relaxed mb-8">
        With a talented team of experts, we combine technical excellence with creativity to deliver exceptional
        solutions tailored to your needs. Whether you&apos;re building a strong online presence or creating captivating content,
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl transition-shadow border"
          >
            {/* Profile Image */}
            <div className="flex justify-center p-4 bg-gray-100">
              <img
                src={member.image}
                alt={`${member.name}'s profile`}
                className="w-24 h-24 rounded-full border-2 border-gray-300 object-cover"
              />
            </div>
        
            {/* Name and Role */}
            <div className="p-4 bg-gray-100 text-center">
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-600 italic">{member.role}</p>
            </div>
        
            {/* Description */}
            <div className="p-4">
              <p className="text-gray-700 text-justify">{member.description}</p>
            </div>
        
            {/* Footer */}
            <div className="p-4 bg-gray-50 text-center">
              <a
                href={member.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors"
              >
                Visit LinkedIn
              </a>
            </div>
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
