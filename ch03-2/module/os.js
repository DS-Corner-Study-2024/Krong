const os = require("os");

console.log("운영체제 정보 --------------------------------------");
console.log("os.arch(): ", os.arch()); //process.arch와 동일하다. 프로세서 아키텍처 정보이다.
console.log("os.platform(): ", os.platform()); //process.platform과 동일하다. 운영체제 플랫폼 정보이다.
console.log("os.type(): ", os.type()); //운영체제의 종류를 보여준다.
console.log("os.uptime(): ", os.uptime()); //운영체제 부팅 이후 흐른 시간(초)를 보여준다.
console.log("os.hostname(): ", os.hostname()); //컴퓨터의 이름을 보여준다.
console.log("os.release(): ", os.release()); //운영체제의 버전을 보여준다.

console.log("경로----------------------------------------------");
console.log("os.homedir(): ", os.homedir()); //홈 디렉터리 경로를 보여준다.
console.log("os.tmpdir(): ", os.tmpdir()); //임시 파일 저장 경로를 보여준다.

console.log("cpu 정보-------------------------------------------");
console.log("os.cpus(): ", os.cpus()); //컴퓨터의 코어 정보를 보여준다.
console.log("os.cpus().length: ", os.cpus().length); //사용 가능한 메모리(RAM)를 보여준다.

console.log("메모리 정보------------------------------------------");
console.log("os.freemem(): ", os.freemem()); //전체 메모리 용량을 보여준다.
console.log("os.totalmem(): ", os.totalmem()); //각종 에러와 신호에 대한 정보가 담겨있고, 에러 코드를 함께 보여줘서 발생할 때마다 검색하는 것이 좋다.
