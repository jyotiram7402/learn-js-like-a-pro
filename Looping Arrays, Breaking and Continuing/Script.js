//Looping Through Arrays, Breaking, and Continuing in JavaScript
//In JavaScript, we can loop through arrays using different methods like for loop, forEach(), for...of, and we can use break to stop a loop or continue to skip an iteration.

//1. Looping Through an Array
//A) Using for Loop (Index-Based Loop)

let fruits = ["Apple", "Banana", "Mango", "Orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
/*
🔹 Output:

Apple
Banana
Mango
Orange
*/
//B) Using forEach() Method (Recommended for Simplicity)

fruits.forEach((fruit, index) => {
  console.log(index + ": " + fruit);
});
/*
🔹 Output:


0: Apple
1: Banana
2: Mango
3: Orange
*/
//✅ Best when you don’t need to modify the array.

//C) Using for...of Loop (ES6, Best for Simplicity)

for (let fruit of fruits) {
  console.log(fruit);
}
/*🔹 Output:


Apple
Banana
Mango
Orange
*/
//✅ Best for iterating over array values directly.

//2. Breaking Out of a Loop (break)
//The break statement stops the loop immediately.

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Mango") {
    console.log("Mango found! Stopping loop.");
    break; // Stop loop when "Mango" is found
  }
  console.log(fruits[i]);
}
/*
🔹 Output:

pgsql
Copy
Edit
Apple
Banana
Mango found! Stopping loop.
*/
//✅ Useful when searching for an item in a list and stopping once found.

//3. Skipping an Iteration (continue)
//The continue statement skips the current iteration and moves to the next one.

for (let i = 0; i < fruits.length; i++) {
  if (fruits[i] === "Banana") {
    console.log("Skipping Banana");
    continue; // Skip "Banana"
  }
  console.log(fruits[i]);
}
/*
🔹 Output:

mathematica
Copy
Edit
Apple
Skipping Banana
Mango
Orange
*/
//✅ Best when filtering out specific values while looping.

//4. Using forEach() with break and continue Alternative
//forEach() does not support break or continue directly, but you can use return to skip an iteration.

fruits.forEach((fruit) => {
  if (fruit === "Banana") {
    console.log("Skipping Banana");
    return; // Equivalent to continue
  }
  console.log(fruit);
});

/*

Loop Type	            Best Use Case

for loop	           When you need an index or modify elements
forEach()	           When you need to execute a function for each item
for...of	           When you only need the values, not the index
break	               To stop a loop early
continue	           To skip an iteration

*/
