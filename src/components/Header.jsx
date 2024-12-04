// components/Navbar.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaCalendarAlt, FaEnvelope, FaBars, FaTimes, FaImages } from 'react-icons/fa';
import { MdEventNote, MdOutlineCreate, MdInfo } from "react-icons/md";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-2 px-6 fixed w-full z-20 shadow-xl backdrop-blur-md"
    >
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-4xl lg:text-5xl font-bold cursor-pointer select-none">
          EFENT
        </div>

        {/* Menu Button for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden text-white text-3xl focus:outline-none z-50">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        
        {/* Navbar Links */}
        <ul
          className={`lg:flex space-y-5 lg:space-y-0 lg:space-x-10 absolute lg:static top-20 right-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent transition-all duration-500 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} lg:translate-x-0`}
        >
          {/* Links Array */}
          {[
            { to: '/home', icon: <FaHome className="mr-2" />, text: 'Home' },
            { icon: <MdInfo className="mr-2" />, text: 'About' },
            { icon: <FaCalendarAlt className="mr-2" />, text: 'Events' },
            { icon: <FaImages className="mr-2" />, text: 'Gallery' },
            { icon: <MdEventNote className="mr-2" />, text: 'Blog' },
            { icon: <FaEnvelope className="mr-2" />, text: 'Contact' },
          ].map((link, index) => (
            <li key={index} className="text-lg font-medium">
              <Link
                to={link.to}
                className="flex items-center justify-center lg:justify-start px-4 py-2 lg:px-0 lg:py-0 hover:text-green-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.icon} {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
