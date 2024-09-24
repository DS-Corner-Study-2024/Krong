//create an array
const hobbies = ["tennis", "coding", "music"];

console.log(hobbies);

//accessing elements
const famousSayings = ["Fortune favors the brave.", "A joke is a very serious thing.", "Where there is love there is life."];

const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);

famousSayings[3] = "dkdk";
console.log(famousSayings[3]);

//update elements
let groceryList = ["bread", "tomatoes", "milk"];

groceryList[1] = "avocados";

//arrays with let and const
let condiments = ["Ketchup", "Mustard", "Soy Sauce", "Sriracha"];

const utensils = ["Fork", "Knife", "Chopsticks", "Spork"];

condiments[0] = "Mayo";
console.log(condiments);

condiments = ["Mayo"];
console.log(condiments);

utensils[3] = "Spoon";
console.log(utensils);

//the .length property
const objectives = ["Learn a new language", "Read 52 books", "Run a marathon"];

console.log(objectives.length);

//the .push() method
//const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push("", "");

console.log(chores);

//the .pop() method
const chores = ["wash dishes", "do laundry", "take out trash", "cook dinner", "mop floor"];

chores.pop();
console.log(chores);

//more array methods
const groceryList = ["orange juice", "bananas", "coffee beans", "brown rice", "pasta", "coconut oil", "plantains"];

groceryList.shift();
console.log(groceryList);

groceryList.unshift("popcorn");
console.log(groceryList);

console.log(groceryList.slice(1, 4));
groceryList.shift();

console.log(groceryList.slice(3));

const pastaIndex = groceryList.indexOf("pasta");
console.log(pastaIndex);

//arrays and functions
const concept = ["arrays", "can", "be", "mutated"];

function changeArr(arr) {
  arr[3] = "MUTATED";
}

changeArr(concept);
console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);
console.log(concept);

//nested arrays
const numberClusters = [
  [1, 2],
  [3, 4],
  [5, 6],
];

const target = numberClusters[2][1];
