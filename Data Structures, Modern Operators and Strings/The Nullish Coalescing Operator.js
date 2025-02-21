/**
 * ===============================
 * Nullish Coalescing Operator (??) in JavaScript
 * ===============================
 * The `??` operator provides a default value only when a variable is `null` or `undefined`.
 */

// ********** 1. Basic Syntax **********
// Description: If the first value is null or undefined, the second value is used.
/*
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // Output: "Guest"
*/

// ********** 2. Difference Between ?? and || **********
// Description: `||` treats falsy values (`0`, `''`, `false`) as false, while `??` only checks for `null` and `undefined`.
/*
let score = 0;
console.log(score || 100); // Output: 100 (because 0 is falsy)
console.log(score ?? 100); // Output: 0 (because 0 is NOT null or undefined)
*/

// ********** 3. Using ?? for Function Parameters **********
// Description: Provides default values when parameters are missing or explicitly set to `null`.
/*
function greet(name) {
  return "Hello, " + (name ?? "Stranger") + "!";
}
console.log(greet("Alice")); // Output: "Hello, Alice!"
console.log(greet(null)); // Output: "Hello, Stranger!"
console.log(greet(undefined)); // Output: "Hello, Stranger!"
*/

/**
 * ===============================
 * Summary
 * ===============================
 * ✅ `??` returns the first defined (non-null) value.
 * ✅ It is better than `||` when `0`, `false`, or `''` are valid values.
 * ✅ Useful for default values in function parameters, user input, and configurations.
 */
