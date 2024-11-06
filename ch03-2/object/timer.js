const timeout = setTimeout(() => {
  //주어진 밀리초(1000분의 1초) 이후에 콜백 함수를 실행한다.
  console.log("1.5초 후 실행");
}, 1500);

const interval = setInterval(() => {
  //주어진 밀리초마다 콜백 함수를 반복 실행한다.
  console.log("1초마다 실행");
}, 1000);

const timeout2 = setTimeout(() => {
  console.log("실행되지 않습니다");
}, 3000);

setTimeout(() => {
  clearTimeout(timeout2); //setTimeout을 취소한다.
  clearInterval(interval); //setInterval을 취소한다.
}, 2500);

const immediate = setImmediate(() => {
  //콜백 함수를 즉시 실행한다.
  console.log("즉시 실행");
});

const immediate2 = setImmediate(() => {
  console.log("실행되지 않습니다");
});

clearImmediate(immediate2); // setImmediate을 취소한다.
