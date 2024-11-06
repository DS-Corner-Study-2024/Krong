const EventEmitter = require("events");

const myEvent = new EventEmitter();
myEvent.addListener("event1", () => {
  // on과 기능이 같다.
  console.log("이벤트 1");
});
myEvent.on("event2", () => {
  //이벤트 이름과 콜백을 연결한다.
  console.log("이벤트 2");
});
myEvent.on("event2", () => {
  console.log("이벤트 2 추가");
});
myEvent.on("event3", () => {
  console.log("이벤트 3");
});

myEvent.emit("event1"); //한 번만 실행되는 이벤트
myEvent.emit("event2");

myEvent.emit("event3");
myEvent.emit("event3"); //한 번만 실행됨

myEvent.on("event4", () => {
  console.log("이벤트 4");
});
myEvent.removeAllListeners("event4"); // 연결된 모든 이벤트 리스너를 제거함
myEvent.emit("event4");

const listener = () => {
  console.log("이벤트 5");
};
myEvent.on("event5", listener);
myEvent.removeListener("event5", listener); // 이벤트에 연결된 리스너를 하나씩 제거함. off도 같음
myEvent.emit("event5");

console.log(myEvent.listenerCount("event2")); //현재 리스너가 몇 개 연결되어 있는지 확인
