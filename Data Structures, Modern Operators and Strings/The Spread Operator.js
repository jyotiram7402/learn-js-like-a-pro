/**
 * ===============================
 * The Spread Operator (...) in JavaScript
 * ===============================
 * The spread operator expands elements of an array, object, or iterable.
 * It is useful for copying, merging, and passing values efficiently.
 */

// ********** 1. Spreading Arrays **********
// Description: Copy an array using the spread operator.
/*
const originalArray = [1, 2, 3];
const copiedArray = [...originalArray];
console.log(copiedArray); // Output: [1, 2, 3]
*/

// Description: Merge two arrays using spread.
/*
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // Output: [1, 2, 3, 4, 5, 6]
*/

// ********** 2. Spreading Objects **********
// Description: Copy an object using the spread operator.
/*
const person = { name: "Alice", age: 25 };
const copiedPerson = { ...person };
console.log(copiedPerson); // Output: { name: "Alice", age: 25 }
*/

// Description: Merge two objects using spread.
/*
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObject = { ...obj1, ...obj2 };
console.log(mergedObject); // Output: { a: 1, b: 2, c: 3, d: 4 }
*/

// Description: Overwriting object properties while merging.
/*
const objA = { name: "John", age: 30 };
const objB = { age: 35, city: "New York" };
const updatedPerson = { ...objA, ...objB };
console.log(updatedPerson); // Output: { name: "John", age: 35, city: "New York" }
*/

// ********** 3. Using Spread in Function Arguments **********
// Description: Pass an array as function arguments.
/*
const numbers = [5, 10, 15];
function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(...numbers)); // Output: 30
*/

// ********** 4. Spread Operator with Strings **********
// Description: Expand a string into an array of characters.
/*
const myString = "Hello";
const chars = [...myString];
console.log(chars); // Output: ["H", "e", "l", "l", "o"]
*/

// ********** 5. Spread with Nested Objects (Shallow Copy Issue) **********
// Description: Spread does not deep copy nested objects.
/*
const nestedObj = { name: "John", address: { city: "NY", zip: 10001 } };
const shallowCopy = { ...nestedObj };
shallowCopy.address.city = "Los Angeles";
console.log(nestedObj.address.city); // Output: "Los Angeles" (modifies the original!)
*/

/**
 * ===============================
 * Summary of Spread Operator (...)
 * ===============================
 * ✅ Copies arrays and objects
 * ✅ Merges arrays and objects
 * ✅ Passes function arguments easily
 * ✅ Expands strings into arrays
 */
