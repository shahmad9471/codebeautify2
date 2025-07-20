import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import CodeEditor from '../components/CodeEditor';

const { FiZap, FiShield, FiLayers, FiCheckCircle, FiCode } = FiIcons;
const { SiCss3 } = SiIcons;

const CssFormatter = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorPrimary = darkMode ? 'bg-gray-900' : 'bg-white';
  const bgColorSecondary = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <>
      {/* Tool Header */}
      <section className={`pt-28 pb-10 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-blue-50 via-white to-blue-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center">
            {/* Tool Info */}
            <motion.div 
              className="md:w-2/3 mb-10 md:mb-0 md:pr-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-3 rounded-xl">
                  <SafeIcon icon={SiCss3} className="text-white text-2xl" />
                </div>
                <h1 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
                  CSS Formatter
                </h1>
              </div>
              
              <p className={`text-xl ${textColorSecondary} mb-6 max-w-2xl`}>
                Format, beautify, and optimize your CSS stylesheets with our professional CSS formatter. Clean up messy CSS and improve code organization in seconds.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiZap} className="text-blue-500" />
                  <span className={`text-sm ${textColor}`}>Fast Processing</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiShield} className="text-green-500" />
                  <span className={`text-sm ${textColor}`}>Private & Secure</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiLayers} className="text-purple-500" />
                  <span className={`text-sm ${textColor}`}>Custom Options</span>
                </div>
              </div>
            </motion.div>

            {/* Tool Features */}
            <motion.div 
              className="md:w-1/3"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-xl p-6 shadow-md border ${borderColor}`}>
                <h3 className={`text-lg font-semibold ${textColor} mb-4`}>Key Features</h3>
                <ul className="space-y-3">
                  {[
                    'Format CSS with proper indentation',
                    'Organize properties consistently',
                    'Minify CSS for production use',
                    'Format nested CSS structures properly',
                    'Fix common CSS formatting issues',
                    'Apply consistent spacing and line breaks'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <SafeIcon icon={FiCheckCircle} className="text-green-500 mt-1 flex-shrink-0" />
                      <span className={darkMode ? 'text-gray-300' : 'text-gray-700'}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Code Editor */}
      <section className={`py-10 ${bgColorPrimary}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CodeEditor selectedFormatter="css" darkMode={darkMode} />
        </div>
      </section>

      {/* How It Works */}
      <section className={`py-16 ${bgColorSecondary}`} id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold ${textColor} mb-4`}>
              How Our CSS Formatter Works
            </h2>
            <p className={`${textColorSecondary} max-w-3xl mx-auto`}>
              Our tool uses intelligent algorithms to organize and beautify your CSS code
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
            {[
              { number: '01', title: 'Paste Your CSS', description: 'Copy and paste your CSS code or upload a stylesheet', icon: FiCode },
              { number: '02', title: 'Select Options', description: 'Choose your preferred indentation style and formatting rules', icon: FiLayers },
              { number: '03', title: 'Get Formatted CSS', description: 'Instantly receive clean, properly formatted CSS code', icon: FiCheckCircle }
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center max-w-xs"
              >
                <div className="relative mb-6">
                  <div className={`${darkMode ? 'bg-blue-900' : 'bg-blue-100'} w-16 h-16 rounded-full flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>{step.number}</span>
                  </div>
                  {index < 2 && (
                    <div className={`hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed ${darkMode ? 'border-gray-700' : 'border-blue-200'}`}></div>
                  )}
                </div>
                <h4 className={`text-xl font-semibold ${textColor} mb-2`}>{step.title}</h4>
                <p className={textColorSecondary}>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`py-16 ${bgColorPrimary}`} id="faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className={`text-3xl font-bold ${textColor} mb-4`}>
              Frequently Asked Questions
            </h2>
            <p className={`${textColorSecondary}`}>
              Get answers to common questions about our CSS formatter
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Does the CSS formatter support all CSS versions?",
                answer: "Yes, our CSS formatter supports all CSS versions including CSS3 and modern features. It can handle both standard CSS as well as preprocessor syntax like SCSS or Less, though some specialized preprocessor features may be formatted as standard CSS."
              },
              {
                question: "Will formatting my CSS break my stylesheets?",
                answer: "No, our CSS formatter preserves the functionality of your CSS while improving its structure. It only changes whitespace, indentation, and organization without altering the actual CSS rules or their effects on your website."
              },
              {
                question: "Can I format minified CSS with this tool?",
                answer: "Absolutely! Our CSS formatter is perfect for expanding and beautifying minified CSS files. It will transform compressed, hard-to-read CSS into a clean, well-organized stylesheet with proper indentation and spacing."
              },
              {
                question: "Does the formatter check for CSS errors?",
                answer: "While our tool primarily focuses on formatting, it does perform basic syntax validation. It can identify obvious syntax errors like missing brackets or invalid property declarations, but it's not a full CSS linter and won't catch all potential issues."
              },
              {
                question: "Can I customize how my CSS is formatted?",
                answer: "Yes, our CSS formatter offers several customization options. You can adjust indentation size, choose between spaces or tabs, set line break rules, and determine how properties should be ordered. These options allow you to format CSS according to your preferred style guide."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-sm border ${borderColor} overflow-hidden`}
              >
                <div className="px-6 py-4">
                  <h3 className={`font-medium text-lg ${textColor}`}>{item.question}</h3>
                  <p className={`mt-2 ${textColorSecondary}`}>{item.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className={`py-16 ${bgColorSecondary}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className={`text-3xl font-bold ${textColor} mb-6`}>
              About CSS Formatting
            </h2>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className={textColorSecondary}>
                CSS (Cascading Style Sheets) formatting is the process of organizing and structuring CSS code to improve readability and maintainability. While browsers can interpret CSS regardless of formatting, well-formatted CSS is crucial for developers who need to read, understand, and modify the code.
              </p>
              <p className={textColorSecondary}>
                Properly formatted CSS offers numerous benefits, including easier debugging, more efficient collaboration among team members, and reduced likelihood of errors. As stylesheets grow larger and more complex, especially in modern web applications, maintaining clean and organized CSS becomes increasingly important.
              </p>
              <p className={textColorSecondary}>
                Our CSS formatter tool helps enforce best practices by automatically applying consistent formatting rules to your stylesheets. It handles various aspects of CSS organization, including:
              </p>
              <ul className={`list-disc pl-5 ${textColorSecondary}`}>
                <li>Consistent indentation of nested rules and media queries</li>
                <li>Proper spacing around selectors, properties, and values</li>
                <li>Logical grouping of related properties</li>
                <li>Standardized line breaks between rules and declarations</li>
                <li>Clean formatting of complex selectors and at-rules</li>
              </ul>
              <p className={textColorSecondary}>
                Whether you're cleaning up legacy CSS, preparing for a code review, or implementing a new style guide, our CSS formatter provides a quick and reliable solution for all your CSS formatting needs.
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-10">
              <h3 className={`text-xl font-semibold ${textColor} mb-4`}>Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "CSS formatter", "CSS beautifier", "Format CSS online", 
                  "CSS prettifier", "CSS code formatter", "CSS cleaner", 
                  "CSS indentation tool", "CSS3 formatter", "CSS syntax formatter",
                  "CSS minifier", "CSS code beautify", "CSS code style", 
                  "Prettify CSS", "CSS code standards", "CSS organizer"
                ].map((keyword, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode 
                        ? 'bg-gray-700 text-gray-300' 
                        : 'bg-gray-200 text-gray-700'
                    }`}
                  >
                    {keyword}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-400 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Ready to beautify your CSS?
              </h2>
              <p className="text-blue-100 max-w-xl">
                Try our free online CSS formatter now and see the difference.
              </p>
            </div>
            <div>
              <a
                href="#top"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Format CSS Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CssFormatter;