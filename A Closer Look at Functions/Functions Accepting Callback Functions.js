/*
========================================
 Functions Accepting Callback Functions in JavaScript
========================================

 What is a Callback Function?
 ----------------------------
 - A callback function is a function passed as an argument to another function.
 - It is executed later, often after some processing or an asynchronous operation.
 - Useful for event handling, asynchronous execution, and reusability.
*/

// Example 1: Basic Callback Function
function greet(name, callback) {
  console.log("Hello, " + name);
  callback(); // Executing the callback function
}

function afterGreeting() {
  console.log("How are you?");
}

greet("Alice", afterGreeting);
// Output:
// Hello, Alice
// How are you?

/*
  ========================================
   Using Callbacks in Array Methods (.forEach)
  ========================================
  */

const numbers = [1, 2, 3, 4, 5];

function printSquare(num) {
  console.log(num * num);
}

// forEach method accepts a callback function
numbers.forEach(printSquare);

// Output:
// 1
// 4
// 9
// 16
// 25

/*
  ========================================
   Callbacks with setTimeout (Asynchronous Behavior)
  ========================================
  */

function delayedMessage(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

delayedMessage("This message appears after 2 seconds", 2000);

/*
  ========================================
   Callbacks in a Function for Data Processing
  ========================================
  */

function processArray(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i])); // Applying callback to each element
  }
  return result;
}

const numbers2 = [2, 4, 6];
const doubled = processArray(numbers2, (num) => num * 2);
console.log(doubled); // Output: [4, 8, 12]

/*
  ========================================
   Summary
  ========================================
   - **Callback Function**: A function passed as an argument to another function.
   - **Why Use Callbacks?** Helps in asynchronous operations, event handling, and reusability.
   - **Examples**: .forEach(), setTimeout(), custom processing functions.
  
  End of Documentation
  ========================================
  */
