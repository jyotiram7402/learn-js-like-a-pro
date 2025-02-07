//The while Loop in JavaScript
//The while loop executes a block of code repeatedly as long as the condition is true.

//1. Syntax

while (condition) {
  // Code to execute
}

//Condition is checked before each iteration.
//If the condition is false, the loop stops.
//2. Basic Example

let i = 1;
while (i <= 5) {
  console.log("Iteration: " + i);
  i++; // Increment to avoid infinite loop
}
/*
🔹 Output:

Iteration: 1
Iteration: 2
Iteration: 3
Iteration: 4
Iteration: 5
✅ Use while when you don't know the exact number of iterations.
*/

//3. Using while Loop to Loop Through an Array

let fruits = ["Apple", "Banana", "Mango"];
let index = 0;

while (index < fruits.length) {
  console.log(fruits[index]);
  index++;
}
/*
🔹 Output:

Apple
Banana
Mango
*/

//4. while Loop with break
//The break statement stops the loop immediately.

let num1 = 1;
while (num1 <= 10) {
  if (num1 === 5) {
    console.log("Stopping at 5");
    break;
  }
  console.log(num1);
  num1++;
}
/*
🔹 Output:

1
2
3
4
Stopping at 5
*/
//5. while Loop with continue
//The continue statement skips the current iteration and moves to the next one.

let count = 0;
while (count < 5) {
  count++;
  if (count === 3) {
    console.log("Skipping 3");
    continue;
  }
  console.log(count);
}
/*
🔹 Output:

1
2
Skipping 3
4
5
6. Infinite Loop (Be Careful!)
A wrong condition or missing update can cause an infinite loop, crashing the browser.
*/

let x = 1;
while (x > 0) {
  // This never becomes false
  console.log(x);
  // Missing x-- (decrement)
}
//🔴 Always ensure your loop has a way to exit!

//7. do...while Loop (Runs at Least Once)
//The do...while loop executes the code block once before checking the condition.

let num = 5;
do {
  console.log("Number:", num);
  num++;
} while (num < 3); // Condition is false, but it runs once
/*
🔹 Output:
Number: 5
✅ Use do...while when you want the loop to run at least once.
*/

/*
Summary
Loop Type	Best Use Case
while loop	When the number of iterations is unknown
do...while loop	When at least one execution is required
break	To exit the loop early
continue	To skip an iteration
*/
