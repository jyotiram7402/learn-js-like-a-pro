/*
========================================
 Closures in JavaScript - Beginner's Guide
========================================

 What is a Closure?
 ------------------
 - A **closure** is a function that remembers the variables from its outer scope even after the outer function has finished executing.
 - It allows functions to "remember" and access variables from their lexical scope even when called outside that scope.
 - Closures are an important concept for data privacy, function factories, and maintaining state in JavaScript.

 Lexical Scope:
 --------------
 - JavaScript functions create their own scope.
 - A function can access variables defined in its own scope and in any outer function scopes.
 - This behavior is known as **lexical scoping**.

 Syntax:
 -------
 function outerFunction() {
     let outerVariable = "I am from outer scope";
     
     return function innerFunction() {
         console.log(outerVariable); // The inner function remembers outerVariable
     };
 }

 const closureFunc = outerFunction();
 closureFunc(); // Output: "I am from outer scope"

*/

/*
========================================
 Example 1: Basic Closure
========================================
*/

function greet(name) {
  return function () {
    console.log(`Hello, ${name}!`);
  };
}

const sayHello = greet("Alice");
sayHello(); // Output: Hello, Alice!

/*
========================================
 Example 2: Private Variables with Closures
========================================
 - Closures are useful for creating private variables that cannot be accessed from outside.
*/

function counter() {
  let count = 0; // Private variable

  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
  };
}

const myCounter = counter();
myCounter.increment(); // Output: Count: 1
myCounter.increment(); // Output: Count: 2
myCounter.decrement(); // Output: Count: 1
// console.log(myCounter.count); // Undefined (private variable)

/*
========================================
 Example 3: Function Factory with Closures
========================================
 - Functions returning functions to create multiple independent instances.
*/

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

const triple = multiplier(3);
console.log(triple(5)); // Output: 15

/*
========================================
 Example 4: Closures in Asynchronous Code
========================================
 - Closures help retain variables in async operations.
*/

function delayedGreeting(name) {
  setTimeout(function () {
    console.log(`Hello, ${name}!`);
  }, 2000);
}

delayedGreeting("Bob"); // Output after 2s: Hello, Bob!

/*
========================================
 Summary
========================================
 - Closures allow functions to retain access to outer variables.
 - Useful for data encapsulation, function factories, and async operations.
 - Help in creating private variables and managing state.

End of Documentation
========================================
*/
