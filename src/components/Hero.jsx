import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi2';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import SearchBar from './SearchBar';

const { FiSearch, FiArrowRight } = FiIcons;
const { HiCommandLine } = HiIcons;

const Hero = ({ darkMode }) => {
  const [showSearch, setShowSearch] = useState(false);

  // Popular tool categories for showcase section
  const popularTools = [
    {
      icon: SiIcons.SiJson,
      name: "JSON Formatter",
      description: "Format, validate and beautify JSON data with enterprise-grade precision",
      color: "from-amber-400 via-orange-500 to-red-500",
      route: "/json-formatter"
    },
    {
      icon: SiIcons.SiJavascript,
      name: "JavaScript Formatter",
      description: "Clean and organize JavaScript code with AI-powered formatting",
      color: "from-yellow-400 via-yellow-500 to-amber-500",
      route: "/javascript-formatter"
    },
    {
      icon: SiIcons.SiCss3,
      name: "CSS Formatter",
      description: "Format CSS stylesheets with advanced optimization",
      color: "from-blue-400 via-cyan-500 to-teal-500",
      route: "/css-formatter"
    },
    {
      icon: SiIcons.SiMysql,
      name: "SQL Formatter",
      description: "Format complex SQL queries with multi-dialect support",
      color: "from-orange-400 via-red-500 to-pink-500",
      route: "/sql-formatter"
    }
  ];

  return (
    <div className={`relative pt-24 pb-16 overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-gradient-to-b from-blue-50 to-white'}`}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-grid-pattern opacity-5"></div>
        {darkMode && (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/95 to-gray-900"></div>
        )}
        <motion.div
          className="absolute top-20 right-[10%] w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{ y: [0, -15, 0], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Heading */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className={`text-4xl sm:text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} tracking-tight mb-6`}>
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Enterprise Code Formatter & Beautifier</span>
            </h1>
            <motion.p
              className={`text-lg sm:text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-4xl mx-auto leading-relaxed`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Powerful online code formatter, beautifier, minifier, and validator designed for developers and businesses. Supports JSON, SQL, XML, YAML, HTML, CSS, JavaScript, and more with enterprise-grade security.
            </motion.p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="mb-8 w-full max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <button
              onClick={() => setShowSearch(true)}
              className={`w-full flex items-center px-5 py-4 rounded-xl transition-all duration-200 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 border border-gray-700' : 'bg-white hover:bg-gray-50 border border-gray-200 shadow-md hover:shadow-lg'}`}
            >
              <SafeIcon icon={FiSearch} className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
              <span className={`ml-4 text-base ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Search tools, formatters, converters...</span>
              <div className="ml-auto flex items-center">
                <kbd className={`hidden sm:inline-block px-3 py-1.5 text-sm font-medium ${darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-100 text-gray-500'} rounded border ${darkMode ? 'border-gray-600' : 'border-gray-200'}`}>⌘K</kbd>
              </div>
            </button>
          </motion.div>

          {/* Popular Tools Section */}
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {popularTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ y: -5, boxShadow: "0 15px 30px -5px rgba(0,0,0,0.15)" }}
                  className={`group ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl border shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <Link to={tool.route} className="block p-4 h-full">
                    <div
                      className={`bg-gradient-to-r ${tool.color} w-12 h-12 rounded-lg flex items-center justify-center mb-3 shadow-md group-hover:scale-105 transition-transform duration-300`}
                    >
                      <SafeIcon icon={tool.icon} className="text-white text-xl" />
                    </div>
                    <h3
                      className={`text-base font-bold ${darkMode ? 'text-white' : 'text-gray-900'} group-hover:text-blue-600 transition-colors mb-2`}
                    >
                      {tool.name}
                    </h3>
                    <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-sm line-clamp-2`}>
                      {tool.description}
                    </p>
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-6 text-center"
            >
              <Link
                to="/all-tools"
                className={`inline-flex items-center space-x-2 ${
                  darkMode
                    ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                    : 'bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 shadow-md'
                } px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm`}
                role="button"
              >
                <span>View all 50+ developer tools</span>
                <SafeIcon icon={FiArrowRight} className="text-sm" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchBar darkMode={darkMode} isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </div>
  );
};

export default Hero;