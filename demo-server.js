const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

// MIME types for different file extensions
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  
  let filePath = '.' + req.url;
  
  // Default to demo-full.html for root path
  if (filePath === './') {
    filePath = './demo-full.html';
  }

  // Handle specific routes
  if (req.url === '/demo' || req.url === '/full' || req.url === '/') {
    filePath = './demo-full.html';
  }
  
  const extname = String(path.extname(filePath)).toLowerCase();
  const mimeType = mimeTypes[extname] || 'application/octet-stream';
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end(`
          <!DOCTYPE html>
          <html>
          <head>
            <title>404 - Not Found</title>
            <style>
              body { 
                font-family: system-ui, sans-serif; 
                text-align: center; 
                padding: 50px;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                min-height: 100vh;
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
              }
              .container {
                background: rgba(255, 255, 255, 0.1);
                padding: 40px;
                border-radius: 16px;
                backdrop-filter: blur(10px);
                max-width: 500px;
                margin: 0 auto;
              }
              h1 { font-size: 3em; margin-bottom: 20px; }
              a { 
                color: #fff; 
                text-decoration: none; 
                background: rgba(255, 255, 255, 0.2);
                padding: 10px 20px;
                border-radius: 8px;
                display: inline-block;
                margin: 10px;
                transition: background 0.2s ease;
              }
              a:hover { background: rgba(255, 255, 255, 0.3); }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>404</h1>
              <p>Page not found</p>
              <div>
                <a href="/">🎡 Demo</a>
              </div>
            </div>
          </body>
          </html>
        `);
      } else {
        // Server error
        res.writeHead(500);
        res.end(`Server Error: ${error.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log('🎡 Crisli Picker Demo Server');
  console.log('================================');
  console.log(`🚀 Server running at http://localhost:${PORT}/`);
  console.log('');
  console.log('Available routes:');
  console.log(`🎡 Demo:            http://localhost:${PORT}/`);
  console.log(`📁 Dist files:      http://localhost:${PORT}/dist/`);
  console.log('');
  console.log('Press Ctrl+C to stop the server');
  console.log('================================');
});

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Server shutting down gracefully...');
  server.close(() => {
    console.log('✅ Server closed');
    process.exit(0);
  });
});
