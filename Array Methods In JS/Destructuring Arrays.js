//  Arrays in JavaScript
//Destructuring allows you to unpack values from arrays and assign them to variables in a clean and readable way.

/*
1. Basic Syntax

const arr = [1, 2, 3];

const [a, b, c] = arr; // Destructuring
console.log(a, b, c); // Output: 1 2 3
//✅ Instead of arr[0], arr[1], and arr[2], we assign values directly to variables.

*/

/*
2. Skipping Elements
You can skip elements using , (comma).

const numbers = [10, 20, 30, 40];

const [first1, , third3] = numbers;
console.log(first1, third3); // Output: 10 30
//✅ The second value (20) is skipped.
*/

/*
3. Default Values
If an array has fewer values, you can assign default values.

const colors = ["Red"];
const [primary, secondary = "Blue"] = colors;
console.log(primary, secondary); // Output: Red Blue
//✅ If secondary is undefined, it takes "Blue" as a default value.
*/

/*
4. Swapping Variables
Destructuring makes swapping easy.

let x = 5,
  y = 10;

[x, y] = [y, x]; // Swap values
console.log(x, y); // Output: 10 5
//✅ No need for a temporary variable!
*/

/*
5. Destructuring from a Function Return

function getScores() {
  return [90, 80, 70];
}

const [math, science, english] = getScores();
console.log(math, science, english); // Output: 90 80 70
//✅ Perfect for handling function return values.

*/

/*
6. Nested Destructuring
//You can destructure nested arrays.

const nestedArray = [1, [2, 3]];

const [first, [second, third]] = nestedArray;
console.log(first, second, third); // Output: 1 2 3
//✅ Works well for multidimensional data.
*/

//7. Rest Operator (...) for Remaining Elements

const names = ["Alice", "Bob", "Charlie", "David"];

const [first11, second22, ...rest] = names;
console.log(first11, second22); // Output: Alice Bob
console.log(rest); // Output: ["Charlie", "David"]
//✅ rest contains remaining elements as an array.

/*
Summary
Feature	Example	Use Case
Basic Destructuring	[a, b] = [1, 2]	Assigning values easily
Skipping Values	[a, , c] = [1, 2, 3]	Ignore unwanted elements
Default Values	[a = 5] = []	Set fallback values
Swapping Variables	[a, b] = [b, a]	Swap without extra variable
Function Return Destructuring	[a, b] = getValues()	Extract multiple values from functions
Nested Arrays	[a, [b, c]] = [1, [2, 3]]	Handle multidimensional data
Rest Operator	[a, ...rest] = [1, 2, 3]	Collect remaining elements 
*/
