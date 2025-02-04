//The ternary operator (? :) is a shorthand for if-else statements. It allows you to write conditional logic in a single line.

//Syntgax

//condition ? expressionIfTrue : expressionIfFalse;

//Basic Example
const age = 19;
const drink = age > 18 ? "You can drink a wine" : "You can not drink wine";
console.log(drink);

//both the above and below code is same but implimetation is differnt
if (age > 18) {
  console.log("You can drink a wine");
} else {
  console.log("You can drink can not drink wine");
}

// the Ternary Operator Inside console.log

console.log(age >= 18 ? "You can vote" : "You cannot vote");

//Multiple Ternary Operators (Nested)
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

//If score >= 90, it returns "A".
//If score >= 80, it returns "B", and so on.

//4. Ternary Operator vs. if-else
//Using if-else

let age1 = 20;
let s;

if (age1 >= 18) {
  s = "Adult";
} else {
  s = "Minor";
}

console.log(s); // "Adult"

//Using Ternary Operator (Shorter & Cleaner)
let status = age >= 18 ? "Adult" : "Minor";
console.log(s); // "Adult"
/*
5. When to Use the Ternary Operator?
✅ Use for simple conditions (readable & concise).
❌ Avoid for complex logic (nested ternaries can be hard to read).

*/

console.log(
  `i like to go  ${age > 18 ? "you are bike rider" : "you are not rider"}`
);
