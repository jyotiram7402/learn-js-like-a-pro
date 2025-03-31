/*
=============================================================
 Understanding the find() Method in JavaScript
=============================================================

 The `find()` method returns the first element in an array that satisfies
 the provided testing function. If no element satisfies the condition,
 it returns `undefined`.

 Syntax:
    array.find(callback(element, index, array))

 - `callback` → A function that tests each element in the array.
 - `element` → The current element being tested.
 - `index` (optional) → The index of the current element.
 - `array` (optional) → The full array being processed.
 - Returns the first matching element or `undefined` if no match is found.
*/

// Example: Finding the first even number in an array
const numbers = [3, 7, 1, 8, 5, 10, 2];

const firstEven = numbers.find((num) => num % 2 === 0);

console.log(firstEven); // Output: 8 (first even number found)

/*
=============================================================
 Example: Finding an Object in an Array
=============================================================
*/
const users = [
  { id: 1, name: "Alice", age: 25 },
  { id: 2, name: "Bob", age: 30 },
  { id: 3, name: "Charlie", age: 35 },
];

const user = users.find((user) => user.age > 28);

console.log(user); // Output: { id: 2, name: 'Bob', age: 30 } (first match)

/*
=============================================================
 Difference Between find() and filter()
=============================================================
 - `find()` returns the first matching element.
 - `filter()` returns an array of all matching elements.
*/

const filteredUsers = users.filter((user) => user.age > 28);
console.log(filteredUsers);
// Output: [{ id: 2, name: 'Bob', age: 30 }, { id: 3, name: 'Charlie', age: 35 }]

/*
=============================================================
 Summary
=============================================================
 - `find()` is useful when searching for a **single** element.
 - Returns the **first match** or `undefined` if no match is found.
 - Ideal for working with arrays of objects.
 - If multiple elements match, only the first occurrence is returned.
 - Use `filter()` if you need **all** matching elements.

 End of Documentation
=============================================================
*/
