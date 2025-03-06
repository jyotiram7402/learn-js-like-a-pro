/*
========================================
 Looping Arrays: forEach() in JavaScript
========================================

 The `forEach()` method is used to execute a provided function once for each array element.
 It is commonly used for iterating over arrays without needing a loop variable.
*/

/*
========================================
 1. Basic forEach() Example
========================================
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  console.log(num);
});
// Output:
// 1
// 2
// 3
// 4
// 5

/*
========================================
 2. Using forEach() with an Arrow Function
========================================
*/

numbers.forEach((num) => console.log(num * 2));
// Output:
// 2
// 4
// 6
// 8
// 10

/*
========================================
 3. Accessing Index and Array in forEach()
========================================
 - The callback function inside `forEach()` can accept three parameters:
   1. Current value
   2. Index
   3. The entire array
*/

numbers.forEach((num, index, array) => {
  console.log(`Index: ${index}, Value: ${num}, Array: ${array}`);
});

/*
========================================
 4. Modifying Objects inside an Array
========================================
*/

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 35 },
];

users.forEach((user) => (user.age += 1));
console.log(users);
// Output:
// [{ name: "Alice", age: 26 }, { name: "Bob", age: 31 }, { name: "Charlie", age: 36 }]

/*
========================================
 5. Using forEach() on a String Array
========================================
*/

const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit, index) => console.log(`${index + 1}: ${fruit}`));
// Output:
// 1: Apple
// 2: Banana
// 3: Cherry

/*
========================================
 Summary
========================================
 - `forEach()` is used for iterating over arrays.
 - It does not return a new array (use `map()` if you need a new array).
 - It can access index and the full array within the callback function.
 - Commonly used for executing a function on each array element.
 - Modifies objects inside an array but does not modify primitive values directly.

End of Documentation
========================================
*/
