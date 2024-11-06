const util = require("util");
const crypto = require("crypto");

const dontUseMe = util.deprecate((x, y) => {
  //함수가 deprecated(없어짐) 처리 되었음을 알린다.
  console.log(x + y);
}, "dontUseMe 함수는 deprecated되었으니 더 이상 사용하지 마세요!");
dontUseMe(1, 2);
//첫 번째 인수로 넣은 함수를 사용했을 때 경고 메시지가 출력된다.
//두 번째 인수로 경고 메시지 내용을 넣으면 된다.

const randomBytesPromise = util.promisify(crypto.randomBytes); //콜백 패턴을 프로미스 패턴으로 바꾼다.
randomBytesPromise(64)
  .then((buf) => {
    console.log(buf.toString("base64"));
  })
  .catch((error) => {
    console.error(error);
  });
