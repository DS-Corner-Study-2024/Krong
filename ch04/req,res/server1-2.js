const http = require("http");

//한 번에 여러 서버 실행 가능 : createServer 원하는 만큼 호출
http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.write("<h1>hello node!</h1>");
    res.end("<p>hello server!</p>");
  })
  .listen(8080, () => {
    //서버 연결
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.write("<h1>hello node!</h1>");
    res.end("<p>hello server!</p>");
  })
  .listen(8081, () => {
    //서버 연결
    console.log("8081번 포트에서 서버 대기 중입니다!");
  });
//여러 서버 실행할 때 포트 번호 같으면 eaddrinuse 에러 발생 (실무에 여러 개 띄우는 일 드물다!)
