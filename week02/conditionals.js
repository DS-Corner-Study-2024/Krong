//1
let userName = "";

userName ? console.log("Hello, " + userName + "!") : console.log("Hello!");

const userQuestion = "";
console.log(userQuestion);

let randomNumber = Math.floor(Math.random() * 8);
let eightBall = "";

if (randomNumber === 0) {
  eightBall = "It is certain";
} else if (randomNumber === 1) {
  eightBall = "It is decidedly so";
} else if (randomNumber === 2) {
  eightBall = "Reply hazy try again";
} else if (randomNumber === 3) {
  eightBall = "Cannot predict now";
} else if (randomNumber === 4) {
  eightBall = "Do not count on it";
} else if (randomNumber === 5) {
  eightBall = "My sources say no";
} else if (randomNumber === 6) {
  eightBall = "Outlook not so good";
} else if (randomNumber === 7) {
  eightBall = "Signs point to yes";
}

console.log(eightBall);

//2
let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = false;
const age = 19;

if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

if (age > 18 && registeredEarly) {
  console.log("9:30 a.m.");
} else if (!registeredEarly) {
  console.log("11:00 a.m.");
} else if (age <= 18) {
  console.log("12:30 a.m.");
}
