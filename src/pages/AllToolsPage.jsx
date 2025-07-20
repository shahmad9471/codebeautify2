import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';
import SearchBar from '../components/SearchBar';
import { toolsData, categories, getToolsByCategory, searchTools } from '../data/tools';
import { Link } from 'react-router-dom';
import * as SiIcons from 'react-icons/si';

const { FiFilter, FiGrid, FiList, FiTrendingUp, FiStar, FiSearch, FiChevronDown } = FiIcons;

const AllToolsPage = ({ darkMode }) => {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filteredTools, setFilteredTools] = useState(toolsData);
  const [expandedCategories, setExpandedCategories] = useState({});

  // Initialize expanded categories
  useEffect(() => {
    const initialExpanded = {};
    categories.slice(1).forEach(cat => {
      initialExpanded[cat] = true;
    });
    setExpandedCategories(initialExpanded);
  }, []);

  useEffect(() => {
    let tools = searchQuery 
      ? searchTools(searchQuery) 
      : getToolsByCategory(selectedCategory);

    // Sort tools
    switch (sortBy) {
      case 'name':
        tools = tools.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'category':
        tools = tools.sort((a, b) => a.category.localeCompare(b.category));
        break;
      case 'popular':
        tools = tools.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
        break;
      default:
        break;
    }

    setFilteredTools(tools);
  }, [selectedCategory, sortBy, searchQuery]);

  const getIconComponent = (iconName) => {
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName];
    }
    return FiIcons[iconName];
  };
  
  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorPrimary = darkMode ? 'bg-gray-900' : 'bg-white';
  const bgColorSecondary = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Hero Section */}
      <section className={`pt-28 pb-8 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={`text-5xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-6`}>
              All Developer Tools
            </h1>
            <p className={`text-xl ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
              Explore our complete collection of 50+ professional tools for formatting, converting, and optimizing your code
            </p>

            {/* Search Button */}
            <motion.button
              onClick={() => setShowSearch(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>🔍</span>
              <span>Search Tools</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Filters and Controls */}
      <section className={`py-8 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white shadow-md'
                      : darkMode
                        ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort and View Controls */}
            <div className="flex items-center space-x-4">
              {/* Sort Dropdown */}
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiFilter} className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-3 py-2 rounded-lg text-sm border ${
                    darkMode
                      ? 'bg-gray-700 border-gray-600 text-gray-300'
                      : 'bg-white border-gray-300 text-gray-700'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="name">Sort by Name</option>
                  <option value="category">Sort by Category</option>
                  <option value="popular">Sort by Popular</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  <SafeIcon icon={FiGrid} className="text-sm" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors ${
                    viewMode === 'list'
                      ? 'bg-white dark:bg-gray-600 text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
                  }`}
                >
                  <SafeIcon icon={FiList} className="text-sm" />
                </button>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showing {filteredTools.length} tools
              {selectedCategory !== 'All Tools' && ` in ${selectedCategory}`}
              {searchQuery && ` matching "${searchQuery}"`}
            </p>
          </div>
        </div>
      </section>

      {/* All Categories and Tools */}
      <section className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory === 'All Tools' ? (
            // Show all categories when "All Tools" is selected
            <>
              {categories.slice(1).map((category, categoryIndex) => {
                const categoryTools = getToolsByCategory(category);
                if (searchQuery && !categoryTools.some(tool => 
                  tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  tool.description.toLowerCase().includes(searchQuery.toLowerCase())
                )) {
                  return null;
                }

                return (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="mb-16 last:mb-0"
                  >
                    <div 
                      className="flex items-center justify-between mb-6 cursor-pointer"
                      onClick={() => toggleCategory(category)}
                    >
                      <h3 className={`text-xl font-bold ${textColor} flex items-center`}>
                        {category}
                        <span className={`ml-2 transform transition-transform ${expandedCategories[category] ? 'rotate-180' : ''}`}>
                          <SafeIcon icon={FiChevronDown} className="text-sm" />
                        </span>
                      </h3>
                    </div>

                    {expandedCategories[category] && (
                      <div className={`grid gap-6 ${
                        viewMode === 'grid' 
                          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                          : 'grid-cols-1'
                      }`}>
                        {categoryTools
                          .filter(tool => 
                            !searchQuery || 
                            tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            tool.description.toLowerCase().includes(searchQuery.toLowerCase())
                          )
                          .map((tool, index) => (
                            <ToolCard
                              key={tool.id}
                              tool={tool}
                              darkMode={darkMode}
                              viewMode={viewMode}
                              delay={index * 0.05}
                            />
                          ))
                        }
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </>
          ) : (
            // Show only the selected category
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
                : 'grid-cols-1'
            }`}>
              {filteredTools.map((tool, index) => (
                <ToolCard
                  key={tool.id}
                  tool={tool}
                  darkMode={darkMode}
                  viewMode={viewMode}
                  delay={index * 0.05}
                />
              ))}
            </div>
          )}

          {filteredTools.length === 0 && (
            <div className="text-center py-12">
              <div className={`text-4xl mb-4 ${darkMode ? 'text-gray-600' : 'text-gray-400'}`}>
                🔍
              </div>
              <h3 className={`text-xl font-semibold ${darkMode ? 'text-gray-300' : 'text-gray-700'} mb-2`}>
                No tools found
              </h3>
              <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Search Modal */}
      <SearchBar
        darkMode={darkMode}
        isOpen={showSearch}
        onClose={() => setShowSearch(false)}
      />
    </div>
  );
};

// ToolCard component for consistent styling
const ToolCard = ({ tool, darkMode, viewMode, delay }) => {
  const getIconComponent = (iconName) => {
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName];
    }
    return FiIcons[iconName];
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';

  if (viewMode === 'list') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay }}
        viewport={{ once: true }}
        className={`group ${
          darkMode ? 'bg-gray-800' : 'bg-white'
        } rounded-xl border ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        } shadow-sm hover:shadow-md transition-all duration-300`}
      >
        <Link
          to={tool.route !== '#' ? tool.route : '#'}
          className={`flex items-center p-6 ${tool.route === '#' ? 'cursor-not-allowed opacity-75' : ''}`}
          onClick={(e) => {
            if (tool.route === '#') {
              e.preventDefault();
            }
          }}
        >
          <div className="relative mr-4">
            <div className={`bg-gradient-to-r ${tool.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-md`}>
              <SafeIcon 
                icon={getIconComponent(tool.icon)} 
                className="text-white text-xl" 
              />
            </div>
            {tool.popular && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiStar} className="text-white text-xs" />
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <h3 className={`font-bold ${textColor} text-lg group-hover:text-blue-600 transition-colors`}>
              {tool.name}
            </h3>
            <p className={`${textColorSecondary} text-sm mt-1`}>
              {tool.description}
            </p>
            <div className="flex flex-wrap gap-1 mt-2">
              {tool.tags.slice(0, 4).map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-full ${
                    darkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-50 text-gray-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="ml-4 text-right">
            <span className={`text-xs px-2 py-1 rounded-full ${
              darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
            }`}>
              {tool.category}
            </span>
            {tool.route === '#' && (
              <div className="mt-1">
                <span className="text-xs text-orange-500 font-medium">Coming Soon</span>
              </div>
            )}
          </div>
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`group ${
        darkMode ? 'bg-gray-800' : 'bg-white'
      } rounded-xl border ${
        darkMode ? 'border-gray-700' : 'border-gray-200'
      } shadow-sm hover:shadow-md transition-all duration-300`}
    >
      <Link
        to={tool.route !== '#' ? tool.route : '#'}
        className={`block h-full p-6 ${tool.route === '#' ? 'cursor-not-allowed opacity-75' : ''}`}
        onClick={(e) => {
          if (tool.route === '#') {
            e.preventDefault();
          }
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start mb-4">
            <div className="relative mr-4">
              <div className={`bg-gradient-to-r ${tool.color} w-12 h-12 rounded-lg flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300`}>
                <SafeIcon 
                  icon={getIconComponent(tool.icon)} 
                  className="text-white text-xl" 
                />
              </div>
              {tool.popular && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                  <SafeIcon icon={FiStar} className="text-white text-xs" />
                </div>
              )}
            </div>
            <div className="flex-1">
              <h3 className={`font-bold ${textColor} text-lg group-hover:text-blue-600 transition-colors`}>
                {tool.name}
              </h3>
              <p className={`${textColorSecondary} text-sm line-clamp-2 mt-1`}>
                {tool.description}
              </p>
            </div>
          </div>
          
          <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-1">
              {tool.tags.slice(0, 3).map((tag, i) => (
                <span
                  key={i}
                  className={`text-xs px-2 py-1 rounded-full ${
                    darkMode ? 'bg-gray-700/50 text-gray-400' : 'bg-gray-50 text-gray-500'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {tool.route === '#' && (
              <div className="mt-2">
                <span className="text-xs text-orange-500 font-medium">Coming Soon</span>
              </div>
            )}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AllToolsPage;