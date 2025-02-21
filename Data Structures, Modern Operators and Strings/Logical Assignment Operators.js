/**
 * ===============================
 * Logical Assignment Operators in JavaScript
 * ===============================
 * Logical assignment operators combine logical operations with assignment for cleaner code.
 */

// ********** 1. Logical OR Assignment (||=) **********
// Description: Assigns a value only if the variable is falsy (`false`, `0`, `""`, `null`, `undefined`, `NaN`).
/*
let name = "";
name ||= "Guest";
console.log(name); // Output: "Guest" ("" is falsy)
*/

// ********** 2. Logical AND Assignment (&&=) **********
// Description: Assigns a value only if the variable is truthy.
/*
let isLoggedIn = true;
isLoggedIn &&= "User123";
console.log(isLoggedIn); // Output: "User123" (since `true` is truthy)
*/

// ********** 3. Nullish Coalescing Assignment (??=) **********
// Description: Assigns a value only if the variable is `null` or `undefined`.
/*
let username = null;
username ??= "Anonymous";
console.log(username); // Output: "Anonymous"
*/

/**
 * ===============================
 * Summary
 * ===============================
 * ✅ `||=` → Assigns a value if the variable is **falsy** (`false`, `0`, `""`, `null`, `undefined`).
 * ✅ `&&=` → Assigns a value if the variable is **truthy**.
 * ✅ `??=` → Assigns a value if the variable is **`null` or `undefined`**, but **not** `0` or `""`.
 */
