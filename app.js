const http = require('http');
const fs = require('fs');

const contentType = {
  'content-Type' : 'text/html',
  'charset' : 'utf-8',
}

// 클릭했을때 넘어가는 것은 /send 이런식으로 작성하기
const server = http.createServer((req, res) => {
  if(req.method === 'GET' && req.url === '/') {
    fs.readFile('./Travel-Website.html' ,(err,data) => {
      if(err) {
        console.error('파일 호출 에러');
      } else {
        res.writeHead(200, contentType);
        res.end(data);
      }
    })
  }
});
server.listen(8080, function(){
  console.log('서버가 가동중입니다. 끄려면 Cstrl + c 를 누르세요');
});