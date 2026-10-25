/**
 * Local Development Server (Zero External Dependencies)
 * Serves the portfolio website statically using Node.js built-in http, fs, and path.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.woff': 'font/woff',
  '.ttf': 'font/ttf'
};

const server = http.createServer((req, res) => {
  // Normalize URL and remove query strings
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  let pathname = parsedUrl.pathname;

  if (pathname === '/' || pathname === '') {
    pathname = '/index.html';
  }

  // Prevent directory traversal attacks
  const safePath = path.normalize(path.join(ROOT_DIR, pathname));
  if (!safePath.startsWith(ROOT_DIR)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden: Access denied.');
    return;
  }

  fs.stat(safePath, (err, stats) => {
    if (err || !stats.isFile()) {
      // Fallback to index.html for single-page style navigation if requested
      const fallbackIndex = path.join(ROOT_DIR, 'index.html');
      fs.readFile(fallbackIndex, (fallbackErr, data) => {
        if (fallbackErr) {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(data);
        }
      });
      return;
    }

    const ext = path.extname(safePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(safePath, (readErr, content) => {
      if (readErr) {
        res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end(`500 Server Error: ${readErr.code}`);
        return;
      }

      res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': 'no-cache',
        'X-Content-Type-Options': 'nosniff'
      });
      res.end(content);
    });
  });
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Ojas Jha Portfolio Server Running!`);
    console.log(`📍 Local URL: http://localhost:${PORT}`);
    console.log(`🎯 Aesthetic: Dark Cyberpunk Minimal`);
    console.log(`✨ Status: Ready for FlyRank Week 4 Deployment`);
    console.log(`======================================================\n`);
  });
}

module.exports = server;
