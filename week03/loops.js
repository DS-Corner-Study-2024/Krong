//Repeating Tasks Manually
const vacationspots = ["busan", "jeju", "dokdo"];

console.log(vacationspots[0]);
console.log(vacationspots[1]);
console.log(vacationspots[2]);

//The For Loop
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

//Looping in Reverse
for (let counter = 3; counter >= 0; counter--) {
  console.log(counter);
}

//Looping through Arrays
const vacationSpots = ["Bali", "Paris", "Tulum"];

for (let i = 0; i < vacationSpots.length; i++) {
  console.log("I would love to visit " + vacationSpots[i]);
}

//Nested Loops
const bobsFollowers = ["annie", "wonbin", "sohee", "shin"];

const tinasFollowers = ["annie", "wonbin", "dohoon"];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] == tinasFollowers[j]) {
      mutualFollowers.push(tinasFollowers[j]);
    }
  }
}

//The While Loop
const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

while (currentCard !== "spade") {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

//Do...While Statements
let cupsOfSugarNeeded = 0;
let cupsAdded = 0;

do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);

//The break Keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
  if (rapperArray[i] === "Notorious B.I.G.") {
    console.log(rapperArray[i]);
    break;
  }
  console.log(rapperArray[i]);
}
console.log("And if you don't know, now you know.");
