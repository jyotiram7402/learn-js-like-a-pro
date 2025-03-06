/*
====================================================
 forEach() with Maps and Sets in JavaScript
====================================================

 The `forEach()` method can be used to iterate over both Maps and Sets.
 It allows executing a function once for each element.
*/

/*
========================================
 1. Using forEach() with a Map
========================================
*/

const myMap = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "New York"],
]);

myMap.forEach((value, key) => {
  console.log(`Key: ${key}, Value: ${value}`);
});
// Output:
// Key: name, Value: Alice
// Key: age, Value: 25
// Key: city, Value: New York

/*
========================================
 2. Using forEach() with a Set
========================================
*/

const mySet = new Set([10, 20, 30, 40, 50]);

mySet.forEach((value) => {
  console.log(`Value: ${value}`);
});
// Output:
// Value: 10
// Value: 20
// Value: 30
// Value: 40
// Value: 50

/*
========================================
 3. forEach() with a Set (Duplicate Values Ignored)
========================================
 - Since Sets store unique values, duplicates are automatically removed.
*/

const uniqueSet = new Set([1, 2, 2, 3, 4, 4, 5]);
uniqueSet.forEach((value) => console.log(value));
// Output:
// 1
// 2
// 3
// 4
// 5

/*
========================================
 Summary
========================================
 - `forEach()` in **Maps** provides both key and value.
 - `forEach()` in **Sets** only provides the value (since keys are the same as values).
 - Useful for iterating over **unique** collections efficiently.

End of Documentation
========================================
*/
