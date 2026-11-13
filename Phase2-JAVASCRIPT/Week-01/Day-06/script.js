//Loops in JavaScript

//for Loop
for (let i = 1; i <= 10; i++) {
  console.log("I am learning Javascript");
}

let product = 1;
for (let i = 1; i <= 5; i++) {
  product = product * i;
}
console.log(product);

for (let i = 1; i <= 10; i++) {
  console.log(5 * i);
}

//while loop

let x = 1;
while (x <= 6) {
  console.log("Pakistan");
  x++;
}

let j = 1;
do {
  console.log("I am watching Stranger Things");
  j++;
} while (j <= 5);

//Practice Set 01
for (let num = 0; num <= 100; num++) {
  if (num % 2 === 0) {
    console.log(num);
  }
}

//JAVASCRIPT LOOPS PRACITCE SETS
//LEVEL - EASY
//TASK - 01:Print numbers from 10 down to 1, then print "Blast Off!".
for (let num = 10; num >= 1; num--) {
  console.log(num);
}
console.log("Blast off!");

//LEVEL - MEDIUM
//TASK - 02:Count how many even numbers exist between 1 and 50.
let evenNum = 0;
for (x = 1; x <= 50; x++) {
  if (x % 2 === 0) {
    evenNum = evenNum + 1;
  }
}
console.log(evenNum);

//LEVEL - HARD
//TASK - 03 :Star pattern
for (i = 1; i <= 6; i++) {
  for (j = 1; j <= i; j++) {
    console.log("*");
  }
}
