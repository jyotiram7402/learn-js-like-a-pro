"use strict";
/*
========================================
 Default Parameters in JavaScript - Documentation
========================================

What Are Default Parameters?
----------------------------
Default parameters in JavaScript allow function parameters to have predefined values if no argument is passed or if `undefined` is explicitly passed.
*/

/*
========================================
 1. Basic Syntax
========================================
*/

function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Guest!
greet("John"); // Output: Hello, John!

/*
  ========================================
   2. Default Parameters with Multiple Arguments
  ========================================
  */

function calculateArea(width = 10, height = 5) {
  return width * height;
}

console.log(calculateArea()); // Output: 50
console.log(calculateArea(6, 7)); // Output: 42
console.log(calculateArea(8)); // Output: 40 (height defaults to 5)

/*
  ========================================
   3. Using Expressions as Default Values
  ========================================
  */

function greetUser(name = "User", message = `Welcome, ${name}!`) {
  console.log(message);
}

greetUser(); // Output: Welcome, User!
greetUser("Alice"); // Output: Welcome, Alice!

/*
  ========================================
   4. Using Functions as Default Values
  ========================================
  */

function getRandomNumber() {
  return Math.floor(Math.random() * 10) + 1;
}

function rollDice(sides = getRandomNumber()) {
  console.log(`Rolling a ${sides}-sided dice...`);
}

rollDice(); // Output: Rolling a (random number)-sided dice...

/*
  ========================================
   5. Default Parameters and `undefined`
  ========================================
  */

function sayHello(name = "Stranger") {
  console.log(`Hello, ${name}!`);
}

sayHello(undefined); // Output: Hello, Stranger!
sayHello(null); // Output: Hello, null!  (null is treated as a value)

/*
  ========================================
   6. Default Parameters with Destructuring
  ========================================
  */

function displayUser({ name = "Anonymous", age = 18 } = {}) {
  console.log(`Name: ${name}, Age: ${age}`);
}

displayUser(); // Output: Name: Anonymous, Age: 18
displayUser({ name: "Bob" }); // Output: Name: Bob, Age: 18

/*
  ========================================
   When to Use Default Parameters
  ========================================
  ✅ To avoid `undefined` errors when no argument is passed.
  ✅ To improve function readability and flexibility.
  ✅ To provide fallback values for function parameters.
  
  End of Documentation
  ========================================
  */
