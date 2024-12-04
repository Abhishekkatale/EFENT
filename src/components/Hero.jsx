import React from 'react';
import { motion } from 'framer-motion';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images directly
import hero1 from '../assets/c1.jpg';
import hero2 from '../assets/c2.jpg';
import hero3 from '../assets/c3.jpg';
import hero4 from '../assets/c4.jpg';
import hero5 from '../assets/c5.jpg';

const galleryImages = [
  hero1,
  hero2,
  hero3,
  hero4,
  hero5,
];

const Hero = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'ease-in-out',
  };

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {galleryImages.map((image, index) => (
            <div key={index} className="w-full h-screen">
              <img
                src={image}
                alt={`Hero gallery image ${index + 1}`}
                className="w-full h-full object-cover brightness-75"
              />
            </div>
          ))}
        </Slider>
      </div>
      
      {/* Overlay Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white">
        {/* Event Name with Gradient */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 tracking-wider mb-6"
        >
          Enchanting Events
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="will-change-transform text-lg md:text-2xl mb-8 max-w-4xl mx-auto text-gray-300"
        >
          Celebrate Life’s Best Moments With Us. From Lavish Weddings to Corporate Masterpieces, We Create Events That Last a Lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="will-change-transform flex space-x-4"
        >
          <a
            href="#services"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 hover:bg-gradient-to-l transition-all duration-300 rounded-full text-lg font-bold text-white shadow-lg"
          >
            Discover Our Events
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-300 rounded-full text-lg font-bold shadow-lg"
          >
            Plan Your Event
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
