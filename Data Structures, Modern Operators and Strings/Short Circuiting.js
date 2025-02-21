/**
 * ===============================
 * Short-Circuiting (&& and ||) in JavaScript
 * ===============================
 * Short-circuiting allows logical operators to stop evaluation once the result is determined.
 */

// ********** 1. Logical OR (||) - Returns the First Truthy Value **********
// Description: The || operator returns the first truthy value or the last falsy value.
/*
console.log(0 || "Hello"); // Output: "Hello" (first truthy value)
console.log("" || "Default"); // Output: "Default" (empty string is falsy)
console.log(null || undefined || 42); // Output: 42 (first truthy value)
*/

// ********** 2. Providing Default Values Using OR (||) **********
// Description: Useful for assigning a default value when the first value is falsy.
/*
const user = "" || "Guest";
console.log(user); // Output: "Guest" ("" is falsy)
*/

// ********** 3. Logical AND (&&) - Returns the First Falsy Value **********
// Description: The && operator returns the first falsy value or the last truthy value.
/*
console.log(5 && "Hello"); // Output: "Hello" (both truthy, returns last)
console.log(true && 100 && "OK"); // Output: "OK" (all truthy, returns last)
*/

// ********** 4. AND Operator with a Falsy Value **********
// Description: The evaluation stops at the first falsy value.
/*
console.log(0 && "Hello"); // Output: 0 (first falsy value)
console.log(null && "Won't be reached"); // Output: null
*/

// ********** 5. Combining && and || **********
// Description: Used to execute logic based on conditions.
/*
const isLoggedIn = true;
const username = isLoggedIn && "User123";
console.log(username); // Output: "User123"
*/

// ********** 6. Providing a Default Only If the First Value is Falsy **********
/*
const name = null;
const displayName = name || "Anonymous";
console.log(displayName); // Output: "Anonymous"
*/

/**
 * ===============================
 * Summary
 * ===============================
 * ✅ `||` returns the **first truthy value** (or the last falsy if none are truthy).
 * ✅ `&&` returns the **first falsy value** (or the last truthy if none are falsy).
 * ✅ Useful for **default values**, **conditional execution**, and **simplifying code**.
 */
