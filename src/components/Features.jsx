import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi2';
import SafeIcon from '../common/SafeIcon';

const {
  FiZap, FiShield, FiGlobe, FiCode, FiDownload, FiShare2, FiClock,
  FiTerminal, FiServer, FiLayers, FiSettings, FiCheckCircle, FiSave,
  FiPackage, FiKey, FiCloud, FiUsers, FiGitBranch, FiLock, FiRefreshCw,
  FiUpload, FiMonitor, FiEdit3, FiSliders, FiArrowRight, FiCopy, FiPlay,
  FiTrendingUp, FiAward, FiTarget
} = FiIcons;

const { HiCommandLine, HiSparkles, HiBolt } = HiIcons;

const Features = ({ darkMode }) => {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  const features = [
    {
      icon: FiZap,
      title: 'Lightning Fast',
      subtitle: 'Process code instantly',
      description: 'Advanced algorithms format your code in milliseconds, handling files of any size with enterprise-grade performance.',
      color: 'from-blue-500 to-cyan-400',
      demo: '< 100ms processing time'
    },
    {
      icon: FiShield,
      title: 'Privacy First',
      subtitle: 'Your code stays secure',
      description: 'All processing happens in your browser. Zero server uploads, complete privacy protection, and GDPR compliance.',
      color: 'from-emerald-500 to-teal-400',
      demo: '100% client-side processing'
    },
    {
      icon: FiGlobe,
      title: 'Multi-Language',
      subtitle: 'Support for 15+ languages',
      description: 'Format JSON, JavaScript, CSS, SQL, XML, Python, and more with intelligent language-specific optimizations.',
      color: 'from-purple-500 to-pink-400',
      demo: 'JSON, JS, CSS, SQL, XML+'
    },
    {
      icon: FiCode,
      title: 'Smart Formatting',
      subtitle: 'AI-powered beautification',
      description: 'Intelligent code analysis with syntax highlighting, error detection, and best practice recommendations.',
      color: 'from-orange-500 to-red-400',
      demo: 'Smart indentation & styling'
    },
    {
      icon: FiUsers,
      title: 'Team Ready',
      subtitle: 'Built for collaboration',
      description: 'Share formatted code instantly, sync team preferences, and maintain consistent coding standards across projects.',
      color: 'from-indigo-500 to-purple-400',
      demo: 'Real-time collaboration'
    },
    {
      icon: FiTrendingUp,
      title: 'Enterprise Scale',
      subtitle: 'Production ready',
      description: 'Handle massive files, integrate with CI/CD pipelines, and scale to enterprise requirements with 99.9% uptime.',
      color: 'from-green-500 to-emerald-400',
      demo: 'Enterprise infrastructure'
    }
  ];

  const steps = [
    {
      id: 'upload',
      title: 'Input Your Code',
      description: 'Paste code, upload files, or drag & drop directly into our editor',
      icon: FiUpload,
      color: 'from-blue-500 to-cyan-500',
      details: [
        'Paste from clipboard',
        'Upload multiple files',
        'Drag & drop support',
        'URL import capability'
      ]
    },
    {
      id: 'customize',
      title: 'Customize Settings',
      description: 'Choose from preset styles or create custom formatting rules',
      icon: FiSliders,
      color: 'from-purple-500 to-pink-500',
      details: [
        'Industry standard presets',
        'Custom indentation rules',
        'Line length preferences',
        'Comment preservation'
      ]
    },
    {
      id: 'format',
      title: 'Format & Export',
      description: 'Get beautifully formatted code ready for production use',
      icon: FiCheckCircle,
      color: 'from-green-500 to-emerald-500',
      details: [
        'Instant formatting',
        'Multiple export formats',
        'Direct sharing links',
        'Version history tracking'
      ]
    }
  ];

  return (
    <div className={`py-20 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Interactive Features Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Powerful Features for Modern Development
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Everything you need to maintain clean, consistent, and professional code
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                onHoverStart={() => setActiveFeature(index)}
                className={`group relative ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden`}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <SafeIcon icon={feature.icon} className="text-white text-2xl" />
                </div>

                {/* Content */}
                <div className="relative">
                  <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2 group-hover:text-blue-600 transition-colors`}>
                    {feature.title}
                  </h4>
                  <p className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'} mb-3`}>
                    {feature.subtitle}
                  </p>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4 leading-relaxed`}>
                    {feature.description}
                  </p>
                  <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} text-sm font-medium`}>
                    <SafeIcon icon={FiTarget} className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-600'}`} />
                    <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature.demo}</span>
                  </div>
                </div>

                {/* Hover effect arrow */}
                <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <SafeIcon icon={FiArrowRight} className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* How It Works - Modern Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-16">
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              How It Works
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-2xl mx-auto`}>
              Transform messy code into beautiful, readable format in three simple steps
            </p>
          </div>

          {/* Desktop Timeline */}
          <div className="hidden lg:block relative">
            {/* Progress Line */}
            <div className="absolute top-20 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700 rounded-full">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-3 gap-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  onViewportEnter={() => setActiveStep(index)}
                  className="text-center"
                >
                  {/* Step Circle */}
                  <div className={`relative mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                    activeStep >= index 
                      ? `bg-gradient-to-r ${step.color} shadow-lg scale-110` 
                      : `${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`
                  }`}>
                    <SafeIcon 
                      icon={step.icon} 
                      className={`text-xl transition-colors ${
                        activeStep >= index ? 'text-white' : darkMode ? 'text-gray-400' : 'text-gray-500'
                      }`} 
                    />
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      activeStep >= index 
                        ? 'bg-white text-blue-600 scale-100' 
                        : 'scale-0'
                    }`}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl p-8 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-all duration-500 ${
                    activeStep === index ? 'scale-105 shadow-2xl' : ''
                  }`}>
                    <h4 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-3`}>
                      {step.title}
                    </h4>
                    <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center space-x-2">
                          <SafeIcon icon={FiCheckCircle} className={`text-sm ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                          <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4"
              >
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center bg-gradient-to-r ${step.color}`}>
                  <SafeIcon icon={step.icon} className="text-white text-lg" />
                </div>
                <div className={`flex-1 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-2`}>
                    {step.title}
                  </h4>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    {step.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {step.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-center space-x-2">
                        <SafeIcon icon={FiCheckCircle} className={`text-xs ${darkMode ? 'text-green-400' : 'text-green-500'}`} />
                        <span className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`relative rounded-3xl p-12 text-center overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-2xl border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-600/5 to-pink-600/5"></div>
          
          <div className="relative">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full px-6 py-2 mb-6">
              <SafeIcon icon={FiPlay} className="text-blue-500" />
              <span className={`text-sm font-medium ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                Ready to get started?
              </span>
            </div>
            
            <h3 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
              Start formatting your code today
            </h3>
            <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 max-w-2xl mx-auto`}>
              Join millions of developers who trust our platform for clean, professional code formatting
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="#formatters"
                className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <SafeIcon icon={HiCommandLine} className="mr-2 text-xl" />
                Try Our Formatters
                <SafeIcon icon={FiArrowRight} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href="#features"
                className={`inline-flex items-center ${darkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'} px-6 py-4 rounded-xl font-medium border ${darkMode ? 'border-gray-600 hover:border-gray-500' : 'border-gray-300 hover:border-gray-400'} transition-all duration-300`}
              >
                <SafeIcon icon={FiPlay} className="mr-2" />
                Watch Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;