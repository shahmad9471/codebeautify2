import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi2';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import SearchBar from '../components/SearchBar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import InfoSection from '../components/InfoSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const { FiSearch, FiArrowRight } = FiIcons;
const { HiCommandLine } = HiIcons;

const HomePage = ({ darkMode }) => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <Hero darkMode={darkMode} />

      {/* Features Section */}
      <Features darkMode={darkMode} />

      {/* Info Section (Modern Trusted By) */}
      <InfoSection darkMode={darkMode} />

      {/* Client Testimonials */}
      <Testimonials darkMode={darkMode} />

      {/* FAQ Section */}
      <FAQ darkMode={darkMode} />

      {/* Search Modal */}
      <SearchBar darkMode={darkMode} isOpen={showSearch} onClose={() => setShowSearch(false)} />

      {/* Mobile Sticky Search Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={() => setShowSearch(true)}
          className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SafeIcon icon={FiSearch} className="text-xl" />
        </motion.button>
      </div>
    </>
  );
};

export default HomePage;