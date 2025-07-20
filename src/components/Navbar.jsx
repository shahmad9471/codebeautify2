import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import * as HiIcons from 'react-icons/hi2';
import SafeIcon from '../common/SafeIcon';
import SearchBar from './SearchBar';

const { FiCode, FiMenu, FiX, FiSun, FiMoon, FiArrowRight, FiShield, FiZap, FiSettings, FiChevronDown } = FiIcons;
const { SiJson, SiJavascript, SiCss3, SiMysql, SiXml } = SiIcons;
const { HiCommandLine, HiSparkles } = HiIcons;

const Navbar = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setShowSearch(true);
      }
      if (e.key === 'Escape') {
        setShowSearch(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Categories for tools
  const toolCategories = [
    {
      name: "Code Tools",
      tools: [
        { id: 'json-formatter', name: 'JSON', icon: SiJson },
        { id: 'javascript-formatter', name: 'JavaScript', icon: SiJavascript },
        { id: 'css-formatter', name: 'CSS', icon: SiCss3 },
      ]
    },
    {
      name: "Data Tools",
      tools: [
        { id: 'sql-formatter', name: 'SQL', icon: SiMysql },
        { id: 'xml-formatter', name: 'XML', icon: SiXml },
      ]
    }
  ];

  const navItems = [
    { name: 'Tools', href: '/all-tools', icon: HiCommandLine },
    { name: 'Features', href: '#features', icon: HiSparkles },
    { name: 'Enterprise', href: '#enterprise', icon: FiShield },
    { name: 'About', href: '#about', icon: FiZap },
    { name: 'Contact', href: '#contact', icon: FiSettings }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-gray-900/95 backdrop-blur-xl shadow-lg border-b border-gray-800/50'
              : 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200/50'
            : darkMode
            ? 'bg-gray-900/80 backdrop-blur-sm'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Enhanced Logo */}
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Link to="/" className="flex items-center space-x-3 group">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity shadow-lg"></div>
                  <SafeIcon icon={FiCode} className="text-xl text-white relative z-10" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                    Byte Beautify
                  </span>
                  <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                    Enterprise Developer Suite
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Tools Dropdown */}
              <div className="relative group">
                <button className="flex items-center space-x-1 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                  <SafeIcon icon={HiCommandLine} className="text-sm" />
                  <span>Tools</span>
                  <SafeIcon
                    icon={FiChevronDown}
                    className="text-xs group-hover:rotate-180 transition-transform"
                  />
                </button>
                <div className="absolute left-0 top-full mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="p-4 space-y-4">
                    {toolCategories.map((category, index) => (
                      <div key={index}>
                        <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                          {category.name}
                        </h4>
                        <div className="space-y-1">
                          {category.tools.map((tool) => (
                            <Link
                              key={tool.id}
                              to={`/${tool.id}`}
                              className="flex items-center space-x-2 px-2 py-1.5 rounded-md text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            >
                              <SafeIcon icon={tool.icon} className="text-lg" />
                              <span>{tool.name}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                      <Link
                        to="/all-tools"
                        className="flex items-center justify-between px-2 py-1.5 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      >
                        <span>View All Tools</span>
                        <SafeIcon icon={FiArrowRight} className="text-xs" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other Nav Items */}
              {navItems.slice(1).map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-1 text-sm font-medium transition-all duration-200 group ${
                    darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'
                  }`}
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                  whileHover={{ y: -1 }}
                >
                  <SafeIcon icon={item.icon} className="text-sm" />
                  <span>{item.name}</span>
                </motion.a>
              ))}

              {/* Action Buttons */}
              <div className="flex items-center space-x-2 border-l border-gray-200 dark:border-gray-700 pl-6">
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className={`p-1.5 rounded-lg transition-colors ${
                    darkMode
                      ? 'text-gray-400 hover:text-gray-300 hover:bg-gray-800'
                      : 'text-gray-500 hover:text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <SafeIcon icon={darkMode ? FiSun : FiMoon} className="text-lg" />
                </button>
                <Link
                  to="/pricing"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-colors"
                >
                  Go Pro
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-1.5 rounded-lg ${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                }`}
              >
                <SafeIcon icon={darkMode ? FiSun : FiMoon} className="text-lg" />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-1.5 rounded-lg ${
                  darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-600 hover:text-gray-700'
                }`}
              >
                <SafeIcon icon={isOpen ? FiX : FiMenu} className="text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        >
          <div className={`${darkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-t`}>
            <div className="max-w-6xl mx-auto px-4 py-4">
              {/* Tool Categories */}
              {toolCategories.map((category, index) => (
                <div key={index} className="mb-4">
                  <h4 className={`text-xs font-semibold mb-2 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {category.name}
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {category.tools.map((tool) => (
                      <Link
                        key={tool.id}
                        to={`/${tool.id}`}
                        className={`flex items-center space-x-2 p-2 rounded-lg ${
                          darkMode
                            ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                            : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        <SafeIcon icon={tool.icon} className="text-lg" />
                        <span className="text-sm">{tool.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* View All Tools */}
              <div className="mb-4">
                <Link
                  to="/all-tools"
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    darkMode
                      ? 'bg-blue-900/50 text-blue-400 hover:bg-blue-900/70'
                      : 'bg-blue-50 text-blue-600 hover:bg-blue-100'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium">View All Tools</span>
                  <SafeIcon icon={FiArrowRight} className="text-sm" />
                </Link>
              </div>

              {/* Navigation Links */}
              <div className={`border-t pt-4 mt-4 ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                {navItems.slice(1).map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`flex items-center space-x-2 p-2 rounded-lg mb-1 ${
                      darkMode ? 'text-gray-300 hover:bg-gray-800' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <SafeIcon icon={item.icon} className="text-lg" />
                    <span>{item.name}</span>
                  </a>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <Link
                  to="/pricing"
                  className="block text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Upgrade to Pro
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Search Modal */}
      <SearchBar darkMode={darkMode} isOpen={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
};

export default Navbar;