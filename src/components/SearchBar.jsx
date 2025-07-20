import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import { searchTools, categories, popularTools } from '../data/tools';

const { FiSearch, FiX, FiTrendingUp, FiClock, FiArrowRight } = FiIcons;

const SearchBar = ({ darkMode, isOpen, onClose, className = '' }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [recentSearches, setRecentSearches] = useState([]);
  const [showCategories, setShowCategories] = useState(true);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  useEffect(() => {
    if (query.trim()) {
      const searchResults = searchTools(query);
      setResults(searchResults.slice(0, 8));
      setShowCategories(false);
    } else {
      setResults([]);
      setShowCategories(true);
    }
    setSelectedIndex(-1);
  }, [query]);

  const handleSearch = (searchTerm) => {
    if (searchTerm.trim()) {
      const newRecentSearches = [searchTerm, ...recentSearches.filter(s => s !== searchTerm)].slice(0, 5);
      setRecentSearches(newRecentSearches);
      localStorage.setItem('recentSearches', JSON.stringify(newRecentSearches));
    }
  };

  const handleToolSelect = (tool) => {
    handleSearch(tool.name);
    onClose();
    if (tool.route && tool.route !== '#') {
      navigate(tool.route);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex(prev => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        handleToolSelect(results[selectedIndex]);
      }
    }
  };

  const getIconComponent = (iconName) => {
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName];
    }
    return FiIcons[iconName];
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          transition={{ duration: 0.2 }}
          className={`w-full max-w-2xl mx-4 ${darkMode ? 'bg-gray-900' : 'bg-white'} rounded-2xl shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'} overflow-hidden ${className}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Search Input */}
          <div className="relative">
            <div className="flex items-center px-4 py-4 border-b border-gray-200 dark:border-gray-700">
              <SafeIcon icon={FiSearch} className={`text-xl ${darkMode ? 'text-gray-400' : 'text-gray-500'} mr-3`} />
              <input
                ref={searchInputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Search tools, formatters, converters..."
                className={`flex-1 text-lg bg-transparent outline-none ${darkMode ? 'text-white placeholder-gray-400' : 'text-gray-900 placeholder-gray-500'}`}
              />
              {query && (
                <button
                  onClick={() => setQuery('')}
                  className={`ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'}`}
                >
                  <SafeIcon icon={FiX} className="text-sm" />
                </button>
              )}
              <button
                onClick={onClose}
                className={`ml-2 p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'}`}
              >
                <SafeIcon icon={FiX} className="text-lg" />
              </button>
            </div>
          </div>

          {/* Search Results */}
          <div className="max-h-96 overflow-y-auto">
            {query && results.length > 0 && (
              <div className="p-2">
                <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} px-3 py-2 uppercase tracking-wide`}>
                  Search Results ({results.length})
                </div>
                {results.map((tool, index) => (
                  <motion.button
                    key={tool.id}
                    onClick={() => handleToolSelect(tool)}
                    className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 ${
                      selectedIndex === index
                        ? darkMode
                          ? 'bg-gray-800 text-white'
                          : 'bg-gray-100 text-gray-900'
                        : darkMode
                        ? 'hover:bg-gray-800 text-gray-300'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className={`bg-gradient-to-r ${tool.color} w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-sm`}>
                      <SafeIcon icon={getIconComponent(tool.icon)} className="text-white text-lg" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="font-medium text-sm">{tool.name}</div>
                      <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} line-clamp-1`}>
                        {tool.description}
                      </div>
                    </div>
                    <div className={`text-xs px-2 py-1 rounded-full ${darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'}`}>
                      {tool.category}
                    </div>
                  </motion.button>
                ))}
              </div>
            )}

            {query && results.length === 0 && (
              <div className="p-6 text-center">
                <div className={`text-4xl mb-3 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>🔍</div>
                <div className={`text-lg font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-1`}>
                  No tools found
                </div>
                <div className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  Try searching for "formatter", "converter", or "generator"
                </div>
              </div>
            )}

            {/* Default State - Categories and Popular Tools */}
            {!query && showCategories && (
              <div className="p-2">
                {/* Recent Searches */}
                {recentSearches.length > 0 && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between px-3 py-2">
                      <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} uppercase tracking-wide flex items-center`}>
                        <SafeIcon icon={FiClock} className="mr-1" />
                        Recent Searches
                      </div>
                      <button
                        onClick={clearRecentSearches}
                        className={`text-xs ${darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-500 hover:text-gray-600'} transition-colors`}
                      >
                        Clear
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-2 px-3">
                      {recentSearches.map((search, index) => (
                        <button
                          key={index}
                          onClick={() => setQuery(search)}
                          className={`px-3 py-1 rounded-full text-xs transition-colors ${
                            darkMode
                              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {search}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Popular Tools */}
                <div className="mb-4">
                  <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} px-3 py-2 uppercase tracking-wide flex items-center`}>
                    <SafeIcon icon={FiTrendingUp} className="mr-1" />
                    Popular Tools
                  </div>
                  {popularTools.slice(0, 4).map((tool) => (
                    <motion.button
                      key={tool.id}
                      onClick={() => handleToolSelect(tool)}
                      className={`w-full flex items-center px-3 py-3 rounded-lg transition-all duration-200 ${
                        darkMode
                          ? 'hover:bg-gray-800 text-gray-300'
                          : 'hover:bg-gray-50 text-gray-700'
                      }`}
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      <div className={`bg-gradient-to-r ${tool.color} w-10 h-10 rounded-lg flex items-center justify-center mr-3 shadow-sm`}>
                        <SafeIcon icon={getIconComponent(tool.icon)} className="text-white text-lg" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-medium text-sm">{tool.name}</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'} line-clamp-1`}>
                          {tool.description}
                        </div>
                      </div>
                      <SafeIcon icon={FiArrowRight} className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-400'}`} />
                    </motion.button>
                  ))}
                </div>

                {/* Categories */}
                <div>
                  <div className={`text-xs font-medium ${darkMode ? 'text-gray-400' : 'text-gray-500'} px-3 py-2 uppercase tracking-wide`}>
                    Browse by Category
                  </div>
                  <div className="grid grid-cols-2 gap-2 px-3">
                    {categories.slice(1).map((category) => (
                      <button
                        key={category}
                        onClick={() => setQuery(category)}
                        className={`p-3 rounded-lg text-left transition-all duration-200 ${
                          darkMode
                            ? 'bg-gray-800 hover:bg-gray-700 text-gray-300'
                            : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                        }`}
                      >
                        <div className="font-medium text-sm">{category}</div>
                        <div className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                          Browse tools
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className={`px-4 py-3 border-t ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-gray-50'}`}>
            <div className="flex items-center justify-between text-xs">
              <div className={`flex items-center space-x-4 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                <span className="flex items-center">
                  <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">↑↓</kbd>
                  <span className="ml-1">Navigate</span>
                </span>
                <span className="flex items-center">
                  <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Enter</kbd>
                  <span className="ml-1">Select</span>
                </span>
                <span className="flex items-center">
                  <kbd className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded text-xs">Esc</kbd>
                  <span className="ml-1">Close</span>
                </span>
              </div>
              <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                {results.length > 0 ? `${results.length} tools found` : `${popularTools.length} popular tools`}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SearchBar;