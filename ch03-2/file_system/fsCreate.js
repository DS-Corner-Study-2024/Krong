const fs = require("fs").promises;
const constants = require("fs").constants;

fs.access("./folder", constants.F_OK | constants.W_OK | constants.R_OK) //폴더나 파일에 접근할 수 있는지 확인함
  // F_OK : 파일 존재 여부, W_OK : 쓰기 권한 여부, R_OK: 읽기 권한 여부 / 파일 없을 때 에러코드 : ENOENT
  .then(() => {
    return Promise.reject("이미 폴더 있음");
  })
  .catch((err) => {
    if (err.code === "ENOENT") {
      console.log("폴더 없음");
      return fs.mkdir("./folder"); // 폴더 만들기
    }
    return Promise.reject(err);
  })
  .then(() => {
    console.log("폴더 만들기 성공");
    return fs.open("./folder/file.js", "w"); // 파일의 아이디(fd 변수)를 가져오는 메서드
  })
  .then((fd) => {
    console.log("빈 파일 만들기 성공", fd);
    return fs.rename("./folder/file.js", "./folder/newfile.js"); //파일 이름 바꾸는 메서드
  })
  .then(() => {
    console.log("이름 바꾸기 성공");
  })
  .catch((err) => {
    console.error(err);
  });
