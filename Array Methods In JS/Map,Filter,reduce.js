/*
==================================================================
 Map, Filter, and Reduce Methods in JavaScript Arrays
==================================================================

 These three methods are powerful functions for working with arrays.
 They allow transformation, filtering, and reduction of array elements.
*/

/*
=============================================================
 Understanding the map() Method in JavaScript
=============================================================

 The `map()` method creates a new array by applying a function to each element.

 Syntax:
    array.map((element, index, array) => {...});

 - `element` → The current element being processed.
 - `index` → The index of the current element.
 - `array` → The original array being iterated over.
*/

const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

/*
=============================================================
 Understanding the filter() Method in JavaScript
=============================================================

 The `filter()` method creates a new array containing only elements that meet a condition.

 Syntax:
    array.filter((element, index, array) => {...});

 - `element` → The current element being processed.
 - `index` → The index of the current element.
 - `array` → The original array being iterated over.
*/

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4]

/*
=============================================================
 Understanding the reduce() Method in JavaScript
=============================================================

 The `reduce()` method executes a reducer function on each element of the array,
 resulting in a single accumulated value.

 Syntax:
    array.reduce((accumulator, currentValue) => {...}, initialValue);

 - `accumulator` (acc) → The running total (stores the accumulated value).
 - `currentValue` (num) → The current element being processed.
 - `initialValue` → The starting value for the accumulator.
*/

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

/*
=============================================================
 Step-by-Step Execution of reduce()
=============================================================
 For numbers = [1, 2, 3, 4, 5], the reduce() method works as follows:

| Step | Accumulator (acc) | Current Value (num) | New Accumulator Value |
|------|------------------|--------------------|-----------------------|
| 1    | 0                | 1                  | 0 + 1 = 1             |
| 2    | 1                | 2                  | 1 + 2 = 3             |
| 3    | 3                | 3                  | 3 + 3 = 6             |
| 4    | 6                | 4                  | 6 + 4 = 10            |
| 5    | 10               | 5                  | 10 + 5 = 15           |

 Final result stored in `sum` = 15
*/

/*
=============================================================
 Example: Finding the Maximum Number using reduce()
=============================================================
*/
const maxNumber = numbers.reduce(
  (acc, num) => (num > acc ? num : acc),
  numbers[0]
);
console.log(maxNumber); // Output: 5

/*
=============================================================
 Combining map(), filter(), and reduce()
=============================================================
 - Example: Find the sum of squares of even numbers.
*/

const sumOfSquares = numbers
  .filter((num) => num % 2 === 0) // Filter even numbers
  .map((num) => num * num) // Square the numbers
  .reduce((acc, num) => acc + num, 0); // Sum them up

console.log(sumOfSquares); // Output: 20

/*
=============================================================
 Summary
=============================================================
 - `map()`: Transforms each element and returns a new array.
 - `filter()`: Returns a new array with elements that satisfy a condition.
 - `reduce()`: Reduces an array to a single value.
 - These methods can be combined for powerful data transformations.

 End of Documentation
=============================================================
*/
