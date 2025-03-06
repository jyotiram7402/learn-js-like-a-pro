/*
========================================
 The New at() Method in JavaScript
========================================

 Introduced in ES2022, the `at()` method allows accessing elements of an array
 using both positive and negative indexes, providing an alternative to bracket notation.
*/

/*
========================================
 1. Using at() with Positive Index
========================================
*/

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.at(2)); // Output: 30

/*
========================================
 2. Using at() with Negative Index
========================================
 - Unlike traditional bracket notation, at() allows negative indexing
   to access elements from the end of the array.
*/

console.log(numbers.at(-1)); // Output: 50 (Last element)
console.log(numbers.at(-2)); // Output: 40 (Second last element)

/*
========================================
 3. Using at() on Strings
========================================
 - The `at()` method also works with strings to access individual characters.
*/

const text = "JavaScript";
console.log(text.at(0)); // Output: 'J'
console.log(text.at(-1)); // Output: 't' (Last character)

/*
========================================
 4. Comparing at() with Traditional Methods
========================================
*/

// Accessing last element using at()
console.log(numbers.at(-1)); // Output: 50

// Accessing last element using length property
console.log(numbers[numbers.length - 1]); // Output: 50

/*
========================================
 Summary
========================================
 - `at(index)`: Retrieves an element at the specified position.
 - Supports **negative indexing** for easier access to the last elements.
 - Works on both **arrays and strings**.
 - Provides a cleaner alternative to `arr[arr.length - 1]`.

End of Documentation
========================================
*/
