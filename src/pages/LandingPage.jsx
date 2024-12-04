// App.js
import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import OurPast from '../components/OurPast';
import LatestImages from '../components/LatestImages';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <div className="font-sans bg-[#D8DBD5]">
      <Header />
      <Hero />
      <AboutUs />
      <OurPast />
      <LatestImages />
      <Blog />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;