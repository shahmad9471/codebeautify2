export const toolsData = [
  // Code Formatters
  {
    id: 'json-formatter',
    name: 'JSON Formatter',
    description: 'Format, validate and beautify JSON data with enterprise-grade precision',
    category: 'Code Formatters',
    tags: ['json', 'formatter', 'validator', 'beautifier', 'minifier'],
    icon: 'SiJson',
    color: 'from-amber-400 via-orange-500 to-red-500',
    textColor: 'text-amber-600',
    popular: true,
    route: '/json-formatter'
  },
  {
    id: 'javascript-formatter',
    name: 'JavaScript Formatter',
    description: 'Clean and organize JavaScript code with AI-powered formatting',
    category: 'Code Formatters',
    tags: ['javascript', 'js', 'formatter', 'beautifier', 'es6', 'minifier'],
    icon: 'SiJavascript',
    color: 'from-yellow-400 via-yellow-500 to-amber-500',
    textColor: 'text-yellow-600',
    popular: true,
    route: '/javascript-formatter'
  },
  {
    id: 'css-formatter',
    name: 'CSS Formatter',
    description: 'Format CSS stylesheets with advanced optimization',
    category: 'Code Formatters',
    tags: ['css', 'formatter', 'beautifier', 'minifier', 'stylesheet'],
    icon: 'SiCss3',
    color: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: 'text-blue-600',
    popular: true,
    route: '/css-formatter'
  },
  {
    id: 'sql-formatter',
    name: 'SQL Formatter',
    description: 'Format complex SQL queries with multi-dialect support',
    category: 'Code Formatters',
    tags: ['sql', 'formatter', 'query', 'database', 'mysql', 'postgresql'],
    icon: 'SiMysql',
    color: 'from-orange-400 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    popular: true,
    route: '/sql-formatter'
  },
  {
    id: 'xml-formatter',
    name: 'XML Formatter',
    description: 'Format XML documents with namespace support',
    category: 'Code Formatters',
    tags: ['xml', 'formatter', 'beautifier', 'validator', 'namespace'],
    icon: 'SiXml',
    color: 'from-green-400 via-emerald-500 to-teal-500',
    textColor: 'text-green-600',
    route: '/xml-formatter'
  },
  {
    id: 'html-formatter',
    name: 'HTML Formatter',
    description: 'Format and beautify HTML markup with proper indentation',
    category: 'Code Formatters',
    tags: ['html', 'formatter', 'beautifier', 'markup', 'web'],
    icon: 'SiHtml5',
    color: 'from-red-400 via-pink-500 to-rose-500',
    textColor: 'text-red-600',
    route: '#'
  },
  {
    id: 'yaml-formatter',
    name: 'YAML Formatter',
    description: 'Format and validate YAML configuration files',
    category: 'Code Formatters',
    tags: ['yaml', 'formatter', 'config', 'validator', 'configuration'],
    icon: 'SiYaml',
    color: 'from-purple-400 via-indigo-500 to-blue-500',
    textColor: 'text-purple-600',
    route: '#'
  },
  {
    id: 'php-formatter',
    name: 'PHP Formatter',
    description: 'Format PHP code with PSR standards compliance',
    category: 'Code Formatters',
    tags: ['php', 'formatter', 'psr', 'beautifier', 'server-side'],
    icon: 'SiPhp',
    color: 'from-purple-500 via-blue-500 to-indigo-500',
    textColor: 'text-purple-600',
    route: '#'
  },
  {
    id: 'python-formatter',
    name: 'Python Formatter',
    description: 'Format Python code following PEP 8 standards',
    category: 'Code Formatters',
    tags: ['python', 'formatter', 'pep8', 'beautifier', 'code-style'],
    icon: 'SiPython',
    color: 'from-green-400 via-blue-500 to-yellow-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'java-formatter',
    name: 'Java Formatter',
    description: 'Format Java code with enterprise-grade formatting',
    category: 'Code Formatters',
    tags: ['java', 'formatter', 'enterprise', 'beautifier', 'object-oriented'],
    icon: 'SiJava',
    color: 'from-orange-500 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    route: '#'
  },

  // Data Converters
  {
    id: 'json-to-csv',
    name: 'JSON to CSV Converter',
    description: 'Convert JSON data to CSV format with customizable options',
    category: 'Data Converters',
    tags: ['json', 'csv', 'converter', 'data', 'export'],
    icon: 'FiFileText',
    color: 'from-green-400 via-teal-500 to-blue-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'csv-to-json',
    name: 'CSV to JSON Converter',
    description: 'Convert CSV files to JSON format with headers mapping',
    category: 'Data Converters',
    tags: ['csv', 'json', 'converter', 'data', 'import'],
    icon: 'FiDatabase',
    color: 'from-blue-400 via-purple-500 to-pink-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'xml-to-json',
    name: 'XML to JSON Converter',
    description: 'Convert XML documents to JSON format',
    category: 'Data Converters',
    tags: ['xml', 'json', 'converter', 'data', 'transformation'],
    icon: 'FiRepeat',
    color: 'from-purple-400 via-pink-500 to-red-500',
    textColor: 'text-purple-600',
    route: '#'
  },
  {
    id: 'yaml-to-json',
    name: 'YAML to JSON Converter',
    description: 'Convert YAML configuration to JSON format',
    category: 'Data Converters',
    tags: ['yaml', 'json', 'converter', 'config', 'transformation'],
    icon: 'FiShuffle',
    color: 'from-indigo-400 via-blue-500 to-cyan-500',
    textColor: 'text-indigo-600',
    route: '#'
  },
  {
    id: 'base64-encoder',
    name: 'Base64 Encoder/Decoder',
    description: 'Encode and decode Base64 strings with file support',
    category: 'Data Converters',
    tags: ['base64', 'encoder', 'decoder', 'string', 'conversion'],
    icon: 'FiLock',
    color: 'from-gray-400 via-gray-500 to-gray-600',
    textColor: 'text-gray-600',
    route: '#'
  },
  {
    id: 'url-encoder',
    name: 'URL Encoder/Decoder',
    description: 'Encode and decode URLs for web applications',
    category: 'Data Converters',
    tags: ['url', 'encoder', 'decoder', 'web', 'uri'],
    icon: 'FiLink',
    color: 'from-blue-400 via-indigo-500 to-purple-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'html-encoder',
    name: 'HTML Entity Encoder',
    description: 'Encode and decode HTML entities for web content',
    category: 'Data Converters',
    tags: ['html', 'entities', 'encoder', 'web', 'escape'],
    icon: 'FiCode',
    color: 'from-red-400 via-orange-500 to-yellow-500',
    textColor: 'text-red-600',
    route: '#'
  },
  {
    id: 'markdown-to-html',
    name: 'Markdown to HTML',
    description: 'Convert Markdown text to HTML markup',
    category: 'Data Converters',
    tags: ['markdown', 'html', 'converter', 'markup', 'documentation'],
    icon: 'SiMarkdown',
    color: 'from-gray-600 via-gray-700 to-gray-800',
    textColor: 'text-gray-600',
    route: '#'
  },

  // Text Utilities
  {
    id: 'text-case-converter',
    name: 'Text Case Converter',
    description: 'Convert text between different cases (upper, lower, title, camel)',
    category: 'Text Utilities',
    tags: ['text', 'case', 'converter', 'uppercase', 'lowercase', 'camelcase'],
    icon: 'FiType',
    color: 'from-green-400 via-blue-500 to-purple-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    description: 'Count words, characters, paragraphs, and reading time',
    category: 'Text Utilities',
    tags: ['word', 'counter', 'text', 'characters', 'reading-time'],
    icon: 'FiBarChart',
    color: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'text-diff',
    name: 'Text Diff Checker',
    description: 'Compare two texts and highlight differences',
    category: 'Text Utilities',
    tags: ['text', 'diff', 'compare', 'differences', 'checker'],
    icon: 'FiGitBranch',
    color: 'from-purple-400 via-pink-500 to-red-500',
    textColor: 'text-purple-600',
    route: '#'
  },
  {
    id: 'lorem-generator',
    name: 'Lorem Ipsum Generator',
    description: 'Generate placeholder text for design and development',
    category: 'Text Utilities',
    tags: ['lorem', 'ipsum', 'generator', 'placeholder', 'text'],
    icon: 'FiFileText',
    color: 'from-gray-400 via-gray-500 to-gray-600',
    textColor: 'text-gray-600',
    route: '#'
  },
  {
    id: 'text-cleaner',
    name: 'Text Cleaner',
    description: 'Remove extra spaces, line breaks, and clean up text',
    category: 'Text Utilities',
    tags: ['text', 'cleaner', 'spaces', 'formatting', 'cleanup'],
    icon: 'FiTrash2',
    color: 'from-red-400 via-pink-500 to-purple-500',
    textColor: 'text-red-600',
    route: '#'
  },
  {
    id: 'regex-tester',
    name: 'Regex Tester',
    description: 'Test and validate regular expressions with live matching',
    category: 'Text Utilities',
    tags: ['regex', 'tester', 'regular-expressions', 'pattern', 'matching'],
    icon: 'FiSearch',
    color: 'from-orange-400 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    route: '#'
  },

  // Hash & Security
  {
    id: 'md5-generator',
    name: 'MD5 Hash Generator',
    description: 'Generate MD5 hashes for text and files',
    category: 'Hash & Security',
    tags: ['md5', 'hash', 'generator', 'security', 'checksum'],
    icon: 'FiShield',
    color: 'from-red-500 via-pink-500 to-purple-500',
    textColor: 'text-red-600',
    route: '#'
  },
  {
    id: 'sha1-generator',
    name: 'SHA1 Hash Generator',
    description: 'Generate SHA1 hashes for security purposes',
    category: 'Hash & Security',
    tags: ['sha1', 'hash', 'generator', 'security', 'checksum'],
    icon: 'FiLock',
    color: 'from-blue-500 via-purple-500 to-pink-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'sha256-generator',
    name: 'SHA256 Hash Generator',
    description: 'Generate SHA256 hashes with enhanced security',
    category: 'Hash & Security',
    tags: ['sha256', 'hash', 'generator', 'security', 'encryption'],
    icon: 'FiKey',
    color: 'from-green-500 via-teal-500 to-blue-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'password-generator',
    name: 'Password Generator',
    description: 'Generate secure passwords with customizable options',
    category: 'Hash & Security',
    tags: ['password', 'generator', 'security', 'random', 'strong'],
    icon: 'FiEye',
    color: 'from-purple-500 via-indigo-500 to-blue-500',
    textColor: 'text-purple-600',
    route: '#'
  },
  {
    id: 'jwt-decoder',
    name: 'JWT Token Decoder',
    description: 'Decode and analyze JWT tokens',
    category: 'Hash & Security',
    tags: ['jwt', 'token', 'decoder', 'json-web-token', 'security'],
    icon: 'FiUnlock',
    color: 'from-orange-500 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    route: '#'
  },

  // Image Tools
  {
    id: 'image-converter',
    name: 'Image Format Converter',
    description: 'Convert images between different formats (JPG, PNG, WebP)',
    category: 'Image Tools',
    tags: ['image', 'converter', 'jpg', 'png', 'webp', 'format'],
    icon: 'FiImage',
    color: 'from-pink-400 via-purple-500 to-indigo-500',
    textColor: 'text-pink-600',
    route: '#'
  },
  {
    id: 'image-resizer',
    name: 'Image Resizer',
    description: 'Resize images with quality preservation',
    category: 'Image Tools',
    tags: ['image', 'resizer', 'resize', 'dimensions', 'quality'],
    icon: 'FiMaximize',
    color: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'image-compressor',
    name: 'Image Compressor',
    description: 'Compress images to reduce file size',
    category: 'Image Tools',
    tags: ['image', 'compressor', 'compress', 'optimize', 'file-size'],
    icon: 'FiMinimize',
    color: 'from-green-400 via-teal-500 to-blue-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'base64-image',
    name: 'Base64 Image Converter',
    description: 'Convert images to Base64 strings and vice versa',
    category: 'Image Tools',
    tags: ['base64', 'image', 'converter', 'encoding', 'data-uri'],
    icon: 'FiCamera',
    color: 'from-purple-400 via-pink-500 to-red-500',
    textColor: 'text-purple-600',
    route: '#'
  },

  // Color Tools
  {
    id: 'color-picker',
    name: 'Color Picker',
    description: 'Pick colors and get HEX, RGB, HSL values',
    category: 'Color Tools',
    tags: ['color', 'picker', 'hex', 'rgb', 'hsl', 'palette'],
    icon: 'FiDroplet',
    color: 'from-red-400 via-pink-500 to-purple-500',
    textColor: 'text-red-600',
    route: '#'
  },
  {
    id: 'color-converter',
    name: 'Color Code Converter',
    description: 'Convert between HEX, RGB, HSL, and other color formats',
    category: 'Color Tools',
    tags: ['color', 'converter', 'hex', 'rgb', 'hsl', 'cmyk'],
    icon: 'FiRefreshCw',
    color: 'from-blue-400 via-purple-500 to-pink-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'gradient-generator',
    name: 'CSS Gradient Generator',
    description: 'Create CSS gradients with live preview',
    category: 'Color Tools',
    tags: ['gradient', 'css', 'generator', 'colors', 'design'],
    icon: 'FiSun',
    color: 'from-yellow-400 via-orange-500 to-red-500',
    textColor: 'text-yellow-600',
    route: '#'
  },
  {
    id: 'palette-generator',
    name: 'Color Palette Generator',
    description: 'Generate harmonious color palettes for design',
    category: 'Color Tools',
    tags: ['palette', 'colors', 'generator', 'design', 'harmony'],
    icon: 'FiGrid',
    color: 'from-green-400 via-blue-500 to-purple-500',
    textColor: 'text-green-600',
    route: '#'
  },

  // Number Tools
  {
    id: 'number-base-converter',
    name: 'Number Base Converter',
    description: 'Convert numbers between different bases (binary, hex, decimal)',
    category: 'Number Tools',
    tags: ['number', 'base', 'converter', 'binary', 'hex', 'decimal'],
    icon: 'FiHash',
    color: 'from-indigo-400 via-purple-500 to-pink-500',
    textColor: 'text-indigo-600',
    route: '#'
  },
  {
    id: 'unit-converter',
    name: 'Unit Converter',
    description: 'Convert between different units (length, weight, temperature)',
    category: 'Number Tools',
    tags: ['unit', 'converter', 'length', 'weight', 'temperature', 'measurement'],
    icon: 'FiActivity',
    color: 'from-green-400 via-teal-500 to-blue-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'percentage-calculator',
    name: 'Percentage Calculator',
    description: 'Calculate percentages, increases, and decreases',
    category: 'Number Tools',
    tags: ['percentage', 'calculator', 'math', 'calculation', 'percent'],
    icon: 'FiPercent',
    color: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: 'text-blue-600',
    route: '#'
  },

  // Date & Time
  {
    id: 'timestamp-converter',
    name: 'Unix Timestamp Converter',
    description: 'Convert Unix timestamps to human-readable dates',
    category: 'Date & Time',
    tags: ['timestamp', 'unix', 'converter', 'date', 'time'],
    icon: 'FiClock',
    color: 'from-orange-400 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    route: '#'
  },
  {
    id: 'date-calculator',
    name: 'Date Calculator',
    description: 'Calculate differences between dates and add/subtract days',
    category: 'Date & Time',
    tags: ['date', 'calculator', 'difference', 'days', 'time'],
    icon: 'FiCalendar',
    color: 'from-purple-400 via-indigo-500 to-blue-500',
    textColor: 'text-purple-600',
    route: '#'
  },
  {
    id: 'timezone-converter',
    name: 'Timezone Converter',
    description: 'Convert time between different timezones',
    category: 'Date & Time',
    tags: ['timezone', 'converter', 'time', 'world', 'clock'],
    icon: 'FiGlobe',
    color: 'from-green-400 via-teal-500 to-blue-500',
    textColor: 'text-green-600',
    route: '#'
  },

  // Web Tools
  {
    id: 'qr-generator',
    name: 'QR Code Generator',
    description: 'Generate QR codes for URLs, text, and data',
    category: 'Web Tools',
    tags: ['qr', 'code', 'generator', 'url', 'barcode'],
    icon: 'FiSquare',
    color: 'from-gray-600 via-gray-700 to-gray-800',
    textColor: 'text-gray-600',
    route: '#'
  },
  {
    id: 'url-shortener',
    name: 'URL Shortener',
    description: 'Create short URLs for easy sharing',
    category: 'Web Tools',
    tags: ['url', 'shortener', 'link', 'short', 'sharing'],
    icon: 'FiLink2',
    color: 'from-blue-400 via-indigo-500 to-purple-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'meta-tags-generator',
    name: 'Meta Tags Generator',
    description: 'Generate HTML meta tags for SEO optimization',
    category: 'Web Tools',
    tags: ['meta', 'tags', 'seo', 'html', 'optimization'],
    icon: 'FiTag',
    color: 'from-green-400 via-blue-500 to-purple-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'robots-generator',
    name: 'Robots.txt Generator',
    description: 'Generate robots.txt files for website crawling control',
    category: 'Web Tools',
    tags: ['robots', 'txt', 'seo', 'crawling', 'website'],
    icon: 'FiSettings',
    color: 'from-orange-400 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    route: '#'
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator',
    description: 'Generate XML sitemaps for better SEO',
    category: 'Web Tools',
    tags: ['sitemap', 'xml', 'seo', 'website', 'generator'],
    icon: 'FiMap',
    color: 'from-purple-400 via-pink-500 to-red-500',
    textColor: 'text-purple-600',
    route: '#'
  },

  // API Tools
  {
    id: 'api-tester',
    name: 'API Tester',
    description: 'Test REST APIs with different HTTP methods',
    category: 'API Tools',
    tags: ['api', 'tester', 'rest', 'http', 'testing'],
    icon: 'FiServer',
    color: 'from-blue-400 via-cyan-500 to-teal-500',
    textColor: 'text-blue-600',
    route: '#'
  },
  {
    id: 'json-validator',
    name: 'JSON Schema Validator',
    description: 'Validate JSON against schema definitions',
    category: 'API Tools',
    tags: ['json', 'schema', 'validator', 'validation', 'api'],
    icon: 'FiCheckCircle',
    color: 'from-green-400 via-teal-500 to-blue-500',
    textColor: 'text-green-600',
    route: '#'
  },
  {
    id: 'postman-converter',
    name: 'Postman Collection Converter',
    description: 'Convert Postman collections to different formats',
    category: 'API Tools',
    tags: ['postman', 'collection', 'converter', 'api', 'export'],
    icon: 'FiPackage',
    color: 'from-orange-400 via-red-500 to-pink-500',
    textColor: 'text-orange-600',
    route: '#'
  }
];

export const categories = [
  'All Tools',
  'Code Formatters',
  'Data Converters',
  'Text Utilities',
  'Hash & Security',
  'Image Tools',
  'Color Tools',
  'Number Tools',
  'Date & Time',
  'Web Tools',
  'API Tools'
];

export const popularTools = toolsData.filter(tool => tool.popular);

export const getToolsByCategory = (category) => {
  if (category === 'All Tools') return toolsData;
  return toolsData.filter(tool => tool.category === category);
};

export const searchTools = (query) => {
  if (!query) return toolsData;
  
  const searchTerm = query.toLowerCase();
  return toolsData.filter(tool => 
    tool.name.toLowerCase().includes(searchTerm) ||
    tool.description.toLowerCase().includes(searchTerm) ||
    tool.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
    tool.category.toLowerCase().includes(searchTerm)
  );
};

export const getToolById = (id) => {
  return toolsData.find(tool => tool.id === id);
};