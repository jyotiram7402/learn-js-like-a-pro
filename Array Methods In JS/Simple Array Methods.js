/*
========================================
 Simple Array Methods in JavaScript - Beginner's Guide
========================================

 Arrays are one of the most commonly used data structures in JavaScript.
 JavaScript provides built-in methods to manipulate and work with arrays efficiently.
 Below are some simple array methods explained with examples.
*/

/*
========================================
 1. push() - Adds an element to the end of an array
========================================
*/

let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

/*
========================================
 2. pop() - Removes the last element from an array
========================================
*/

fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana"]

/*
========================================
 3. shift() - Removes the first element from an array
========================================
*/

fruits.shift();
console.log(fruits); // Output: ["Banana"]

/*
========================================
 4. unshift() - Adds an element to the beginning of an array
========================================
*/

fruits.unshift("Mango");
console.log(fruits); // Output: ["Mango", "Banana"]

/*
========================================
 5. indexOf() - Finds the index of an element in an array
========================================
*/

console.log(fruits.indexOf("Banana")); // Output: 1

/*
========================================
 6. includes() - Checks if an element exists in an array
========================================
*/

console.log(fruits.includes("Mango")); // Output: true

/*
========================================
 7. slice() - Extracts a portion of an array without modifying the original
========================================
*/

let newFruits = fruits.slice(0, 1);
console.log(newFruits); // Output: ["Mango"]

/*
========================================
 8. splice() - Adds/Removes elements from an array
========================================
*/

fruits.splice(1, 0, "Grapes");
console.log(fruits); // Output: ["Mango", "Grapes", "Banana"]

/*
========================================
 9. join() - Converts an array into a string
========================================
*/

console.log(fruits.join(" - ")); // Output: Mango - Grapes - Banana

/*
========================================
 10. reverse() - Reverses the order of elements in an array
========================================
*/

console.log(fruits.reverse()); // Output: ["Banana", "Grapes", "Mango"]

/*
========================================
 Summary
========================================
 - push(): Adds to the end
 - pop(): Removes from the end
 - shift(): Removes from the start
 - unshift(): Adds to the start
 - indexOf(): Finds an index
 - includes(): Checks for existence
 - slice(): Extracts a portion
 - splice(): Modifies an array
 - join(): Converts to a string
 - reverse(): Reverses the array

End of Documentation
========================================
*/
