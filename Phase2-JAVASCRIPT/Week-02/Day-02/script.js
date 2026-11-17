//Methods in JavaScript

// 01 - push()   adds to the end.Changes the original Array.
let fruits = ["Banana", "Apple", "Avacado", "Pineapple", "Guava"];
console.log(fruits);

fruits.push("Grapes", "Watermelon");
console.log(fruits);

// 02 - pop()   deletes from the end and return.Changes the original Array.
let games = ["PUBG", "CallofDuty", "GTA6", "WarZone", "MineCrafts"];
console.log(games);

games.pop();
console.log(games);

// 03 - toString   converts array to string.Not changes the original Array.
let movies = ["Reacher", "StrangerThings", "SweetHome", "MazeRunner", "Alive"];
console.log(movies);

console.log(movies.toString());
console.log(movies);

// 04 - concat()   joins multiple arrays.Not changes the original Arrays.
let class1 = ["Ahmed", "Abdullah", "Uzair", "Haider", "Ibrahim"];
let class2 = ["Faheem", "Umair", "Ayan", "Ali"];

console.log(class1.concat(class2));
console.log(class1);
console.log(class2);

// 05 - unshift()   adds to start.Changes the original Array.
let hobbies = ["Walking", "Reading", "Playing", "Gardning", "Journaling"];
console.log(hobbies);

hobbies.unshift("Riding");
console.log(hobbies);

// 06 - shift()  deletes from the start.Changes the original.
let marks = [97, 82, 84, 94, 64, 65];
console.log(marks);

marks.shift();
console.log(marks);

// 07 - slice() returns a piece of array.Not changes the original arrays.
let characters = [
  "Eleven",
  "Mick",
  "Will",
  "Max",
  "Locus",
  "Dustin",
  "Nancy",
  "Steve",
];
console.log(characters);

console.log(characters.slice(3, 6));
console.log(characters);

// 08 - splice(startingInd, DeletingCount, ReplacingValue)
//   use for add, remove and replace.Changes the original array.
let companies = [
  "Nike",
  "Adidas",
  "Gucci",
  "Bonanza",
  "LV",
  "Prada",
  "Jaguar",
  "Zara",
];
console.log(companies);

// Replacing a item.
companies.splice(4, 2, "Balenciaga", "Ferrari");
console.log(companies);

// Removing a item.
companies.splice(3, 1);
console.log(companies);

// Adding a item.
companies.splice(6, 0, "Chanel", "Dior");
console.log(companies);

// Removing and Adding a item.
companies.splice(2, 2, "Levi's", "TheNorthFace", "Versace", "RalphLauren");
console.log(companies);
