//Looping Backwards and Nested Loops in JavaScript
//1. Looping Backwards in an Array
//To loop backwards, we start from the last index (array.length - 1) and decrement (i--).

//Example: Looping Backwards Using for Loop

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
/*
🔹 Output:

mathematica
Copy
Edit
Orange
Mango
Banana
Apple
✅ Useful when you need to process items from end to start.
*/

//2. Looping Backwards Using forEach() Alternative
//The forEach() method doesn’t support reverse looping directly, but you can reverse the array first.

fruits
  .slice()
  .reverse()
  .forEach((fruit) => console.log(fruit));
//✅ slice() prevents modifying the original array.

//3. Nested Loops (Loops Inside Loops)
//A nested loop is a loop inside another loop. The inner loop runs fully for each iteration of the outer loop.

//Example 1: Multiplication Table (Nested for Loop)

for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`i: ${i}, j: ${j}`);
  }
}
/*
🔹 Output:

yaml
Copy
Edit
i: 1, j: 1
i: 1, j: 2
i: 1, j: 3
i: 2, j: 1
i: 2, j: 2
i: 2, j: 3
i: 3, j: 1
i: 3, j: 2
i: 3, j: 3
✅ Best for working with tables, grids, and multi-dimensional data.
*/

//Example 2: Looping Through a 2D Array

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
/*
🔹 Output:

Copy
Edit
1 2 3
4 5 6
7 8 9
✅ Used for working with multi-dimensional arrays like grids or tables.
*/

//Example 3: Pyramid Pattern (Nested Loop with *)

let n = 5;
for (let i = 1; i <= n; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
/*
🔹 Output:

markdown
Copy
Edit
* 
* * 
* * * 
* * * * 
* * * * * 
✅ Nested loops are useful for pattern printing and calculations.
*/

/*
Summary
Concept	Use Case

Looping Backwards	Process data in reverse order
Nested for Loops	Work with multi-dimensional data
Nested forEach()	Iterating over an array inside an array
Pattern Printing	Building shapes like pyramids
*/
