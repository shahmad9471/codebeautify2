import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import CodeEditor from '../components/CodeEditor';

const { FiZap, FiShield, FiLayers, FiCheckCircle, FiCode } = FiIcons;
const { SiJavascript } = SiIcons;

const JavaScriptFormatter = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorPrimary = darkMode ? 'bg-gray-900' : 'bg-white';
  const bgColorSecondary = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <>
      {/* Tool Header */}
      <section className={`pt-28 pb-10 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-yellow-50 via-white to-yellow-100'}`}>
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
                <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-3 rounded-xl">
                  <SafeIcon icon={SiJavascript} className="text-white text-2xl" />
                </div>
                <h1 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
                  JavaScript Formatter
                </h1>
              </div>
              
              <p className={`text-xl ${textColorSecondary} mb-6 max-w-2xl`}>
                Format, beautify, and optimize your JavaScript code with our professional formatter. Ensure consistent coding style and improve readability in seconds.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiZap} className="text-yellow-500" />
                  <span className={`text-sm ${textColor}`}>Instant Formatting</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiShield} className="text-green-500" />
                  <span className={`text-sm ${textColor}`}>Browser-Only Processing</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiLayers} className="text-blue-500" />
                  <span className={`text-sm ${textColor}`}>Style Options</span>
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
                    'Format JavaScript with custom indentation',
                    'Beautify messy or minified code',
                    'Minify code for production',
                    'Fix common formatting inconsistencies',
                    'Preserve important code comments',
                    'Standardize bracket and spacing styles'
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
          <CodeEditor selectedFormatter="javascript" darkMode={darkMode} />
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
              How Our JavaScript Formatter Works
            </h2>
            <p className={`${textColorSecondary} max-w-3xl mx-auto`}>
              Our tool uses industry-standard formatting rules to ensure your JavaScript code is clean and consistent
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
            {[
              { number: '01', title: 'Paste Your Code', description: 'Copy and paste your JavaScript code or upload a JS file', icon: FiCode },
              { number: '02', title: 'Customize Settings', description: 'Adjust indentation, bracket style, and other formatting options', icon: FiLayers },
              { number: '03', title: 'Get Formatted Code', description: 'Instantly receive clean, properly formatted JavaScript code', icon: FiCheckCircle }
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
                  <div className={`${darkMode ? 'bg-yellow-900' : 'bg-yellow-100'} w-16 h-16 rounded-full flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${darkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{step.number}</span>
                  </div>
                  {index < 2 && (
                    <div className={`hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed ${darkMode ? 'border-gray-700' : 'border-yellow-200'}`}></div>
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
              Get answers to common questions about our JavaScript formatter
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Will formatting my JavaScript code affect its functionality?",
                answer: "No, our JavaScript formatter only changes the code's appearance (indentation, spacing, line breaks) without altering its functionality. The formatter preserves the semantic meaning and behavior of your code while making it more readable."
              },
              {
                question: "What JavaScript formatting standards does this tool follow?",
                answer: "Our JavaScript formatter follows industry-standard formatting conventions based on popular style guides like Airbnb, Google, and Standard JS. You can customize various aspects like indentation style, bracket placement, and spacing to match your preferred coding style."
              },
              {
                question: "Can this tool format ES6+ JavaScript code?",
                answer: "Yes, our JavaScript formatter fully supports modern JavaScript syntax including ES6+ features like arrow functions, template literals, destructuring, classes, modules, and more. It will properly format all valid JavaScript code regardless of which ECMAScript version it uses."
              },
              {
                question: "Does this formatter also validate my JavaScript code?",
                answer: "While our tool primarily focuses on formatting, it does perform basic syntax validation. If there are syntax errors in your code, the formatter will identify them before attempting to format. However, it's not a full linter and won't catch logical errors or best practice violations."
              },
              {
                question: "Can I format minified JavaScript code?",
                answer: "Absolutely! Our JavaScript formatter excels at transforming minified, compressed JavaScript code into a clean, readable format. It's perfect for examining third-party libraries or debugging production code that has been minified."
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
              About JavaScript Formatting
            </h2>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className={textColorSecondary}>
                JavaScript code formatting is the process of structuring your code according to a consistent style, making it more readable and maintainable. While JavaScript is quite flexible in terms of syntax, following consistent formatting conventions is essential for collaborative development and long-term code maintenance.
              </p>
              <p className={textColorSecondary}>
                Well-formatted JavaScript code offers numerous benefits, including improved readability, easier debugging, better collaboration among team members, and reduced likelihood of syntax errors. Consistent formatting also makes code reviews more efficient as reviewers can focus on logic rather than style issues.
              </p>
              <p className={textColorSecondary}>
                Our JavaScript formatter tool helps enforce these best practices by automatically applying consistent formatting rules to your code. It handles various aspects of code style, including:
              </p>
              <ul className={`list-disc pl-5 ${textColorSecondary}`}>
                <li>Proper indentation based on nesting level</li>
                <li>Consistent spacing around operators, keywords, and punctuation</li>
                <li>Standardized placement of braces and parentheses</li>
                <li>Line breaks for improved readability</li>
                <li>Proper alignment of multi-line statements and expressions</li>
              </ul>
              <p className={textColorSecondary}>
                Whether you're cleaning up legacy code, preparing for a code review, or just maintaining a consistent style across your project, our JavaScript formatter provides a quick and reliable solution for all your JavaScript formatting needs.
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-10">
              <h3 className={`text-xl font-semibold ${textColor} mb-4`}>Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "JavaScript formatter", "JS beautifier", "Format JavaScript online", 
                  "JavaScript prettifier", "JavaScript code formatter", "JS code cleaner", 
                  "JavaScript indentation tool", "ES6 formatter", "JavaScript syntax formatter",
                  "JavaScript minifier", "JS code beautify", "JavaScript code style", 
                  "Prettify JavaScript", "JavaScript code standards", "ES6 beautifier"
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
      <section className="py-16 bg-gradient-to-r from-yellow-400 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Ready to beautify your JavaScript?
              </h2>
              <p className="text-yellow-100 max-w-xl">
                Try our free online JavaScript formatter now and see the difference.
              </p>
            </div>
            <div>
              <a
                href="#top"
                className="bg-white text-yellow-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Format JavaScript Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JavaScriptFormatter;