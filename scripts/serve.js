'use strict';

// Tiny static server for previewing _site/ locally. Usage: npm run serve
// Text files are gzip-compressed, as GitHub Pages does, so Lighthouse measures what visitors get.
// Listens on 127.0.0.1 only; set HOST to change that (for example HOST=0.0.0.0 to test from a phone).

const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const zlib = require('node:zlib');

const ROOT = path.join(__dirname, '..', '_site');
const PORT = Number(process.env.PORT) || 8080;
const HOST = process.env.HOST || '127.0.0.1';
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.xml': 'application/xml',
  '.txt': 'text/plain',
  '.md': 'text/markdown; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.mp4': 'video/mp4',
  '.webm': 'video/webm',
  '.ico': 'image/x-icon',
  '.webmanifest': 'application/manifest+json',
  '.woff2': 'font/woff2'
};

function notFound(req, res) {
  const page = path.join(ROOT, '404.html');
  res.writeHead(404, { 'content-type': TYPES['.html'] });
  res.end(req.method === 'HEAD' ? undefined : fs.existsSync(page) ? fs.readFileSync(page) : 'Not found');
}

// Resolve a URL path to a file inside ROOT, or null.
function resolve(url) {
  let p;
  try {
    p = decodeURIComponent(new URL(url, 'http://x').pathname);
  } catch {
    return null;
  }
  if (p.includes('\0')) return null;
  if (p.endsWith('/')) p += 'index.html';
  const file = path.resolve(ROOT, `.${path.posix.normalize(p)}`);
  if (file !== ROOT && !file.startsWith(ROOT + path.sep)) return null;
  // Follow symlinks, and still refuse anything outside ROOT.
  let real;
  try {
    real = fs.realpathSync(file);
  } catch {
    return null;
  }
  const realRoot = fs.realpathSync(ROOT);
  if (!real.startsWith(realRoot + path.sep)) return null;
  const stat = fs.statSync(real);
  if (stat.isFile()) return real;
  // A folder without its trailing slash redirects, as on GitHub Pages. The location is built
  // from the folder's own path, never from the request, so it cannot point at another site.
  if (stat.isDirectory() && fs.existsSync(path.join(real, 'index.html'))) {
    return { redirect: `/${path.relative(realRoot, real).split(path.sep).map(encodeURIComponent).join('/')}/` };
  }
  return null;
}

http
  .createServer((req, res) => {
    if (req.method !== 'GET' && req.method !== 'HEAD') {
      res.writeHead(405, { allow: 'GET, HEAD' });
      return res.end();
    }

    const file = resolve(req.url);
    if (!file) return notFound(req, res);
    if (file.redirect) {
      res.writeHead(301, { location: file.redirect });
      return res.end();
    }

    const type = TYPES[path.extname(file)] || 'application/octet-stream';
    const body = fs.readFileSync(file);
    const headers = { 'content-type': type, 'x-content-type-options': 'nosniff' };
    if (/gzip/.test(req.headers['accept-encoding'] || '') && /text|json|xml|svg|javascript/.test(type)) {
      res.writeHead(200, { ...headers, 'content-encoding': 'gzip', vary: 'Accept-Encoding' });
      return res.end(req.method === 'HEAD' ? undefined : zlib.gzipSync(body));
    }

    // Byte ranges, as GitHub Pages serves them. Safari will not play a video without them.
    headers['accept-ranges'] = 'bytes';
    const range = /^bytes=(\d*)-(\d*)$/.exec(req.headers.range || '');
    if (range && (range[1] || range[2])) {
      const size = body.length;
      let start = range[1] ? Number(range[1]) : size - Number(range[2]);
      let end = range[1] && range[2] ? Math.min(Number(range[2]), size - 1) : size - 1;
      if (start < 0) start = 0;
      if (start >= size || start > end) {
        res.writeHead(416, { ...headers, 'content-range': `bytes */${size}` });
        return res.end();
      }
      res.writeHead(206, { ...headers, 'content-range': `bytes ${start}-${end}/${size}`, 'content-length': end - start + 1 });
      return res.end(req.method === 'HEAD' ? undefined : body.subarray(start, end + 1));
    }

    res.writeHead(200, { ...headers, 'content-length': body.length });
    res.end(req.method === 'HEAD' ? undefined : body);
  })
  .listen(PORT, HOST, () => console.log(`Preview at http://${HOST === '127.0.0.1' ? 'localhost' : HOST}:${PORT}`));
