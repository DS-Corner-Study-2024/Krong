//Creating Object Literals
let fasterShip = {
  "Fuel Type": "Turbo Fuel",
  color: "silver",
};

// //Accessing Properties
// let spaceship = {
//   homePlanet: "Earth",
//   color: "silver",
//   "Fuel Type": "Turbo Fuel",
//   numCrew: 5,
//   flightPath: ["Venus", "Mars", "Saturn"],
// };

// const crewCount = spaceship.numCrew;
// const planetArray = spaceship.flightPath;

// //Bracket Notation
// let spaceship = {
//   "Fuel Type": "Turbo Fuel",
//   "Active Mission": true,
//   homePlanet: "Earth",
//   numCrew: 5,
// };

// let propName = "Active Mission";

// let isActive = spaceship[propName];
// console.log(spaceship[propName]);

//Property Assignment
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
  color: "silver",
  "Secret Mission": "Discover life outside of Earth.",
};

spaceship.color = "glorious gold";
spaceship.numEngines = 4;

delete spaceship["Secret Mission"];

//Methods
let retreatMessage = "We no longer wish to conquer your planet. It is full of dogs, which we do not care for.";

let alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log("Spim... Borp... Glix... Blastoff!");
  },
};

alienShip.retreat();
alienShip.takeOff();

//Nested Objects
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032,
  },
  crew: {
    captain: {
      name: "Sandra",
      degree: "Computer Engineering",
      encourageTeam() {
        console.log("We got this!");
      },
      "favorite foods": ["cookies", "cakes", "candy", "spinach"],
    },
  },
  engine: {
    model: "Nimbus2000",
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD",
    },
    "back-up": {
      battery: "Lithium",
      terabytes: 50,
    },
  },
};

const capFave = spaceship.crew.captain["favorite foods"][0];

spaceship.passengers = [{ name: "a" }];
let firstPassenger = spaceship.passengers[0];

//Pass By Reference
let spaceship = {
  "Fuel Type": "Turbo Fuel",
  homePlanet: "Earth",
};

let greenEnergy = (obj) => {
  obj["Fuel Type"] = "avocado oil";
};

let remotelyDisable = (obj) => {
  obj.disabled = true;
};

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);

//Looping Through Objects
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`);
}

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`);
}

//advanced-objects

// //The this Keyword
// const robot = {
//     model: '1E78V2',
//     energyLevel: 100,
//     provideInfo(){
//       return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
//     }
//   };

//   console.log(robot.provideInfo());

//   //Arrow Functions and this
//   const robot = {
//     energyLevel: 100,
//     checkEnergy(){
//       console.log(`Energy is currently at ${this.energyLevel}%.`)
//     }
//   }

//   robot.checkEnergy();

//Privacy
const robot = {
  _energyLevel: 100,
  recharge() {
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
  },
};

robot._energyLevel = "high";

robot.recharge();

//Getters
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === "number") {
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return "System malfunction: cannot retrieve energy level";
    }
  },
};

console.log(robot.energyLevel);

//Setters
const robot = {
  _model: "1E78V2",
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors() {
    if (typeof this._numOfSensors === "number") {
      return this._numOfSensors;
    } else {
      return "Sensors are currently down.";
    }
  },
  set numOfSensors(num) {
    if (typeof num === "number" && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log("Pass in a number that is greater than or equal to 0");
    }
  },
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors);

//   //Factory Functions
//   const robotFactory = (model, mobile) => {
//     return {
//       model: model,
//       mobile: mobile,
//       beep(){
//         console.log('Beep Boop');
//       }
//     }
//   };

//   const tinCan = robotFactory('P-500', true);

//   tinCan.beep();

//Property Value Shorthand
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log("Beep Boop");
    },
  };
};

//   // To check that the property value shorthand technique worked:
//   const newRobot = robotFactory('P-501', false)
//   console.log(newRobot.model)
//   console.log(newRobot.mobile)

//Destructured Assignment
const robot = {
  model: "1E78V2",
  energyLevel: 100,
  functionality: {
    beep() {
      console.log("Beep Boop");
    },
    fireLaser() {
      console.log("Pew Pew");
    },
  },
};

const { functionality } = robot;
functionality.beep();

//Built-in Object Methods
const robot = {
  model: "SAL-1000",
  mobile: true,
  sentient: false,
  armor: "Steel-plated",
  energyLevel: 75,
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot);

console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({ laserBlaster: true, voiceRecognition: true }, robot);

console.log(newRobot);
