import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import { formatCode } from '../utils/formatters';
import { getSampleCode } from '../utils/samples';
import CodeEditor from '../components/CodeEditor';

const { FiZap, FiShield, FiLayers, FiCheckCircle, FiCode } = FiIcons;
const { SiJson } = SiIcons;

const JsonFormatter = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorPrimary = darkMode ? 'bg-gray-900' : 'bg-white';
  const bgColorSecondary = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <>
      {/* Tool Header */}
      <section className={`pt-28 pb-10 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-yellow-50 via-white to-orange-50'}`}>
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
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-3 rounded-xl">
                  <SafeIcon icon={SiJson} className="text-white text-2xl" />
                </div>
                <h1 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
                  JSON Formatter
                </h1>
              </div>
              
              <p className={`text-xl ${textColorSecondary} mb-6 max-w-2xl`}>
                Format, validate, and beautify your JSON data with our powerful JSON formatter tool. Convert messy JSON into clean, readable, and properly indented code in seconds.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiZap} className="text-yellow-500" />
                  <span className={`text-sm ${textColor}`}>Lightning Fast</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiShield} className="text-green-500" />
                  <span className={`text-sm ${textColor}`}>100% Secure</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiLayers} className="text-blue-500" />
                  <span className={`text-sm ${textColor}`}>Custom Indentation</span>
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
                    'Format JSON with custom indentation',
                    'Validate JSON structure and syntax',
                    'Minify JSON for production use',
                    'Copy, download, or share formatted JSON',
                    'Syntax highlighting for readability',
                    'Process large JSON files efficiently'
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
          <CodeEditor selectedFormatter="json" darkMode={darkMode} />
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
              How Our JSON Formatter Works
            </h2>
            <p className={`${textColorSecondary} max-w-3xl mx-auto`}>
              Our tool uses advanced algorithms to parse, validate, and format JSON data with precision
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
            {[
              { number: '01', title: 'Paste Your JSON', description: 'Copy and paste your JSON data into the input editor or upload a JSON file', icon: FiCode },
              { number: '02', title: 'Select Options', description: 'Choose your formatting preferences like indentation size and style', icon: FiLayers },
              { number: '03', title: 'Get Results', description: 'Instantly receive beautifully formatted and validated JSON ready to use', icon: FiCheckCircle }
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
              Get answers to common questions about our JSON formatter
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is JSON formatting?",
                answer: "JSON formatting is the process of structuring JSON (JavaScript Object Notation) data with proper indentation, spacing, and line breaks to make it more readable and easier to understand. Our JSON formatter tool automatically applies these formatting rules to unformatted or minified JSON data."
              },
              {
                question: "Is my JSON data secure when using this formatter?",
                answer: "Absolutely! Your security and privacy are our top priorities. Our JSON formatter processes all data entirely in your browser - your JSON never reaches our servers. We don't store, track, or analyze your code in any way, ensuring complete confidentiality of your data."
              },
              {
                question: "What's the difference between beautifying and minifying JSON?",
                answer: "Beautifying JSON adds proper indentation, spacing, and line breaks to make the data more readable for humans. Minifying JSON does the opposite - it removes all unnecessary whitespace to make the file size smaller, which is ideal for production environments where file size matters for performance."
              },
              {
                question: "Can I format large JSON files?",
                answer: "Yes, our JSON formatter is optimized to handle large JSON files efficiently. However, browser performance may vary depending on the file size and your device's capabilities. For extremely large files (over 10MB), you might experience some slowdown."
              },
              {
                question: "Does the formatter validate my JSON?",
                answer: "Yes, our tool automatically validates your JSON syntax before formatting. If there are any syntax errors in your JSON, the tool will detect them and provide helpful error messages to help you fix the issues."
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
              About JSON Formatting
            </h2>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className={textColorSecondary}>
                JSON (JavaScript Object Notation) is a lightweight data-interchange format that's easy for humans to read and write and easy for machines to parse and generate. It's based on a subset of JavaScript syntax and is completely language independent, making it an ideal data-interchange language.
              </p>
              <p className={textColorSecondary}>
                Properly formatted JSON is crucial for both development and debugging purposes. While computers can easily process minified JSON, humans need well-formatted, properly indented JSON to read and understand the data structure. Our JSON formatter tool helps bridge this gap by instantly transforming compact, unreadable JSON into a clean, hierarchical format.
              </p>
              <p className={textColorSecondary}>
                Key benefits of using our JSON formatter include:
              </p>
              <ul className={`list-disc pl-5 ${textColorSecondary}`}>
                <li>Improved readability for complex data structures</li>
                <li>Easy identification of syntax errors</li>
                <li>Better understanding of data hierarchies and relationships</li>
                <li>Simplified debugging of JSON-based applications</li>
                <li>Consistent formatting across team projects</li>
              </ul>
              <p className={textColorSecondary}>
                Whether you're working with API responses, configuration files, or data storage, our JSON formatter tool provides a quick and efficient way to make your JSON data more manageable and understandable.
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-10">
              <h3 className={`text-xl font-semibold ${textColor} mb-4`}>Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JSON formatter", "JSON validator", "JSON beautifier", "JSON pretty print", 
                  "Format JSON online", "JSON syntax checker", "JSON structure validator",
                  "JSON editor", "JSON indentation tool", "Minify JSON", "Parse JSON",
                  "JSON viewer", "JSON linter", "JSON data formatter", "JSON file formatter"
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
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Ready to format your JSON?
              </h2>
              <p className="text-yellow-100 max-w-xl">
                Try our free online JSON formatter now and experience the difference.
              </p>
            </div>
            <div>
              <a
                href="#top"
                className="bg-white text-orange-500 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Format JSON Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JsonFormatter;