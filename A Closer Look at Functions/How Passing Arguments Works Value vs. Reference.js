/*
========================================
 Passing Arguments: Value vs. Reference in JavaScript
========================================

What is Passing by Value and Passing by Reference?
--------------------------------------------------
- **Passing by Value**: When a primitive data type (like numbers, strings, or booleans) is passed to a function, a copy is created. Changes inside the function do **not** affect the original value.
- **Passing by Reference**: When an object or an array is passed to a function, the reference (or address) to the original data is passed. Changes inside the function **do affect** the original object/array.
*/

/*
========================================
 1. Passing by Value (Primitive Data Types)
========================================
*/

function changeValue(x) {
  x = 100; // Modifying x inside the function
  console.log("Inside function:", x); // 100
}

let num = 50;
changeValue(num);
console.log("Outside function:", num); // 50 (Original value remains unchanged)

/*
  ========================================
   2. Passing by Reference (Objects & Arrays)
  ========================================
  */

// Example: Passing an Object
function modifyObject(person) {
  person.age = 30; // Modifying property inside function
}

let user = { name: "Alice", age: 25 };
modifyObject(user);
console.log(user.age); // 30 (Original object is modified)

// Example: Passing an Array
function modifyArray(arr) {
  arr.push(100); // Adding an element inside function
}

let numbers = [1, 2, 3];
modifyArray(numbers);
console.log(numbers); // [1, 2, 3, 100] (Original array is modified)

/*
  ========================================
   3. Preventing Changes (Using Spread Operator)
  ========================================
  */

function modifyArraySafely(arr) {
  let newArr = [...arr]; // Creates a copy using the spread operator
  newArr.push(100);
  console.log("Inside function:", newArr); // Modified copy
}

let originalNumbers = [1, 2, 3];
modifyArraySafely(originalNumbers);
console.log("Outside function:", originalNumbers); // [1, 2, 3] (Original remains unchanged)

/*
  ========================================
   Summary: Value vs. Reference
  ========================================
  | Feature            | Passed by Value (Primitives) | Passed by Reference (Objects & Arrays) |
  |-------------------|---------------------------|--------------------------------|
  | Data Types       | Numbers, Strings, Booleans | Arrays, Objects, Functions    |
  | Copy or Reference? | Copy of Value              | Reference to Original         |
  | Changes inside function | Do **not** affect original | **Do affect** original |
  | Example Data | `let x = 5;` | `let obj = {name: "John"}` |
  
  To prevent unintended modifications, use the **spread operator (`...`)** or `Object.assign()` to create copies of objects and arrays.
  
  End of Documentation
  ========================================
  */
