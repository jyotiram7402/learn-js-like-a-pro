/*
Introduction to Arrays in JavaScript
An array in JavaScript is a special variable that can hold multiple values in a single variable. Arrays make it easier to store and manage lists of data.
*/
//1. Creating an Array
//A) Using Brackets [] (Recommended)

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits); // ["Apple", "Banana", "Mango"]
//B) Using new Array() (Not Recommended)

let numbers = new Array(1, 2, 3, 4);
console.log(numbers); // [1, 2, 3, 4]
//✅ Prefer [] syntax for simplicity.

//2. Accessing Array Elements
//Array elements are accessed using index numbers (starting from 0).

let colors = ["Red", "Green", "Blue"];
console.log(colors[0]); // "Red"
console.log(colors[1]); // "Green"

//3. Modifying Array Elements

let animals = ["Dog", "Cat", "Rabbit"];
animals[1] = "Tiger"; // Change "Cat" to "Tiger"
console.log(animals); // ["Dog", "Tiger", "Rabbit"]
