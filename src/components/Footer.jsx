import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Footer Top: Logo and Social Media Links */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-8">
          <a
            href="/"
            className="text-4xl font-extrabold text-[#FFD700] tracking-widest uppercase hover:text-[#FF6347] transition duration-300"
          >
            EFENT
          </a>
          <div className="flex space-x-8 mt-6 lg:mt-0">
            <a
              href="https://www.facebook.com/EFENT"
              className="text-3xl hover:text-[#FFD700] transition duration-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/EFENT"
              className="text-3xl hover:text-[#FFD700] transition duration-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/EFENT"
              className="text-3xl hover:text-[#FFD700] transition duration-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/EFENT"
              className="text-3xl hover:text-[#FFD700] transition duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Footer Middle: Navigation Links */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Company</h4>
            <a href="/about-us" className="hover:text-[#FFD700] transition duration-300">
              About Us
            </a>
            <a href="/contact-us" className="hover:text-[#FFD700] transition duration-300">
              Contact Us
            </a>
            <a href="/services" className="hover:text-[#FFD700] transition duration-300">
              Services
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Events</h4>
            <a href="/events/upcoming" className="hover:text-[#FFD700] transition duration-300">
              Upcoming Events
            </a>
            <a href="/events/past" className="hover:text-[#FFD700] transition duration-300">
              Past Events
            </a>
            <a href="/events/book" className="hover:text-[#FFD700] transition duration-300">
              Book an Event
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Legal</h4>
            <a href="/terms-and-conditions" className="hover:text-[#FFD700] transition duration-300">
              Terms of Service
            </a>
            <a href="/privacy-policy" className="hover:text-[#FFD700] transition duration-300">
              Privacy Policy
            </a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="text-lg font-semibold">Resources</h4>
            <a href="/blog" className="hover:text-[#FFD700] transition duration-300">
              Blog
            </a>
            <a href="/faq" className="hover:text-[#FFD700] transition duration-300">
              FAQs
            </a>
            <a href="/help" className="hover:text-[#FFD700] transition duration-300">
              Help Center
            </a>
          </div>
        </div>

        {/* Footer Bottom: Copyright & Developed By */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-sm mb-6">
          <p>&copy; 2024 EFENT. All rights reserved.</p>
          <span>
            Developed by{' '}
            <a
              href="https://musitech.in"
              className="text-[#FFD700] hover:text-[#FF6347] transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              MusiTech
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
