const crypto = require("crypto");

const algorithm = "aes-256-cbc";
const key = "abcdefghijklmnopqrstuvwxyz123456";
const iv = "1234567890123456";

const cipher = crypto.createCipheriv(algorithm, key, iv); // 알고리즘에 따라 바이트수가 다름 이 경우 키는 32바이트, iv는 16바이트
let result = cipher.update("암호화할 문장", "utf8", "base64"); // 암호화할 대상과 대상의 인코딩, 출력 결과물의 인코딩을 넣는다.
result += cipher.final("base64"); // 출력 결과물의 인코딩을 넣으면 암호화가 완료된다.
console.log("암호화: ", result);

const decipher = crypto.createDecipheriv(algorithm, key, iv); // 복호화할 때 사용한다. 암호화할 때 사용한 알코리즘과 키, iv를 그대로 넣어야 한다.
let result2 = decipher.update(result, "base64", "utf8"); // 암호화된 문장, 그 문장의 인코딩, 복호화할 인코딩을 넣는다.
result2 += decipher.final("utf8"); // 복호화 결과물의 인코딩을 넣는다.
console.log("복호화: ", result2);
