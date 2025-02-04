/*
1. == (Loose Equality)
Compares two values after converting them to a common type (type coercion).
It does not check the data type, only the value.
*/

console.log(5 == "5"); // true  (string "5" is converted to a number)
console.log(0 == false); // true  (false is converted to 0)
console.log(null == undefined); // true

/*
2. === (Strict Equality)
Compares both value and data type.
No type conversion is performed.

*/
console.log(5 === "5"); // false (different types: number vs. string)
console.log(0 === false); // false (number vs. boolean)
console.log(null === undefined); // false (different types)
console.log(5 === 5); // true (same type and value)

/*
When to Use Which?
Use === (Strict Equality) by default to avoid unexpected type coercion.
Use == only when intentional (e.g., checking null == undefined).
*/
