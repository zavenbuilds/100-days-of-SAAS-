//Day07 - Strings

//creating strings
let str1 = "I Love JavaScript";
let str2 = "I am Learning SaaS-Development";

//String Length
console.log(str1.length);
console.log(str2.length);

//String Indices
console.log(str1[7]);
console.log(str2[12]);

//Template literals
let specialString = `Template Literals are Special type of Strings`;
let tempLiterals = `The sum of 3 + 2 is ${3 + 2}`;
console.log(tempLiterals);

//String Interpolation
let student = {
  fullName: "Ahmed",
  class: 11,
  rollNo: 501,
};

//without Template literals
console.log(
  "The Roll No of the student",
  student.fullName,
  "from class",
  student.class,
  "is",
  student.rollNo,
);

//with Template Literals
let result = `The Roll No of the student ${student.fullName} from class ${student.class} is ${student.rollNo}`;
console.log(result);

//Escape Characters
console.log("This message will be\ndisplayed on next line");
console.log("There will be a \t tab space between this sentence");

//Strings Method
//Capatilize all letters
let name = "Muhammad Ahmed";
console.log(name.toUpperCase());
console.log(name);

//small all letters
let message = "I want to become SaaS Developer";
let newMessage = message.toLowerCase();
console.log(newMessage);
console.log(message);

//Remove White Spaces
let sentence = "   This sentence contain spaces    before and after.    ";
console.log(sentence.trim());

//Gives Part of a string
message = "This is a long message to JavaScript";
console.log(message.slice(10, 22));

//Joins 2 strings
let part1 = "My name is Zaven and ";
let part2 = "I am from Pakistan";
let final = part1.concat(part2);
console.log(final);
console.log(part2.concat(part1));
console.log("I am learning JavaScript " + part1 + part2);

//Search and Replace
let wrongMessage = "This is a long Message and it contais errors";
let rightMessage = wrongMessage.replace("contais", "contains");
console.log(wrongMessage);
console.log(rightMessage);

//Knows character indexes
let str4 = "Hello World";
console.log(str4.charAt(6));

//Practice Set 01
let fullName = prompt("Enter your Full Name without spaces");
let userName = "@" + fullName + fullName.length;
result = `The suggest userName is ${userName}`;
console.log(result);
