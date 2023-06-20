import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <HeroSection />
      {/* Add more components and sections as needed */}
      <Footer />
    </div>
  );
};

export default HomePage;
