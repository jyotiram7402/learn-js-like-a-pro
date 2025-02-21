/**
 * ===============================
 * Looping Arrays: The for-of Loop in JavaScript
 * ===============================
 * The `for-of` loop is used to iterate over elements in iterable objects like arrays and strings.
 */

// ********** 1. Basic for-of Loop **********
// Description: Iterates directly over the elements of an array.
/*
const fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}
// Output:
// Apple
// Banana
// Cherry
*/

// ********** 2. Using for-of with entries() to Get Index **********
// Description: Uses `entries()` to get both index and value.
/*
const colors = ["Red", "Green", "Blue"];
for (let [index, color] of colors.entries()) {
  console.log(`Index ${index}: ${color}`);
}
// Output:
// Index 0: Red
// Index 1: Green
// Index 2: Blue
*/

// ********** 3. Looping Through a String **********
// Description: Strings are iterable, so you can loop over their characters.
/*
const word = "Hello";
for (let char of word) {
  console.log(char);
}
// Output:
// H
// e
// l
// l
// o
*/

/**
 * ===============================
 * Summary
 * ===============================
 * ✅ Best for iterating over **array elements** when **indexing is not required**.
 * ✅ Works with **arrays, strings, Maps, Sets**, and other iterable objects.
 * ✅ **More readable** and **less error-prone** than traditional `for` loops.
 */
