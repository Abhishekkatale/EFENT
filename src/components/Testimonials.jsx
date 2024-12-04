import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-16 text-center relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 "></div>
      <div className="container mx-auto px-6 md:px-12 py-16 relative z-10">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#FF6347] mb-12"
        >
          See What Our Customers Say About Us
        </motion.h2>

        {/* Testimonial Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left"
        >
          {/* Testimonial 1 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 p-8 rounded-xl shadow-xl hover:shadow-[0px_0px_30px_20px_rgba(108,209,35,0.6)] transition-shadow duration-500"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/1.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full border-4 border-[#FFD700] mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">John Doe</h3>
                <p className="text-sm text-[#FFD700]">Event Organizer</p>
              </div>
            </div>
            <p className="text-lg text-[#CCCCCC] mb-4">
              "EFENT made our wedding day truly special! The attention to detail and seamless coordination
              ensured everything went off without a hitch. We couldn’t be more thrilled with the outcome!"
            </p>
            <div className="flex justify-start items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFD700] text-xl" />
              ))}
            </div>
          </motion.div>

          {/* Testimonial 2 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 p-8 rounded-xl shadow-xl hover:shadow-[0px_0px_30px_20px_rgba(108,209,35,0.6)] transition-shadow duration-500"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/2.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full border-4 border-[#FFD700] mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Sarah Smith</h3>
                <p className="text-sm text-[#FFD700]">Corporate Client</p>
              </div>
            </div>
            <p className="text-lg text-[#CCCCCC] mb-4">
              "Our corporate event was elevated to the next level thanks to EFENT! Their professionalism
              and creativity helped us organize a flawless experience for our team."
            </p>
            <div className="flex justify-start items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFD700] text-xl" />
              ))}
            </div>
          </motion.div>

          {/* Testimonial 3 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-teal-500 via-green-500 to-blue-500 p-8 rounded-xl shadow-xl hover:shadow-[0px_0px_30px_20px_rgba(108,209,35,0.6)] transition-shadow duration-500"
          >
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/3.jpg"
                alt="Customer"
                className="w-16 h-16 rounded-full border-4 border-[#FFD700] mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Michael Lee</h3>
                <p className="text-sm text-[#FFD700]">Private Party Client</p>
              </div>
            </div>
            <p className="text-lg text-[#CCCCCC] mb-4">
              "EFENT transformed my birthday party into something unforgettable. They went above and beyond
              to ensure the event was a success. Highly recommend!"
            </p>
            <div className="flex justify-start items-center">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-[#FFD700] text-xl" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
