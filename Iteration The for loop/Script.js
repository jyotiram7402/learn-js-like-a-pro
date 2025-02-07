//Iteration: The for Loop in JavaScript
//The for loop is used to execute a block of code multiple times. It is commonly used to iterate over arrays, strings, and numbers.

//1. Syntax of for Loop

for (initialization; condition; update) {
  // Code to execute
}
/*
Initialization → Runs once before the loop starts (e.g., let i = 0).
Condition → Checked before each iteration (loop runs while true).
Update → Runs after each iteration (e.g., i++ to increase i).
*/
//2. Basic for Loop Example

for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

/*🔹 Output:

makefile
Copy
Edit
Iteration: 0
Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
*/

//For loop with template literal

for (let a = 0; a <= 10; a++) {
  console.log(`Counter is ${a} for the above for loops`);
}
