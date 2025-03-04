/*
========================================
 Immediately Invoked Function Expressions (IIFE) in JavaScript
========================================

 What is an IIFE?
 ----------------
 - An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.
 - It is a function that is executed immediately after being created.
 - It helps prevent polluting the global scope by encapsulating variables inside the function.

 Syntax:
 --------
 (function() { 
     // Code here
 })();
 
 OR
 
 (() => {
     // Code here
 })();
*/

/*
========================================
 Example 1: Basic IIFE
========================================
*/

(function () {
  console.log("This function runs immediately!");
})();

// Output: This function runs immediately!

/*
========================================
 Example 2: IIFE with Parameters
========================================
*/

(function (name) {
  console.log(`Hello, ${name}!`);
})("Alice");

// Output: Hello, Alice!

/*
========================================
 Example 3: Using IIFE to Create a Private Scope
========================================
 - Variables inside an IIFE are not accessible outside, preventing global scope pollution.
*/

(function () {
  let privateVariable = "This is private";
  console.log(privateVariable);
})();

// console.log(privateVariable); // Uncaught ReferenceError: privateVariable is not defined

/*
========================================
 Example 4: IIFE with Arrow Function
========================================
*/

(() => {
  console.log("Arrow function IIFE executed!");
})();

// Output: Arrow function IIFE executed!

/*
========================================
 Summary
========================================
 - IIFE is useful for avoiding variable conflicts in global scope.
 - It is executed immediately after definition.
 - It can take parameters and use arrow functions.
 - Commonly used in module patterns and private scopes.

End of Documentation
========================================
*/
