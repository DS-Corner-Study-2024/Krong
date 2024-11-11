const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  res.write("<h1>hello node!</h1>");
  res.end("<p>hello server!</p>");
});
server.listen(8080);

server.on("listening", () => {
  console.log("8080번 포트에서 서버 대기 중입니다!");
});
server.on("error", (error) => {
  console.error(error);
});

//listen 메서드에 콜백함수를 넣는 대신 listening 이벤트 리스너를 붙임 + 에러 이벤트 리스너
