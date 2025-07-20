import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as HiIcons from 'react-icons/hi2';
import SafeIcon from '../common/SafeIcon';

const { 
  FiCode, FiMail, FiGithub, FiTwitter, FiLinkedin, FiHeart, FiMapPin, 
  FiPhone, FiFacebook, FiInstagram, FiShield, FiAward, FiClock, FiUsers 
} = FiIcons;
const { HiSparkles, HiCommandLine, HiBolt } = HiIcons;

const Footer = ({ darkMode }) => {
  const currentYear = new Date().getFullYear();
  
  const footerSections = {
    'Enterprise Tools': [
      { name: 'JSON Enterprise Formatter', path: '/json-formatter', badge: 'Popular' },
      { name: 'JavaScript Pro Suite', path: '/javascript-formatter', badge: 'New' },
      { name: 'CSS Advanced Formatter', path: '/css-formatter' },
      { name: 'SQL Enterprise Editor', path: '/sql-formatter', badge: 'Enterprise' },
      { name: 'XML Professional Tools', path: '/xml-formatter' },
      { name: 'YAML Enterprise Validator', path: '#', badge: 'Coming Soon' }
    ],
    'Enterprise Solutions': [
      { name: 'API Documentation', path: '#', icon: HiCommandLine },
      { name: 'Enterprise Pricing', path: '#', icon: HiSparkles },
      { name: 'Security & Compliance', path: '#', icon: FiShield },
      { name: 'Professional Services', path: '#', icon: FiUsers },
      { name: 'Training & Certification', path: '#', icon: FiAward },
      { name: 'Migration Services', path: '#', icon: HiBolt }
    ],
    'Resources & Support': [
      { name: 'Documentation Hub', path: '#' },
      { name: 'API Reference', path: '#' },
      { name: 'Best Practices Guide', path: '#' },
      { name: 'Enterprise Blog', path: '#' },
      { name: 'Community Forum', path: '#' },
      { name: '24/7 Premium Support', path: '#', badge: 'Enterprise' }
    ],
    'Company': [
      { name: 'About Byte Beautify', path: '#' },
      { name: 'Enterprise Contact', path: '#contact' },
      { name: 'Careers', path: '#' },
      { name: 'Privacy Policy', path: '#' },
      { name: 'Terms of Service', path: '#' },
      { name: 'Security Center', path: '#' }
    ]
  };

  const socialLinks = [
    { icon: FiTwitter, href: '#', label: 'Twitter', color: 'hover:bg-blue-500', gradient: 'from-blue-400 to-blue-600' },
    { icon: FiGithub, href: '#', label: 'GitHub', color: 'hover:bg-gray-800', gradient: 'from-gray-600 to-gray-800' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-700', gradient: 'from-blue-600 to-blue-800' },
    { icon: FiFacebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-600', gradient: 'from-blue-500 to-blue-700' },
    { icon: FiInstagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600', gradient: 'from-pink-500 to-purple-600' },
    { icon: FiMail, href: '#', label: 'Email', color: 'hover:bg-red-500', gradient: 'from-red-400 to-red-600' }
  ];

  const enterpriseContact = [
    { icon: FiMail, text: 'enterprise@bytebeautify.com', type: 'email' },
    { icon: FiPhone, text: '+1 (555) 123-BYTE', type: 'phone' },
    { icon: FiMapPin, text: 'San Francisco, CA • Global', type: 'location' }
  ];

  const certifications = [
    { name: 'SOC 2 Type II', icon: FiShield, color: 'text-green-500' },
    { name: '99.99% Uptime', icon: FiClock, color: 'text-blue-500' },
    { name: 'ISO 27001', icon: FiAward, color: 'text-purple-500' },
    { name: 'GDPR Compliant', icon: FiUsers, color: 'text-orange-500' }
  ];

  return (
    <footer className={`${darkMode ? 'bg-gray-900' : 'bg-gray-900'} text-white relative overflow-hidden`} id="contact">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-dots"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Enhanced Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="py-16 border-b border-gray-800/50"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-500/20 rounded-full px-4 py-2 mb-4">
                <SafeIcon icon={HiSparkles} className="text-blue-400" />
                <span className="text-sm font-medium text-blue-400">Enterprise Updates</span>
              </div>
              <h3 className="text-3xl font-bold mb-3">Stay Ahead with Enterprise Insights</h3>
              <p className="text-gray-400 mb-4 text-lg">
                Get exclusive updates on enterprise features, security updates, and industry best practices
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiShield} className="text-green-400" />
                  <span>Enterprise Security Updates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={HiBolt} className="text-yellow-400" />
                  <span>Performance Insights</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <form className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your enterprise email"
                    className="flex-1 px-6 py-4 rounded-xl bg-gray-800/80 text-white border border-gray-700/50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  >
                    <SafeIcon icon={HiSparkles} className="text-sm" />
                    <span>Subscribe</span>
                  </button>
                </div>
                <p className="text-gray-500 text-sm">
                  Join 50,000+ enterprise developers. Unsubscribe anytime.
                </p>
              </form>
            </div>
          </div>
        </motion.div>

        {/* Enhanced Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Enhanced Brand & Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-3 rounded-xl shadow-lg">
                    <SafeIcon icon={FiCode} className="text-white text-2xl" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Byte Beautify
                  </h3>
                  <p className="text-sm font-semibold text-emerald-400">Enterprise Developer Suite</p>
                </div>
              </div>
              
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                The world&apos;s most trusted enterprise code formatting platform. 
                Powering development teams at Fortune 500 companies with 
                enterprise-grade tools, security, and performance.
              </p>

              {/* Enhanced Contact Info */}
              <div className="space-y-4 mb-8">
                {enterpriseContact.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    <div className="bg-gray-800/50 p-2 rounded-lg group-hover:bg-blue-600/20 transition-colors">
                      <SafeIcon icon={item.icon} className="text-blue-400" />
                    </div>
                    <div>
                      <span className="font-medium">{item.text}</span>
                      <div className="text-xs text-gray-500 capitalize">{item.type}</div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Social Links */}
              <div className="flex space-x-3 mb-8">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className={`bg-gray-800/50 hover:bg-gradient-to-r ${social.gradient} p-3 rounded-xl transition-all duration-300 group`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={social.icon} className="text-white group-hover:scale-110 transition-transform" />
                  </motion.a>
                ))}
              </div>

              {/* Certifications */}
              <div className="grid grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-2 bg-gray-800/30 p-3 rounded-lg border border-gray-700/50"
                  >
                    <SafeIcon icon={cert.icon} className={`${cert.color} text-sm`} />
                    <span className="text-xs font-medium text-gray-300">{cert.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enhanced Links Sections */}
            {Object.entries(footerSections).map(([category, links], categoryIndex) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-bold text-white mb-6 text-lg">{category}</h4>
                <ul className="space-y-3">
                  {links.slice(0, 6).map((link, index) => (
                    <motion.li
                      key={link.name}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center justify-between text-gray-400 hover:text-white transition-colors duration-200 group"
                      >
                        <div className="flex items-center space-x-2">
                          {link.icon && <SafeIcon icon={link.icon} className="text-xs text-blue-400 group-hover:text-blue-300" />}
                          <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                        </div>
                        {link.badge && (
                          <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                            link.badge === 'Enterprise' ? 'bg-purple-600/20 text-purple-400' :
                            link.badge === 'Popular' ? 'bg-blue-600/20 text-blue-400' :
                            link.badge === 'New' ? 'bg-green-600/20 text-green-400' :
                            'bg-orange-600/20 text-orange-400'
                          }`}>
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800/50 py-8"
        >
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-gray-400 text-sm">
                © {currentYear} Byte Beautify Enterprise. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Privacy</Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Terms</Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Security</Link>
                <Link to="#" className="text-gray-400 hover:text-white transition-colors">Compliance</Link>
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Crafted with</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <SafeIcon icon={FiHeart} className="text-red-500" />
              </motion.div>
              <span>for enterprise developers worldwide</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;