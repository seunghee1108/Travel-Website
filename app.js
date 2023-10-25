const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    if (req.url === '/') {
      // HTML 파일 제공
      fs.readFile('./Travel-Website.html', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 오류');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data);
        }
      });
    } else if (req.url === '/main.css') {
      // CSS 파일 제공
      fs.readFile('./main.css', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 오류');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/css' });
          res.end(data);
        }
      });
    } else if (req.url === '/script.js') {
      // JavaScript 파일 제공
      fs.readFile('./script.js', 'utf-8', (err, data) => {
        if (err) {
          res.writeHead(500, { 'Content-Type': 'text/plain' });
          res.end('서버 오류');
        } else {
          res.writeHead(200, { 'Content-Type': 'text/javascript' });
          res.end(data);
        }
      });
    } else if (req.url.startsWith('/image/')) {
      // 이미지 파일 제공
      const imagePath = path.join(__dirname, req.url);
      fs.readFile(imagePath, (err, data) => {
        if (err) {
          res.writeHead(404, { 'Content-Type': 'text/plain' });
          res.end('이미지를 찾을 수 없습니다.');
        } else {
          const ext = path.extname(imagePath).toLowerCase();
          let contentType = 'image/jpeg'; // 기본 이미지 유형
          if (ext === '.png') {
            contentType = 'image/png';
          } else if (ext === '.gif') {
            contentType = 'image/gif';
          }
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(data);
        }
      });
    } else {
      // 정의되지 않은 URL에 대한 처리
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('페이지를 찾을 수 없습니다.');
    }
  }
});

server.listen(8080, () => {
  console.log('서버가 가동중입니다. 끄려면 Ctrl + C를 누르세요.');
});