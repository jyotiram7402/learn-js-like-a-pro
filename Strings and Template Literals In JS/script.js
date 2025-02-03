const firstName = "arjun";
const lastName = "Reddy";
const birthYear = 2002;
const presentYear = 2025;

//String in js
const indro =
  "I'm " +
  firstName +
  " " +
  lastName +
  ", a " +
  (presentYear - birthYear) +
  "year old";

console.log(indro);

//This is a best way to write a strings
//Template Literals

const newIndro = `I'm a ${firstName} ${lastName} a ${
  presentYear - birthYear
} old Programmer`;

console.log(newIndro);

//both are same but when we have to add some dynamically varible in it Template literals is good
console.log("Hi my name is Jack");
console.log(`Hi my name is jack`);
