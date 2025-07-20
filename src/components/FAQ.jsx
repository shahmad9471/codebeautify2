import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi2';
import SafeIcon from '../common/SafeIcon';

const { FiChevronDown, FiChevronUp, FiHelpCircle } = FiIcons;
const { HiQuestionMarkCircle } = HiIcons;

const FAQ = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is my code secure when using your formatters?",
      answer: "Absolutely! Your security and privacy are our top priorities. All code formatting happens entirely in your browser - your code never reaches our servers. We don't store, track, or analyze your code in any way, ensuring complete confidentiality of your intellectual property.",
      category: "Security"
    },
    {
      question: "Do I need to create an account to use the formatters?",
      answer: "No, our basic formatting tools are completely free to use without any registration required. Simply visit our website and start formatting your code immediately. For premium features like custom formatting profiles and team sharing, we offer optional account creation.",
      category: "Account"
    },
    {
      question: "What programming languages do you support?",
      answer: "We currently support JSON, JavaScript, CSS, SQL, and XML formatting with language-specific optimizations for each. We're constantly expanding our language support based on user feedback and demand. If there's a specific language you'd like to see added, please let us know!",
      category: "Features"
    },
    {
      question: "Can I integrate your formatters with my IDE or workflow?",
      answer: "Yes! We offer several integration options for professional developers. Our API allows you to incorporate our formatting capabilities into your own tools and workflows. We also provide plugins for popular IDEs like VS Code, IntelliJ, and more. Check our documentation for detailed integration guides.",
      category: "Integration"
    }
  ];

  // Group FAQs by category
  const groupedFaqs = faqs.reduce((acc, faq) => {
    if (!acc[faq.category]) {
      acc[faq.category] = [];
    }
    acc[faq.category].push(faq);
    return acc;
  }, {});

  return (
    <div className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`} id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Frequently Asked Questions
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Find answers to common questions about our code formatting tools
          </p>
        </motion.div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {Object.entries(groupedFaqs).map(([category, categoryFaqs], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
                  <SafeIcon
                    icon={
                      category === 'Security' ? FiIcons.FiLock :
                      category === 'Account' ? FiIcons.FiUser :
                      category === 'Features' ? FiIcons.FiPackage :
                      category === 'Integration' ? FiIcons.FiLink :
                      FiHelpCircle
                    }
                    className={`text-lg ${
                      category === 'Security' ? 'text-green-500' :
                      category === 'Account' ? 'text-blue-500' :
                      category === 'Features' ? 'text-purple-500' :
                      category === 'Integration' ? 'text-orange-500' :
                      'text-gray-500'
                    }`}
                  />
                </div>
                <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {category} Questions
                </h3>
              </div>

              <div className="space-y-3">
                {categoryFaqs.map((faq, index) => {
                  const globalIndex = faqs.findIndex(f => f.question === faq.question);
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className={`${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl shadow-md border overflow-hidden`}
                      whileHover={{ y: -2, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)" }}
                    >
                      <button
                        onClick={() => toggleFaq(globalIndex)}
                        className="w-full text-left px-5 py-4 flex justify-between items-center focus:outline-none"
                        aria-expanded={activeIndex === globalIndex}
                      >
                        <span className={`font-medium text-base ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                          {faq.question}
                        </span>
                        <div className={`ml-4 flex-shrink-0 p-1.5 rounded-full ${darkMode ? activeIndex === globalIndex ? 'bg-gray-700' : 'bg-gray-700/50' : activeIndex === globalIndex ? 'bg-gray-100' : 'bg-gray-50'} transition-colors`}>
                          <SafeIcon
                            icon={activeIndex === globalIndex ? FiChevronUp : FiChevronDown}
                            className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-transform duration-300 ${activeIndex === globalIndex ? 'transform rotate-180' : ''}`}
                          />
                        </div>
                      </button>

                      <AnimatePresence>
                        {activeIndex === globalIndex && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={`px-5 py-4 ${darkMode ? 'bg-gray-800/70 border-t border-gray-700' : 'bg-gray-50 border-t border-gray-100'}`}>
                              <p className={`${darkMode ? 'text-gray-300' : 'text-gray-700'} text-sm leading-relaxed`}>
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className={`text-base ${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-5`}>
            Still have questions? We're here to help!
          </p>
          <a
            href="#contact"
            className={`inline-flex items-center space-x-2 ${darkMode ? 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 shadow-md'} px-6 py-3 rounded-lg font-medium transition-all duration-300`}
            role="button"
          >
            <SafeIcon icon={FiIcons.FiMail} className="text-lg mr-2" />
            <span>Contact Support</span>
            <SafeIcon icon={FiIcons.FiArrowRight} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;