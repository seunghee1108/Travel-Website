const http = require('http');
const fs = require('fs');
// 내장모듈인 path 모듈을 사용하겠다는 것
const path = require('path');

// 서버 생성
const server = http.createServer((req, res) => {
  // 이 두 경우 모두 HTML 파일을 제공할 것이다.
  if (req.url === '/' || req.url === '/Travel-Website.html') {
    // __dirname : 현재 스크립트 파일이 위치한 디렉토리를 타나낸다.
    // path.join() 함수를 사용하여 현재 디렉토리와 "Travel-Website.html"파일 이름을 결합하여 해당 HTML파일의 전체 경로를 얻습니다. 
    const filePath = path.join(__dirname, 'Travel-Website.html');
    // 함수를 호출하여 파일을 클라이언트에게 보낸다.
    // 콘텐츠 타입 : 'text/html'
    sendFile(res, filePath, 'text/html');
    // 정리하면 클라이언트의 요청 URL이 "/"" 또는 "Travel-Website.html"인 경우에만 "Travel-Website.html"파일의 내용을 응답으로 전송한다. 
  } else if (req.url === '/main.css') {
    const filePath = path.join(__dirname, 'main.css');
    sendFile(res, filePath, 'text/css');
  } else if (req.url === '/script.js') {
    const scriptPath = path.join(__dirname, 'script.js');
    sendFile(res, scriptPath, 'text/javascript')
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
  } else if (req.url === '/region/sub.css') {
    const cssPath = path.join(__dirname, 'region', 'sub.css')
    sendFile(res, cssPath, 'text/css');
  } else {
    // 404 에러
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('페이지를 찾을 수 없음');
  } 
});

// 3개의 매개변수
// response 응답, filePath 전송할 파일의 경로, contentType 파일의 콘텐츠 타입
function sendFile(res, filePath, contentType) {
  // fs 모듈을 사용하여 파일을 비동기적으로 읽는다.
  // filePath에 지정된 경로의 파일을 읽고, 읽은 데이터는 'data'변수에 저장
  fs.readFile(filePath, (err, data) => {
    // 파일 일기 도중 오류 발생
    // 500 서버 오류를 나타낸다. 
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('서버 에러');
      // 오류가 없을 경우 
      // 콘텐츠 타입 사용하여 200 성공
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      // 응답으로 'data' 전송
      res.end(data);
    }
  });
}

const port = 3000;
server.listen(port, () => {
  console.log(`서버가 http://localhost:${port} 에서 실행 중입니다.`);
});




