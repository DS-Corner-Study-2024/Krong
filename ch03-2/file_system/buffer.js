const buffer = Buffer.from("저를 버퍼로 바꿔보세요");
console.log("from(): ", buffer); //문자열을 버퍼로 바꾼다.
console.log("length: ", buffer.length); //버퍼의 크기를 알린다. (바이트 단위))
console.log("toString(): ", buffer.toString());

const array = [Buffer.from("띄엄 "), Buffer.from("띄엄 "), Buffer.from("띄어쓰기")];
const buffer2 = Buffer.concat(array); // 배열 안에 든 버퍼들을 하나로 합친다.
console.log("concat(): ", buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log("alloc(): ", buffer3); // 빈 버퍼를 생성한다.
