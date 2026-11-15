//Arrays in JavaScript
let favSeries = [
  "weak hero", //index:0
  "sweet home", //index:1
  "reacher", //index:2
  "strangers things", //index:3
  "money heist", //index:4
];

console.log(favSeries);

//length property of array
console.log(favSeries.length); //length:5

//the type of arrays is object
console.log(typeof favSeries);

//arrays are accessed through the indices
console.log(favSeries[4]);
console.log(favSeries[2]);

//changing values of array items
favSeries[2] = "good boy";
console.log(favSeries);

//Looping over arrays
for (let i = 0; i < favSeries.length; i++) {
  console.log(favSeries[i]);
}

for (let element of favSeries) {
  console.log(element);
}

for (let index in favSeries) {
  console.log(favSeries[index]);
}

//Practice Set 01
const fruits = ["Apple", "Banana", "Mango", "Orange"];

//method 01
for (let fruit of fruits) {
  console.log("My favourite fruit is", fruit);
}

//method 02
for (let i of fruits) {
  let result = `My favourite fruit is ${i}`;
  console.log(result);
}

//method 03
for (let ind of fruits) {
  let message = "My fav fruit is ";
  console.log(message.concat(ind));
  console.log(message + ind);
}

//Practice Set 03
let marks = [85, 97, 44, 37, 76, 44];
let sum = 0;

for (let val of marks) {
  sum += val;
}

let average = sum / marks.length;
console.log(`The average marks of class are ${average}`);

//Practice Set 02
let items = [250, 645, 300, 900, 50];

//first method
let i = 0;
for (let val of items) {
  console.log(`The value of items at index ${i} is ${val}`);
  let offer = val / 10;
  items[i] = items[i] - offer;
  console.log(`The value of items after offer is ${items[i]}`);
  i++;
}

//second method
for (let i = 0; i < items.length; i++) {
  let newOffer = items[i] / 10;
  items[i] = items[i] - newOffer;
  console.log(`The value of items after offer is ${items[i]}`);
}

//Practice Set 03
let newMovies = [
  "avengers",
  "all of us are dead",
  "reacher",
  "vigiliant",
  "head over heals",
];

for (let val of newMovies) {
  console.log(`One of my fav movies is ${val}`);
}
console.log(`Total movies are:${newMovies.length}`);
