import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import SafeIcon from '../common/SafeIcon';
import CodeEditor from '../components/CodeEditor';

const { FiZap, FiShield, FiLayers, FiCheckCircle, FiCode } = FiIcons;
const { SiXml } = SiIcons;

const XmlFormatter = ({ darkMode }) => {
  const textColor = darkMode ? 'text-white' : 'text-gray-900';
  const textColorSecondary = darkMode ? 'text-gray-300' : 'text-gray-600';
  const bgColorPrimary = darkMode ? 'bg-gray-900' : 'bg-white';
  const bgColorSecondary = darkMode ? 'bg-gray-800' : 'bg-gray-50';
  const borderColor = darkMode ? 'border-gray-700' : 'border-gray-200';

  return (
    <>
      {/* Tool Header */}
      <section className={`pt-28 pb-10 ${darkMode ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-green-50 via-white to-green-100'}`}>
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
                <div className="bg-gradient-to-r from-green-400 to-green-600 p-3 rounded-xl">
                  <SafeIcon icon={SiXml} className="text-white text-2xl" />
                </div>
                <h1 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
                  XML Formatter
                </h1>
              </div>
              
              <p className={`text-xl ${textColorSecondary} mb-6 max-w-2xl`}>
                Format and beautify XML documents with our professional XML formatter. Improve readability and structure of your XML files in seconds.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiZap} className="text-green-500" />
                  <span className={`text-sm ${textColor}`}>Fast Processing</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiShield} className="text-green-500" />
                  <span className={`text-sm ${textColor}`}>Secure & Private</span>
                </div>
                <div className={`flex items-center space-x-2 px-4 py-2 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-sm border ${borderColor}`}>
                  <SafeIcon icon={FiLayers} className="text-blue-500" />
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
                    'Format XML with proper indentation',
                    'Validate XML structure and syntax',
                    'Minify XML for production use',
                    'Handle nested XML elements properly',
                    'Preserve XML attributes and namespaces',
                    'Support for various XML schemas'
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
          <CodeEditor selectedFormatter="xml" />
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
              How Our XML Formatter Works
            </h2>
            <p className={`${textColorSecondary} max-w-3xl mx-auto`}>
              Our tool uses advanced XML parsing algorithms to structure and beautify your XML documents
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-4">
            {[
              { number: '01', title: 'Paste Your XML', description: 'Copy and paste your XML document or upload an XML file', icon: FiCode },
              { number: '02', title: 'Select Options', description: 'Choose formatting preferences and indentation style', icon: FiLayers },
              { number: '03', title: 'Get Formatted XML', description: 'Instantly receive clean, properly formatted XML document', icon: FiCheckCircle }
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
                  <div className={`${darkMode ? 'bg-green-900' : 'bg-green-100'} w-16 h-16 rounded-full flex items-center justify-center`}>
                    <span className={`text-2xl font-bold ${darkMode ? 'text-green-400' : 'text-green-600'}`}>{step.number}</span>
                  </div>
                  {index < 2 && (
                    <div className={`hidden md:block absolute top-8 left-full w-full border-t-2 border-dashed ${darkMode ? 'border-gray-700' : 'border-green-200'}`}></div>
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
              Get answers to common questions about our XML formatter
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What types of XML documents can this formatter handle?",
                answer: "Our XML formatter can handle all types of XML documents including configuration files, data feeds, SOAP messages, RSS feeds, and custom XML schemas. It supports XML 1.0 and 1.1 specifications and handles various encoding formats."
              },
              {
                question: "Will formatting my XML change its functionality?",
                answer: "No, our XML formatter only changes the visual presentation of your XML document without altering its content or structure. It preserves all elements, attributes, namespaces, and data while improving readability through proper indentation and spacing."
              },
              {
                question: "Can this tool validate my XML syntax?",
                answer: "Yes, our XML formatter performs syntax validation before formatting. It can detect common XML errors like unclosed tags, mismatched elements, invalid characters, and malformed attributes. If errors are found, you'll receive helpful error messages to fix them."
              },
              {
                question: "Does the formatter support XML namespaces?",
                answer: "Absolutely! Our XML formatter fully supports XML namespaces and will preserve all namespace declarations and prefixes. It properly handles complex XML documents with multiple namespaces and maintains their relationships during formatting."
              },
              {
                question: "Can I format large XML files with this tool?",
                answer: "Yes, our XML formatter is optimized to handle large XML files efficiently. However, processing time may vary based on file size and document complexity. For very large files (over 10MB), you might experience longer processing times depending on your browser's capabilities."
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
              About XML Formatting
            </h2>
            <div className={`prose ${darkMode ? 'prose-invert' : ''} max-w-none`}>
              <p className={textColorSecondary}>
                XML (eXtensible Markup Language) formatting is the process of organizing XML documents with proper indentation, line breaks, and spacing to improve readability and maintainability. While XML parsers can process unformatted XML, well-formatted XML is essential for developers who need to read, understand, and modify the document structure.
              </p>
              <p className={textColorSecondary}>
                Properly formatted XML offers numerous benefits for development and data management. It makes debugging easier, facilitates collaboration among team members, improves code reviews, and helps in understanding complex data structures. As XML documents become more complex with nested elements and multiple namespaces, maintaining clean formatting becomes increasingly important.
              </p>
              <p className={textColorSecondary}>
                Our XML formatter tool helps enforce best practices by automatically applying consistent formatting rules to your XML documents. It handles various aspects of XML organization, including:
              </p>
              <ul className={`list-disc pl-5 ${textColorSecondary}`}>
                <li>Proper indentation of nested elements and attributes</li>
                <li>Consistent spacing around tags and content</li>
                <li>Logical organization of complex element hierarchies</li>
                <li>Preservation of XML namespaces and declarations</li>
                <li>Clean formatting of CDATA sections and comments</li>
              </ul>
              <p className={textColorSecondary}>
                Whether you're working with configuration files, data interchange formats, or web services, our XML formatter provides a quick and reliable solution for all your XML formatting needs.
              </p>
            </div>

            {/* Keywords */}
            <div className="mt-10">
              <h3 className={`text-xl font-semibold ${textColor} mb-4`}>Related Topics</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "XML formatter", "XML beautifier", "Format XML online", 
                  "XML prettifier", "XML code formatter", "XML validator", 
                  "XML indentation tool", "XML syntax checker", "XML minifier",
                  "XML structure formatter", "XML code beautify", "XML parser", 
                  "XML pretty print", "XML code standards", "XML document formatter"
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
      <section className="py-16 bg-gradient-to-r from-green-400 to-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">
                Ready to format your XML?
              </h2>
              <p className="text-green-100 max-w-xl">
                Try our free online XML formatter now and see the difference.
              </p>
            </div>
            <div>
              <a
                href="#top"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-200"
              >
                Format XML Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default XmlFormatter;