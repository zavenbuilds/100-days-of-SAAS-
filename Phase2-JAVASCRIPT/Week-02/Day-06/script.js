// Learning Functions and Methods
// filter() in array Methods.

//Task 1 — Find even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const evenNum = numbers.filter((num) => {
  return num % 2 === 0;
});

console.log(evenNum);

// Task 2 — Find passing marks
const marks = [38, 53, 34, 25, 67, 88, 94, 19, 28, 31, 78, 45, 11, 29, 33];

const passMarks = marks.filter((mark) => {
  return mark > 33;
});

console.log(passMarks);

// Task 3 — Filter names
const names = ["Umair", "Ahmed", "Ali", "Abdullah", "Umar"];

const newNames = names.filter((name) => {
  return name.length > 4;
});

console.log(newNames);

// Task 5 — Use the index
const fruits = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Grapes",
  "Litchi",
  "Peach",
];

const newFruits = fruits.filter((fruit, index) => {
  return index > 2;
});

console.log(newFruits);

// reduce() in array methods.
// Task 1 — Calculate total
const values = [10, 20, 30, 40, 50];

const totalVal = values.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(totalVal);

//Task 2 — Calculate total marks
const scores = [12, 49, 68, 45, 66, 98, 26];

const totalScores = scores.reduce((acc, score) => {
  return acc + score;
}, 0);

console.log(totalScores);
let average = totalScores / scores.length;
console.log(average);

// Task 3 — Use the index
const number = [10, 20, 30, 40, 50, 60, 70];

const newNum = number.reduce((acc, val, ind) => {
  if (ind % 2 === 0) {
    return acc + val;
  }
  return acc;
}, 0);

console.log(newNum);

// Practice Set 01
let n = prompt("Enter a number:"); // 01 - Take a number "n" from the user.

let array = []; // 02 - Create an array from 1 to n.
for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}

console.log(array); // 03 - Print the array.

//04 - Use reduce to calculate the sum.
let sumArray = array.reduce((acc, val) => {
  return acc + val;
});

console.log(sumArray);

// 05 - Use reduce to calculate the product of the array.
let proArray = array.reduce((acc, val) => {
  return acc * val;
});

console.log(proArray);
