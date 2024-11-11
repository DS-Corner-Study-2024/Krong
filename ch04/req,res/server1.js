const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    //헤더 : 응답에 대한 정보를 기록하는 메서드/ 첫번째 인수 : 성공적인 요청임을 의미하는 200, 2번째 인수 : 응답에 대한 정보 -> html 형식, 한글 표시
    res.write("<h1>hello node!</h1>");
    //첫번째  인수 : 클라이언트로 보낼 데이터 (버퍼를 보낼 수도 있음) / 데이터가 기록되는 부분을 본문이라 함
    res.end("<p>hello server!</p>");
    //응답을 종료하는 메서드 / 인수가 잇다면 데이터도 클라리언트로 보내고 응답 종료
  })
  .listen(8080, () => {
    console.log("8080번 포트에서 서버 대기 중입니다!");
  });
