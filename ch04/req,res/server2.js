const http = require("http");
const fs = require("fs").promises;

http
  .createServer(async (req, res) => {
    try {
      //요청이 들어오면 fs 모듈로 html 파일을 읽음
      const data = await fs.readFile("./server2.html");
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      //data 변수에 저장된 버퍼를 그대로 클라이언트에 보냄
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
      res.end(err.message);
    }
  })
  .listen(8081, () => {
    console.log("8081번 포트에서 서버 대기 중입니다!");
  });
