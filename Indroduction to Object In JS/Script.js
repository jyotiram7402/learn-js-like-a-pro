//Introduction to Objects in JavaScript
//In JavaScript, an object is a collection of key-value pairs. Objects help store related data and functions together.

//1. Creating an Object
//A) Using Object Literal {} (Recommended)

let person = {
  name: "John",
  age: 25,
  city: "New York",
};
console.log(person);

//B) Using new Object() (Not Recommended)

let car = new Object();
car.brand = "Toyota";
car.model = "Corolla";
car.year = 2022;
console.log(car);

//✅ Prefer {} for simplicity.

//2. Accessing Object Properties
//A) Dot Notation (Recommended)

console.log(person.name); // "John"
console.log(person.age); // 25

//B) Bracket Notation

console.log(person["city"]); // "New York"
//Use bracket notation when property names contain spaces or special characters.

//3. Modifying Object Properties

person.age = 30; // Modify existing property
person.country = "USA"; // Add new property

console.log(person);

//Why we use bracket notation in most of the cases ---> refer the following example

const interstedIn = prompt(
  "what do you want know about the jhon ? choose between name,age,city"
);
console.log(person[interstedIn]);
