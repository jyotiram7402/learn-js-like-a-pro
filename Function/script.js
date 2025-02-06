//Functions in JavaScript
//A function in JavaScript is a reusable block of code that performs a specific task. Functions help organize code, avoid repetition, and improve readability.

//1. Function Syntax
function functionName(parameters) {
  // Code to execute
  return value; // (optional)
}

//2. Types of Functions in JavaScript

//A) Function Declaration (Named Function)

function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("John")); // "Hello, John!"
//✅ Hoisted (can be called before it's defined).

//B) Function Expression (Anonymous Function)

const add = function (x, y) {
  return x + y;
};
console.log(add(5, 3)); // 8
//✅ Not hoisted (must be defined before calling).

//C) Arrow Function (ES6)

const multiply = (a, b) => a * b;
console.log(multiply(4, 2)); // 8

//or more cpmplex
const findRetirementYear = (birthdate, Name) => {
  const age = 2000 - birthdate;
  const retirment = 70 - age;
  return ` ${Name} is retires in $(retirment) year`;
};
console.log(findRetirementYear(2005, "jack"))(
  //✅ Shorter syntax
  //✅ this behaves differently (lexical this binding).

  //D) Immediately Invoked Function Expression (IIFE)
  function () {
    console.log("This runs immediately!");
  }
)();
//✅ Runs immediately without needing to be called.

//3. Function Parameters and Defaults

function greet(name = "Guest") {
  return "Hello, " + name + "!";
}
console.log(greet()); // "Hello, Guest"
//✅ Default value used if no argument is passed.

//4. Returning Values vs. No Return
function add(a, b) {
  return a + b; // Returns a value
}

function logMessage(msg) {
  console.log(msg); // No return (outputs to console)
}

//5. Function Scope & this

const obj = {
  name: "Alice",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

obj.greet(); // "Hello, Alice"
//✅ this refers to the object calling the function.

//IMP Function calling other Function

const cutFruit = function (fruit) {
  return fruit * 4;
};

function fruitProcessor(apple, Oranges) {
  const applecut = cutFruit(apple);
  const orangescut = cutFruit(Oranges);

  const juice = `juise with ${applecut} piece of apple and ${orangescut} piece of oranges`;
  return juice;
}

console.log(fruitProcessor(10, 20));
