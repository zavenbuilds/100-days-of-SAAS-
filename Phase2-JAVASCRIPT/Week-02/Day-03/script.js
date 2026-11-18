// Learning Functions

// 01 - Simple function.
function myFunction() {
  console.log("My name is Zaven.");
  console.log("I am learning JavaScript.");
}

myFunction();
myFunction();

// 02 - Giving Parameters.
function myMessage(msg) {
  console.log(msg);
}

myMessage("I love learning Coding.");
myMessage("I wanna be web developer.");

// 03 - multiplication Function.
function multiplication(a, b) {
  console.log(`The multiplication of two numbers are ${a * b}`);
}

multiplication(5, 6);

// 04 - Giving input and returning a value.
function sum(x, y) {
  let s = x + y;
  return s;
}

let val = sum(56, 89);
console.log(val);

// 05 - Arrow functions
const myMsg = () => {
  console.log("This is a Arrow Function");
};

myMsg();

// 06 - Arrow Function. Giving value
const divde = (x, y) => {
  let d = x / y;
  return d;
};

let value = divde(10, 5);
console.log(value);

// Practice Set 01
function vowelsCounter(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === "a" ||
      string[i] === "e" ||
      string[i] === "i" ||
      string[i] === "o" ||
      string[i] === "u" ||
      string[i] === "A" ||
      string[i] === "E" ||
      string[i] === "I" ||
      string[i] === "O" ||
      string[i] === "U"
    ) {
      console.log(string[i]);
      count++;
    }
  }
  console.log(`There are ${count} vowels in the string`);
}

vowelsCounter("I Love learning coding.");
