//Learning Functions and Methods in JavaScript
// forEach Loop in Arrays

// 01 - Named function as a Callback Function.
let favMovies = [
  "Stranger_Things",
  "Reacher",
  "All_of_us_are_Dead",
  "Good_boy",
  "Squid_Game",
];

favMovies.forEach(function printVal(val) {
  console.log(`My favourite Movie is ${val}`);
});

// 02 - Anonymous function as a Callback Function.
let marks = [79, 39, 85, 93, 62];
let sum = 0;

marks.forEach(function (val) {
  sum = sum + val;
});
console.log(`The sum of my marks are ${sum}`);

// 03 - Arrow Functions as a Callback Functions.
// Most used way to write callback in forEach.
let fruits = ["Mango", "Orange", "Banana", "Apple", "Peach", "Grapes"];

fruits.forEach((val) => {
  console.log(`My favourite fruit is ${val}`);
});

//Parameters in forEach.There are 3 parameters used in forEach.
//The 1st is for value, 2nd is for index and 3rd for array.

let favGames = ["PUBG", "GTA IV", "Call of Duty", "War Zone 4", "Valorant"];

favGames.forEach((val, ind, arr) => {
  console.log(`${ind} My fav Game from the arr ${arr} is ${val}`);
});

//Practice Set 01
let num = [11, 17, 19, 69, 45, 89, 42, 44];

num.forEach((val) => {
  console.log(`The square for the num ${val} is ${val * val}`);
});
