//Strings
const codeName = "Zaven";
const message = "Never Giveup";
console.log(codeName);
console.log(typeof message);

//Numbers
let age = 19;
let level = 12;
let numbers = 511;
console.log(age + 1);
console.log(typeof numbers);

//Boolen
const isLearning = true;
console.log(typeof isLearning);

//undefined
let x;
console.log(typeof x);

//bigint
const largeNumber = 12450000087344546n;
console.log(typeof largeNumber);

//Basic type conversion
const input = "25";
let numberValue = Number(input);
console.log(numberValue + 15);

//converting a string to a number
const stringTitle = "hello";
let conTitle = Number("hello");
console.log(conTitle);

//Practice Set1: Make a const Object and fill the information
const product = {
  name: "Ball Pen",
  rating: 4.5,
  isDeal: true,
  price: 599,
  offer: "7%",
};
console.log(product);

//Practice Set2:
const profile = {
  userName: "shradha",
  isFollow: true,
  post: 32,
  followers: 147,
  following: 2,
  title: "entrepreneur",
  achievements: "Apna college | Ex-Microsoft",
  bio: "To educate someone is the highest privilage",
};
console.log(profile);
console.log(typeof profile);
console.log(typeof profile.post);
