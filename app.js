const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/Travel-Website.html') {
    const filePath = path.join(__dirname, 'Travel-Website.html');
    sendFile(res, filePath, 'text/html');
  } else if (req.url === '/main.css') {
    const filePath = path.join(__dirname, 'main.css');
    sendFile(res, filePath, 'text/css');
  } else if (req.url.startsWith('/image/')) {
    const imagePath = path.join(__dirname, req.url);
    sendFile(res, imagePath, 'image/jpeg');
  } else if (req.url.startsWith('/region/seoul.html')) {
    // 서울 페이지로 이동
    const seoulFilePath = path.join(__dirname, 'region', 'seoul.html');
    sendFile(res, seoulFilePath, 'text/html');
  } else if (req.url.startsWith('/region/daejeon.html')) {
    // 대전 페이지로 이동
    const daejeonFilePath = path.join(__dirname, 'region', 'daejeon.html');
    sendFile(res, daejeonFilePath, 'text/html');
  } else if (req.url.startsWith('/region/daegu.html')) {
    // 대구 페이지로 이동
    const daeguFilePath = path.join(__dirname, 'region', 'daegu.html');
    sendFile(res, daeguFilePath, 'text/html');
  } else if (req.url.startsWith('/region/busan.html')) {
    // 부산 페이지로 이동
    const busanFilePath = path.join(__dirname, 'region', 'busan.html');
    sendFile(res, busanFilePath, 'text/html');
  } else if (req.url === '/sub.css') {
    const cssPath = path.join(__dirname, 'region', 'sub.css')
    sendFile(res, cssPath, 'text/css');
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('페이지를 찾을 수 없음');
  } 
});


function sendFile(res, filePath, contentType) {
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('서버 에러');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(data);
    }
  });
}

const port = 3000;
server.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});


