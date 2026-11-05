// if statement
let age = 19;
if (age >= 18) {
  console.log("You are an adult");
}
if (age < 18) {
  console.log("You are young");
}

// if-else statements
let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
} else {
  color = "white";
}

console.log(color);

// else - if  statements
let marks = 30;
if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 80) {
  console.log("Grade A");
} else if (marks >= 70) {
  console.log("Grade B");
} else if (marks >= 60) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// Combined Conditions
const level = 90;
const hasTicket = true;
if (level >= 90 && hasTicket) {
  console.log("Allowed");
} else {
  console.log("Not Allowed");
}

// switch statements
const numbers = 90;

switch (numbers) {
  case "90":
    console.log("You are above average student");
    break;
  case "70":
    console.log("You are an average student");
  case "50":
    console.log("You are below average");
}
