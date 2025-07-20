// Simplified formatters without external dependencies that might cause JSON parsing issues
export const formatCode = async (code, language, action = 'beautify', settings = {}) => {
  if (!code || !code.trim()) {
    throw new Error('No code provided');
  }

  // Apply settings
  const indentSize = settings.indentSize || 2;
  const useTabs = settings.useTabs || false;
  const bracketStyle = settings.bracketStyle || 'collapse';
  const preserveNewlines = settings.preserveNewlines !== undefined ? settings.preserveNewlines : true;

  try {
    switch (language) {
      case 'json':
        return formatJSON(code, action, indentSize);
      case 'javascript':
        return formatJavaScript(code, action, { indentSize, useTabs, bracketStyle, preserveNewlines });
      case 'css':
        return formatCSS(code, action, { indentSize, useTabs });
      case 'sql':
        return formatSQL(code, action, indentSize);
      case 'xml':
        return formatXML(code, action, { indentSize, useTabs });
      default:
        throw new Error(`Unsupported language: ${language}`);
    }
  } catch (error) {
    throw new Error(`Formatting failed: ${error.message}`);
  }
};

const formatJSON = (code, action, indentSize) => {
  try {
    const parsed = JSON.parse(code);
    if (action === 'minify') {
      return JSON.stringify(parsed);
    }
    return JSON.stringify(parsed, null, indentSize);
  } catch (error) {
    throw new Error('Invalid JSON syntax');
  }
};

const formatJavaScript = (code, action, options) => {
  try {
    if (action === 'minify') {
      // Simple minification - remove comments and extra whitespace
      return code
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\/\/.*$/gm, '') // Remove line comments
        .replace(/\s+/g, ' ') // Replace multiple spaces with single space
        .replace(/;\s*}/g, ';}') // Remove space before closing brace
        .trim();
    }

    // Simple beautification
    return beautifyJavaScript(code, options);
  } catch (error) {
    throw new Error('JavaScript formatting failed');
  }
};

const beautifyJavaScript = (code, options) => {
  const indentChar = options.useTabs ? '\t' : ' '.repeat(options.indentSize);
  let result = '';
  let indentLevel = 0;
  let inString = false;
  let stringChar = '';
  
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    const nextChar = code[i + 1];
    
    // Handle strings
    if ((char === '"' || char === "'" || char === '`') && code[i - 1] !== '\\') {
      if (!inString) {
        inString = true;
        stringChar = char;
      } else if (char === stringChar) {
        inString = false;
        stringChar = '';
      }
    }
    
    if (!inString) {
      if (char === '{') {
        result += char;
        if (nextChar !== '}') {
          result += '\n';
          indentLevel++;
          result += indentChar.repeat(indentLevel);
        }
        continue;
      }
      
      if (char === '}') {
        if (result[result.length - 1] !== '\n') {
          result += '\n';
        }
        indentLevel--;
        result += indentChar.repeat(indentLevel) + char;
        if (nextChar && nextChar !== ',' && nextChar !== ';' && nextChar !== '}') {
          result += '\n' + indentChar.repeat(indentLevel);
        }
        continue;
      }
      
      if (char === ';') {
        result += char;
        if (nextChar && nextChar !== '}') {
          result += '\n' + indentChar.repeat(indentLevel);
        }
        continue;
      }
    }
    
    result += char;
  }
  
  return result;
};

const formatCSS = (code, action, options) => {
  try {
    if (action === 'minify') {
      return code
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
        .replace(/\s+/g, ' ') // Replace multiple spaces
        .replace(/;\s*}/g, ';}') // Remove space before closing brace
        .replace(/{\s*/g, '{') // Remove space after opening brace
        .replace(/;\s*/g, ';') // Remove space after semicolon
        .trim();
    }

    // Simple CSS beautification
    return beautifyCSS(code, options);
  } catch (error) {
    throw new Error('CSS formatting failed');
  }
};

const beautifyCSS = (code, options) => {
  const indentChar = options.useTabs ? '\t' : ' '.repeat(options.indentSize);
  let result = '';
  let indentLevel = 0;
  
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    const nextChar = code[i + 1];
    
    if (char === '{') {
      result += ' {\n';
      indentLevel++;
      result += indentChar.repeat(indentLevel);
      continue;
    }
    
    if (char === '}') {
      result = result.trim() + '\n';
      indentLevel--;
      result += indentChar.repeat(indentLevel) + '}\n\n';
      if (nextChar) {
        result += indentChar.repeat(indentLevel);
      }
      continue;
    }
    
    if (char === ';') {
      result += ';\n' + indentChar.repeat(indentLevel);
      continue;
    }
    
    result += char;
  }
  
  return result.trim();
};

const formatSQL = (code, action, indentSize) => {
  try {
    if (action === 'minify') {
      return code
        .replace(/--.*$/gm, '') // Remove line comments
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
        .replace(/\s+/g, ' ') // Replace multiple spaces
        .trim();
    }

    // Simple SQL formatting
    const indentChar = ' '.repeat(indentSize);
    const keywords = ['SELECT', 'FROM', 'WHERE', 'JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'INNER JOIN', 'ORDER BY', 'GROUP BY', 'HAVING', 'INSERT', 'UPDATE', 'DELETE'];
    
    let result = code.toUpperCase();
    keywords.forEach(keyword => {
      const regex = new RegExp(`\\b${keyword}\\b`, 'g');
      result = result.replace(regex, `\n${keyword}`);
    });
    
    return result.trim().replace(/\n\s*\n/g, '\n').replace(/\n/g, '\n' + indentChar);
  } catch (error) {
    throw new Error('SQL formatting failed');
  }
};

const formatXML = (code, action, options) => {
  try {
    if (action === 'minify') {
      return code
        .replace(/>\s+</g, '><') // Remove whitespace between tags
        .replace(/\s+/g, ' ') // Replace multiple spaces
        .trim();
    }

    // Simple XML formatting
    return beautifyXML(code, options);
  } catch (error) {
    throw new Error('XML formatting failed');
  }
};

const beautifyXML = (code, options) => {
  const indentChar = options.useTabs ? '\t' : ' '.repeat(options.indentSize);
  let result = '';
  let indentLevel = 0;
  let inTag = false;
  
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    const nextChar = code[i + 1];
    
    if (char === '<') {
      if (nextChar === '/') {
        indentLevel--;
        result += '\n' + indentChar.repeat(indentLevel);
      } else if (result.trim()) {
        result += '\n' + indentChar.repeat(indentLevel);
      }
      inTag = true;
    }
    
    result += char;
    
    if (char === '>') {
      inTag = false;
      if (code[i - 1] !== '/' && nextChar !== '<' && nextChar && nextChar.trim()) {
        indentLevel++;
      }
    }
  }
  
  return result.trim();
};