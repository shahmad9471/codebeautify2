import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import { toolsData, categories, getToolsByCategory, searchTools } from '../data/tools';

const { FiFilter, FiGrid, FiList, FiTrendingUp, FiStar } = FiIcons;

const ToolsGrid = ({ darkMode, searchQuery = '' }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Tools');
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('name');
  const [filteredTools, setFilteredTools] = useState(toolsData);
  const [expandedCategories, setExpandedCategories] = useState({});

  useEffect(() => {
    // Initialize all categories as expanded
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
    <div className={`py-16 ${bgColorPrimary}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl font-bold ${textColor} mb-4`}>
            Developer Tools Collection
          </h2>
          <p className={`text-lg ${textColorSecondary} max-w-3xl mx-auto`}>
            Browse our complete collection of professional development tools
          </p>
        </motion.div>

        {/* Category Sections */}
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
                    <SafeIcon icon={FiIcons.FiChevronDown} className="text-sm" />
                  </span>
                </h3>
                <Link
                  to={`/category/${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`text-sm font-medium ${
                    darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'
                  }`}
                  onClick={(e) => e.stopPropagation()}
                >
                  View All
                </Link>
              </div>

              {expandedCategories[category] && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
                        delay={index * 0.05}
                      />
                    ))
                  }
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// ToolCard component for consistent styling
const ToolCard = ({ tool, darkMode, delay }) => {
  const getIconComponent = (iconName) => {
    if (iconName.startsWith('Si')) {
      return SiIcons[iconName];
    }
    return FiIcons[iconName];
  };

  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';

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

export default ToolsGrid;