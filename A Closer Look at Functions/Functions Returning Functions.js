/*
========================================
 Functions Returning Functions in JavaScript (Beginner Guide)
========================================

 What is a Function Returning Another Function?
 --------------------------------------------
 - In JavaScript, a function can return another function.
 - This is useful for creating dynamic, reusable, and closure-based functions.
 - It is an essential concept in functional programming.
*/

// Example 1: Basic Function Returning Another Function
function greetUser(greeting) {
  return function (name) {
    console.log(`${greeting}, ${name}!`);
  };
}

const sayHello = greetUser("Hello");
sayHello("Alice"); // Output: Hello, Alice!

const sayGoodbye = greetUser("Goodbye");
sayGoodbye("Bob"); // Output: Goodbye, Bob!

/*
  ========================================
   Function Returning Function with Closures
  ========================================
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
   Returning Functions for Custom Messages
  ========================================
  */

function createMessage(prefix) {
  return function (message) {
    console.log(`${prefix}: ${message}`);
  };
}

const errorMessage = createMessage("Error");
errorMessage("Something went wrong!"); // Output: Error: Something went wrong!

const successMessage = createMessage("Success");
successMessage("Data saved!"); // Output: Success: Data saved!

/*
  ========================================
   Summary
  ========================================
   - **Function Returning Function**: A function that returns another function.
   - **Why Use It?** Customization, closures, and reusable functions.
   - **Examples**: Greeting functions, multipliers, message formatters.
  
  End of Documentation
  ========================================
  */
