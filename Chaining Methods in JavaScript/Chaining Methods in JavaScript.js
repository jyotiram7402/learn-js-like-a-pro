/*
=============================================================
 The Magic of Chaining Methods in JavaScript
=============================================================

 Chaining methods in JavaScript allows us to execute multiple methods
 sequentially on an array without creating intermediate variables.
 This is achieved because many array methods return a new array,
 enabling further method calls.

 Commonly used chainable methods:
 - `map()`: Transforms elements.
 - `filter()`: Selects elements that meet a condition.
 - `reduce()`: Accumulates values into a single output.
 - `sort()`: Sorts elements in place.
 - `forEach()`: Iterates through elements (not chainable since it returns `undefined`).
*/

// Example: Using Chaining to Process an Array
const numbers = [3, 7, 1, 9, 2, 5, 8];

const result = numbers
  .filter((num) => num % 2 === 0) // Step 1: Keep even numbers [2, 8]
  .map((num) => num * num) // Step 2: Square the numbers [4, 64]
  .sort((a, b) => a - b) // Step 3: Sort in ascending order [4, 64]
  .reduce((acc, num) => acc + num, 0); // Step 4: Sum the elements (4 + 64 = 68)

console.log(result); // Output: 68

/*
=============================================================
 Benefits of Method Chaining
=============================================================
 - Improves code readability by avoiding unnecessary variables.
 - Enhances performance by reducing array iterations.
 - Keeps code clean and expressive.
*/

// Example: Extracting and Formatting Data Using Chaining
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
  { name: "David", age: 22 },
];

const userNames = users
  .filter((user) => user.age >= 25) // Select users aged 25 and above
  .map((user) => user.name.toUpperCase()) // Convert names to uppercase
  .sort(); // Sort alphabetically

console.log(userNames); // Output: ['ALICE', 'BOB', 'CHARLIE']

/*
=============================================================
 Summary
=============================================================
 - Chaining is a powerful technique in JavaScript for handling arrays.
 - It improves code efficiency by reducing unnecessary loops.
 - Common chainable methods include `map()`, `filter()`, `sort()`, and `reduce()`.
 - Avoid chaining methods that modify the original array unexpectedly.

 End of Documentation
=============================================================
*/
