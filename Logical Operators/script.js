//Logical Operators

//A) AND (&&) – Both conditions must be true
console.log(true && true); // true
console.log(true && false); // false
console.log(5 > 3 && 10 > 5); // true (both conditions are true)
console.log(5 > 10 && 10 > 5); // false (one condition is false)

//Short-circuiting in &&
//If the first operand is false, JavaScript skips the second one.
console.log(false && alert("Won't run!")); // false (doesn't show alert)

//B) OR (||) – At least one condition must be true

console.log(true || false); // true
console.log(false || false); // false
console.log(5 > 10 || 10 > 5); // true (one condition is true)
//Short-circuiting in ||
//If the first operand is true, JavaScript skips the second one.
console.log(true || alert("Won't run!")); // true (doesn't show alert)

//C) NOT (!) – Negates a value

console.log(!true); // false
console.log(!false); // true
console.log(!0); // true (because 0 is falsy)
console.log(!1); // false (because 1 is truthy)
