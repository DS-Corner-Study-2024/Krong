const url = require("url");

const { URL } = url;
const myURL = new URL("http://www.github.co.kr/book/bookList.aspx?sercate1=001001000#anchor");
console.log("new URL(): ", myURL);
console.log("url.format(): ", url.format(myURL)); //분해되었던 url 객체를 다시 원래 상태로 조립한다.
