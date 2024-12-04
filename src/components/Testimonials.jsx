import React from 'react';
import { motion } from 'framer-motion';
import { FaRegClock } from 'react-icons/fa';

const blogPosts = [
  {
    title: 'How to Plan a Successful Corporate Event',
    date: 'January 15, 2024',
    description: 'Corporate events require careful planning. Here are tips and strategies to ensure your event is impactful, from choosing a venue to engaging your guests.',
    image: 'https://static.wixstatic.com/media/75a2e3_5e16a1888e784c29bed271c6846ca149~mv2.png/v1/fill/w_258,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Rectangle%2040127-2.png',
  },
  {
    title: 'Top Trends in Event Management for 2024',
    date: 'February 10, 2024',
    description: 'Stay ahead in the industry by exploring the top event management trends of 2024, including virtual experiences, sustainability, and hybrid events.',
    image: 'https://static.wixstatic.com/media/75a2e3_f88b9c1843f84d42b8b08fb9142666a8~mv2.png/v1/fill/w_259,h_220,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/75a2e3_f88b9c1843f84d42b8b08fb9142666a8~mv2.png',
  },
  {
    title: 'How to Choose the Perfect Venue for Your Event',
    date: 'March 8, 2024',
    description: 'Choosing the right venue is crucial for any event. We break down the factors to consider when selecting a venue that matches your event’s goals.',
    image: 'https://static.wixstatic.com/media/75a2e3_a47034fbdfc342aa959d5db214902b92~mv2.jpg/v1/fill/w_713,h_483,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/InShot_20231219_102543127.jpg',
  },
];

const BlogSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          className="text-5xl font-extrabold text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-[#6CD123] to-[#B5FF4D]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Latest Insights from EFENT
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <img 
                src={post.image} 
                alt={post.title} 
                className="w-full h-56 object-cover group-hover:scale-105 transition-all duration-300"
              />
              <div className="p-6">
                <p className="flex items-center text-[#6CD123] text-sm mb-3">
                  <FaRegClock className="mr-2" />
                  {post.date}
                </p>
                <h3 className="text-2xl font-semibold text-[#FFDB58] mb-4">{post.title}</h3>
                <p className="text-lg text-[#E0E0E0] mb-6">{post.description}</p>
                <a
                  href="/blog"
                  className="inline-block text-[#6CD123] font-semibold border-b-2 border-[#6CD123] hover:text-[#FFD700] transition duration-300"
                >
                  Read More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
