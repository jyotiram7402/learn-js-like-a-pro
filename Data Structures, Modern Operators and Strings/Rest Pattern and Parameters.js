/**
 * ===============================
 * Rest Pattern and Rest Parameters in JavaScript
 * ===============================
 * The rest pattern collects multiple elements into an array or object.
 * It is the opposite of the spread operator, which expands elements.
 */

// ********** 1. Rest Pattern in Arrays **********
// Description: Extracting the first few elements and collecting the rest into an array.
/*
const numbers = [1, 2, 3, 4, 5, 6];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5, 6]
*/

// ********** 2. Rest Pattern in Objects **********
// Description: Extracting some properties and collecting the remaining into an object.
/*
const person = { name: "Alice", age: 25, city: "New York", country: "USA" };
const { name, age, ...address } = person;
console.log(name); // Output: Alice
console.log(age); // Output: 25
console.log(address); // Output: { city: "New York", country: "USA" }
*/

// ********** 3. Rest Parameters in Functions **********
// Description: Collecting multiple arguments as an array using rest parameters.
/*
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(5, 10, 15)); // Output: 30
console.log(sum(1, 2, 3, 4, 5)); // Output: 15
*/

// ********** 4. Combining Named Parameters with Rest Parameters **********
// Description: Handling named parameters while collecting the rest.
/*
function greet(firstName, lastName, ...titles) {
  console.log(`Hello, ${firstName} ${lastName}`);
  console.log(`Titles:`, titles);
}
greet("John", "Doe", "Engineer", "Developer", "Mentor");
// Output:
// Hello, John Doe
// Titles: ["Engineer", "Developer", "Mentor"]
*/

/**
 * ===============================
 * Key Differences: Spread vs. Rest
 * ===============================
 * | Feature  | Spread (`...`) | Rest (`...`) |
 * |----------|--------------|-------------|
 * | **Usage** | Expands elements | Collects elements |
 * | **Used in** | Arrays, Objects, Function calls | Arrays, Objects, Function parameters |
 * | **Example** | `const arr = [...arr1, ...arr2]` | `const [first, ...rest] = arr` |
 *
 * ===============================
 * Summary
 * ===============================
 * ✅ The **rest pattern** collects remaining elements in **arrays or objects**.
 * ✅ **Rest parameters** allow functions to accept **multiple arguments**.
 * ✅ It is the **opposite** of the **spread operator**.
 */
