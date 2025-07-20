import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import * as SiIcons from 'react-icons/si';
import * as HiIcons from 'react-icons/hi2';
import SafeIcon from '../common/SafeIcon';

const { FiUsers, FiGlobe, FiTrendingUp, FiAward, FiCheckCircle, FiCode, FiShield, FiZap } = FiIcons;
const { SiGoogle, SiMicrosoft, SiNetflix, SiSpotify, SiAirbnb, SiUber, SiAmazon, SiSlack } = SiIcons;
const { HiBuildingOffice2, HiCpuChip } = HiIcons;

const InfoSection = ({ darkMode }) => {
  const trustedByCompanies = [
    { name: 'Google', icon: SiGoogle, color: darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600' },
    { name: 'Microsoft', icon: SiMicrosoft, color: darkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-500 hover:text-blue-600' },
    { name: 'Netflix', icon: SiNetflix, color: darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-500 hover:text-red-600' },
    { name: 'Spotify', icon: SiSpotify, color: darkMode ? 'text-gray-300 hover:text-green-400' : 'text-gray-500 hover:text-green-600' },
    { name: 'Airbnb', icon: SiAirbnb, color: darkMode ? 'text-gray-300 hover:text-red-400' : 'text-gray-500 hover:text-red-600' },
    { name: 'Uber', icon: SiUber, color: darkMode ? 'text-gray-300 hover:text-gray-100' : 'text-gray-500 hover:text-gray-900' },
    { name: 'Amazon', icon: SiAmazon, color: darkMode ? 'text-gray-300 hover:text-yellow-400' : 'text-gray-500 hover:text-yellow-600' },
    { name: 'Slack', icon: SiSlack, color: darkMode ? 'text-gray-300 hover:text-purple-400' : 'text-gray-500 hover:text-purple-600' }
  ];

  const keyStats = [
    { icon: FiUsers, value: "2M+", label: "Active Users", color: darkMode ? "from-blue-700 to-blue-500" : "from-blue-500 to-blue-400" },
    { icon: FiCode, value: "50M+", label: "Files Formatted", color: darkMode ? "from-purple-700 to-purple-500" : "from-purple-500 to-purple-400" },
    { icon: FiGlobe, value: "180+", label: "Countries", color: darkMode ? "from-green-700 to-green-500" : "from-green-500 to-green-400" },
    { icon: FiTrendingUp, value: "99.9%", label: "Uptime", color: darkMode ? "from-yellow-700 to-yellow-500" : "from-yellow-500 to-yellow-400" }
  ];

  return (
    <div className={`py-16 ${darkMode ? 'bg-gray-900' : 'bg-white'}`} id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Trusted By Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className={`text-3xl sm:text-4xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'} mb-4`}>
            Trusted by developers at industry-leading companies
          </h2>
          <p className={`text-lg ${darkMode ? 'text-gray-300' : 'text-gray-600'} max-w-3xl mx-auto mb-8`}>
            Our tools are used by developers across the globe to streamline their workflows
          </p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-5 md:gap-8 items-center">
            {trustedByCompanies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center"
                whileHover={{ y: -5, scale: 1.1 }}
              >
                <SafeIcon
                  icon={company.icon}
                  className={`text-3xl md:text-4xl ${company.color} transition-all duration-300`}
                  title={company.name}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <div className="relative">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden">
            {!darkMode && (
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-60"></div>
            )}
            {!darkMode && (
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>
            )}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className={`rounded-2xl overflow-hidden ${darkMode ? 'bg-gray-800' : 'bg-gray-50'} shadow-lg border ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
              <div className="grid md:grid-cols-2 lg:grid-cols-4">
                {keyStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 ${index !== keyStats.length - 1 ? `border-b md:border-b-0 md:border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'}` : ''}`}
                    whileHover={{ y: -3 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className={`bg-gradient-to-r ${stat.color} w-14 h-14 rounded-xl flex items-center justify-center mb-3 shadow-lg`}>
                        <SafeIcon icon={stat.icon} className="text-white text-xl" />
                      </div>
                      <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                        {stat.value}
                      </div>
                      <div className={`text-base font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        {stat.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;