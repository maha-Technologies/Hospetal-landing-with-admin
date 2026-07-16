const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..');
const destDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Map of directories to route paths and component names
const dirs = fs.readdirSync(srcDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name !== 'hospital-app' && !dirent.name.startsWith('.'))
    .map(dirent => dirent.name);

let appJsx = `import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

`;

dirs.forEach(dir => {
    const htmlFile = path.join(srcDir, dir, 'code.html');
    if (fs.existsSync(htmlFile)) {
        let content = fs.readFileSync(htmlFile, 'utf8');
        
        // Extract body content if present
        const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        if (bodyMatch) {
            content = bodyMatch[1];
        }

        const componentName = dir.split(/[^a-zA-Z0-9]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
        
        const jsxContent = `import React from 'react';

const ${componentName} = () => {
    return (
        <div dangerouslySetInnerHTML={{ __html: \`${content.replace(/`/g, '\\`').replace(/\$\{/g, '\\${')}\` }} />
    );
};

export default ${componentName};
`;
        
        fs.writeFileSync(path.join(destDir, `${componentName}.jsx`), jsxContent);
        
        appJsx += `import ${componentName} from './pages/${componentName}';\n`;
    }
});

appJsx += `
const App = () => {
  return (
    <Router>
      <div style={{ padding: '10px', background: '#f0f0f0', marginBottom: '20px' }}>
        <strong>Navigation: </strong>
        ${dirs.map(dir => {
            const componentName = dir.split(/[^a-zA-Z0-9]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
            return `<Link to="/${dir}" style={{ marginRight: '10px' }}>${componentName}</Link>`;
        }).join('\n        ')}
      </div>
      <Routes>
        ${dirs.map(dir => {
            const componentName = dir.split(/[^a-zA-Z0-9]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
            return `<Route path="/${dir}" element={<${componentName} />} />`;
        }).join('\n        ')}
        <Route path="/" element={<h2>Welcome to Hospital App. Select a route above.</h2>} />
      </Routes>
    </Router>
  );
};

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx);
console.log('Migration complete');
