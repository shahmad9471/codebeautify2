import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi2';
import SafeIcon from '../common/SafeIcon';

const { FiStar, FiArrowLeft, FiArrowRight, FiMessageSquare } = FiIcons;
const { HiChatBubbleLeftRight } = HiIcons;

const Testimonials = ({ darkMode }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      quote: "Byte Beautify has become an essential part of my development workflow. The JSON formatter alone saves me hours each week! The clean interface and powerful options make it my go-to tool for all code formatting needs.",
      avatar: "https://randomuser.me/api/portraits/women/32.jpg"
    },
    {
      name: "Michael Chen",
      role: "Lead Software Engineer",
      company: "InnovateX",
      quote: "We've integrated Byte Beautify into our CI/CD pipeline. The consistent code formatting across our team has improved our code quality dramatically. The API access and custom formatting rules are exactly what we needed for our enterprise workflows.",
      avatar: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Full Stack Developer",
      company: "WebSolutions",
      quote: "The SQL formatter is incredibly accurate and handles even our most complex queries. It's made our database code much more maintainable. I also love how it preserves our comments and formatting preferences across multiple formatting sessions.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg"
    },
    {
      name: "Alex Thompson",
      role: "DevOps Engineer",
      company: "CloudSystems",
      quote: "As someone who works with multiple languages daily, having a single tool that formats JSON, YAML, and XML consistently is invaluable. The browser extension integration saves me countless clicks and makes my workflow seamless.",
      avatar: "https://randomuser.me/api/portraits/men/22.jpg"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`} id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            What Developers Say
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto`}>
            Join thousands of developers who trust our tools for their daily workflow
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative mb-12">
          <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} shadow-xl border p-5 md:p-8`}>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Avatar */}
              <motion.div
                className="md:w-1/3 flex justify-center"
                key={`avatar-${activeIndex}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative">
                  <div className={`w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden border-4 ${darkMode ? 'border-gray-700' : 'border-gray-100'} shadow-xl`}>
                    <img
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-yellow-400 rounded-full p-2 shadow-lg">
                    <SafeIcon icon={FiMessageSquare} className="text-white text-lg" />
                  </div>
                </div>
              </motion.div>

              {/* Testimonial Content */}
              <motion.div
                className="md:w-2/3"
                key={`quote-${activeIndex}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center space-x-1 text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="text-lg fill-current" />
                  ))}
                </div>
                <blockquote className={`text-lg md:text-xl italic font-light mb-6 ${darkMode ? 'text-gray-200' : 'text-gray-700'}`}>
                  "{testimonials[activeIndex].quote}"
                </blockquote>
                <div>
                  <h4 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {testimonials[activeIndex].name}
                  </h4>
                  <p className={`text-base ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {testimonials[activeIndex].role}
                  </p>
                  <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {testimonials[activeIndex].company}
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-between px-2 md:px-6">
            <button
              onClick={prevTestimonial}
              className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'} p-2 rounded-full shadow-lg transition-colors`}
              aria-label="Previous testimonial"
            >
              <SafeIcon icon={FiArrowLeft} className="text-lg" />
            </button>
            <button
              onClick={nextTestimonial}
              className={`${darkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-white text-gray-800 hover:bg-gray-100'} p-2 rounded-full shadow-lg transition-colors`}
              aria-label="Next testimonial"
            >
              <SafeIcon icon={FiArrowRight} className="text-lg" />
            </button>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  activeIndex === index
                    ? (darkMode ? 'bg-yellow-400' : 'bg-yellow-500')
                    : (darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-300 hover:bg-gray-400')
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;