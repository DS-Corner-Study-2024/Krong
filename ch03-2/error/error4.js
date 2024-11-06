process.on("uncaughtException", (err) => {
  // 다눈히 에러 내용을 기록하는 정도로 사용하고, 에러를 기록한 후 process.exit()으로 프로세스를 종료하는 것이 좋다.
  console.error("예기치 못한 에러", err);
});

setInterval(() => {
  throw new Error("서버를 고장내주마!");
}, 1000);

setTimeout(() => {
  console.log("실행됩니다.");
}, 2000);
