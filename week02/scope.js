//blocks and scope
const city = "New York City";

function logCitySkyline() {
  let skyscraper = "Empire State Building";
  return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());

//global scope

// const satellite = "The Moon";
// const galaxy = "The Milky Way";
// const stars = "North Star";

// function callMyNightSky() {
//   return "Night Sky: " + satellite + ", " + stars + ", and " + galaxy;
// }

// console.log(callMyNightSky());

//block scope
function logVisibleLightWaves() {
  const lightWaves = "Moonlight";
  console.log(lightWaves);
}

logVisibleLightWaves();
console.log(lightWaves);

//scope pollution
const satellite = "The Moon";
const galaxy = "The Milky Way";
let stars = "North Star";

const callMyNightSky = () => {
  stars = "Sirius";

  return "Night Sky: " + satellite + ", " + stars + ", " + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

//practice good scoping
const logVisibleLightWaves = () => {
  let lightWaves = "Moonlight";
  let region = "The Arctic";
  // Add if statement here:
  if (region === "The Arctic") {
    let lightWaves = "Northern Lights";
    console.log(lightWaves);
  }
};

logVisibleLightWaves();
