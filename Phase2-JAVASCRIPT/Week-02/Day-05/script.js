// Learning Functions and Methods
// map() in array methods.
//map is used to make a new array from the values that the callback return.

// Task 1 — Double the numbers
const num = [5, 10, 15, 20, 25];

const newNum = num.map((val) => {
  return val * 2;
});

console.log(num);
console.log(newNum);

// Task 2 — Square the numbers
const numbers = [1, 2, 3, 4, 5];

const sqNumbers = numbers.map((val) => {
  return val * val;
});

console.log(numbers);
console.log(sqNumbers);

// Task 3 — Add greetings
const names = ["Zaven", "Umair", "Ahmed", "Uzair"];

const greetNames = names.map((val) => {
  return `Hello ${val}`;
});

console.log(greetNames);

// Task 4 — Use the index
const fruits = ["Banana", "Apple", "Peach", "Pineapple", "Grapes"];

const indFruits = fruits.map((fruit, index) => {
  return `${index} - ${fruit}`;
});

console.log(indFruits);
