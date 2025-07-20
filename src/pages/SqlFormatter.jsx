import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import CodeEditor from '../components/CodeEditor';

const { FiZap, FiShield, FiLayers, FiCheckCircle, FiCode } = FiIcons;
const { SiMysql } = SiIcons;

const SqlFormatter = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorPrimary = darkMode ? 'bg-gray-900' : 'bg-white';
  const bgColorSecondary = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <>
      {/* Tool Header */}
      <section className={`pt-28 pb-10 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-orange-50 via-white to-orange-100'}`}>
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
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 p-3 rounded-xl">
                  <SafeIcon icon={SiMysql} className="text-white text-2xl" />
                </div>
                <h1 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
                  SQL Formatter
                </h1>
              </div>
              
              <p className={`text-xl ${textColorSecondary} mb-6 max-w-2xl`}>
                Format complex SQL queries with our professional SQL formatter. Improve readability and maintainability of your database queries in seconds.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiZap} className="text-orange-500" />
                  <span className={`text-sm ${textColor}`}>Quick Formatting</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiShield} className="text-green-500" />
                  <span className={`text-sm ${textColor}`}>Secure Processing</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiLayers} className="text-blue-500" />
                  <span className={`text-sm ${textColor}`}>Multiple SQL Dialects</span>
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
                    'Format complex SQL queries with proper indentation',
                    'Support for multiple SQL dialects',
                    'Uppercase/lowercase keyword formatting',
                    'Proper alignment of SELECT clauses',
                    'Clean formatting of JOIN statements',
                    'Consistent spacing and line breaks'
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
          <CodeEditor selectedFormatter="sql" darkMode={darkMode} />
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
              How Our SQL Formatter Works
            </h2>
            <p className={`${textColorSecondary} max-w-3xl mx-auto`}>
              Our tool uses specialized SQL parsing algorithms to structure and beautify your queries
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
            {[
              { number: '01', title: 'Paste Your SQL', description: 'Copy and paste your SQL query or upload an SQL file', icon: FiCode },
              { number: '02', title: 'Choose Options', description: 'Select SQL dialect and formatting preferences', icon: FiLayers },
              { number: '03', title: 'Get Formatted SQL', description: 'Instantly receive clean, properly formatted SQL query', icon: FiCheckCircle }
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
                  <div className={`${darkMode ? 'bg-orange-900' : 'bg-orange-100'} w-16 h-16 rounded-full flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${darkMode ? 'text-orange-400' : 'text-orange-600'}`}>{step.number}</span>
                  </div>
                  {index < 2 && (
                    <div className={`hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed ${darkMode ? 'border-gray-700' : 'border-orange-200'}`}></div>
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
              Get answers to common questions about our SQL formatter
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "Which SQL dialects does your formatter support?",
                answer: "Our SQL formatter supports all major SQL dialects including MySQL, PostgreSQL, Microsoft SQL Server (T-SQL), Oracle SQL (PL/SQL), SQLite, and standard SQL. The formatter intelligently adapts to dialect-specific syntax while maintaining consistent formatting principles."
              },
              {
                question: "Will formatting my SQL queries change their functionality?",
                answer: "No, our SQL formatter only changes the visual presentation of your queries without altering their functionality. The formatter preserves all keywords, identifiers, operators, and values while reorganizing whitespace, line breaks, and indentation for improved readability."
              },
              {
                question: "Can this tool handle complex SQL queries with nested subqueries?",
                answer: "Yes, our SQL formatter excels at handling complex SQL structures including nested subqueries, multiple joins, complex WHERE clauses, and sophisticated aggregations. It applies appropriate indentation to clearly show the hierarchical structure of your queries."
              },
              {
                question: "Does the SQL formatter validate my queries?",
                answer: "While our tool primarily focuses on formatting, it does perform basic syntax validation. It can identify obvious syntax errors like mismatched parentheses or incorrect keyword usage. However, it doesn't check for semantic correctness or database-specific compatibility."
              },
              {
                question: "Can I customize how my SQL queries are formatted?",
                answer: "Yes, our SQL formatter offers several customization options. You can choose to uppercase or lowercase keywords, adjust indentation size, determine how clauses are aligned, and set preferences for comma placement. These options allow you to format SQL according to your team's style guide."
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
              About SQL Formatting
            </h2>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className={textColorSecondary}>
                SQL (Structured Query Language) formatting is the process of organizing SQL queries with proper indentation, line breaks, and spacing to improve readability and maintainability. While databases will execute SQL queries regardless of formatting, well-formatted SQL is essential for developers who need to read, understand, and modify the code.
              </p>
              <p className={textColorSecondary}>
                Well-formatted SQL offers numerous benefits, especially for complex queries. It helps in understanding the query logic, makes debugging easier, facilitates collaboration among team members, and makes code reviews more efficient. As database operations become more complex, maintaining clean and organized SQL becomes increasingly important.
              </p>
              <p className={textColorSecondary}>
                Our SQL formatter tool helps enforce best practices by automatically applying consistent formatting rules to your queries. It handles various aspects of SQL organization, including:
              </p>
              <ul className={`list-disc pl-5 ${textColorSecondary}`}>
                <li>Proper indentation of clauses (SELECT, FROM, WHERE, etc.)</li>
                <li>Consistent capitalization of SQL keywords</li>
                <li>Logical alignment of columns and expressions</li>
                <li>Clear formatting of JOIN conditions and table relationships</li>
                <li>Organized presentation of complex WHERE clauses and subqueries</li>
              </ul>
              <p className={textColorSecondary}>
                Whether you're optimizing database queries, preparing for a code review, or documenting your database operations, our SQL formatter provides a quick and reliable solution for all your SQL formatting needs.
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-10">
              <h3 className={`text-xl font-semibold ${textColor} mb-4`}>Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "SQL formatter", "SQL beautifier", "Format SQL online", 
                  "SQL prettifier", "SQL query formatter", "SQL code cleaner", 
                  "SQL indentation tool", "MySQL formatter", "PostgreSQL formatter",
                  "SQL Server formatter", "Oracle SQL formatter", "SQL code beautify", 
                  "SQL query beautifier", "SQL code standards", "SQL pretty print"
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
      <section className="py-16 bg-gradient-to-r from-orange-400 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Ready to format your SQL queries?
              </h2>
              <p className="text-orange-100 max-w-xl">
                Try our free online SQL formatter now and see the difference.
              </p>
            </div>
            <div>
              <a
                href="#top"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Format SQL Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SqlFormatter;