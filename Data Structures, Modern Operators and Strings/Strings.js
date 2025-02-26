/*
========================================
 JavaScript Strings - Detailed Documentation
========================================

What is a String in JavaScript?
--------------------------------
A string in JavaScript is a sequence of characters used to represent text. It is one of the primitive data types and is enclosed in either single quotes (' '), double quotes (" "), or backticks (` `).

Example:
*/

const str1 = "Hello, World!";
const str2 = 'JavaScript is awesome!';
const str3 = `This is a template literal.`;

/*
========================================
 1. Accessing Characters in a String
========================================
*/

// charAt(index) - Returns the character at the specified index.
console.log(str1.charAt(7)); // Output: "W"

// charCodeAt(index) - Returns the Unicode of the character at the specified index.
console.log(str1.charCodeAt(7)); // Output: 87

// codePointAt(index) - Returns the Unicode code point at the specified position.
console.log("😊".codePointAt(0)); // Output: 128522

/*
========================================
 2. String Comparison
========================================
*/

// localeCompare(compareString) - Compares two strings in the current locale.
console.log("réservé".localeCompare("reserve")); // Output: 1 (or another positive number)

/*
========================================
 3. Searching Within a String
========================================
*/

const text = "JavaScript is awesome!";

// indexOf(searchValue) - Finds the first occurrence of a substring.
console.log(text.indexOf("is")); // Output: 11

// lastIndexOf(searchValue) - Finds the last occurrence of a substring.
console.log(text.lastIndexOf("e")); // Output: 20

// includes(searchString) - Checks if a string contains a specific substring.
console.log(text.includes("Java")); // Output: true

// startsWith(searchString) - Checks if a string starts with a specific substring.
console.log(text.startsWith("Java")); // Output: true

// endsWith(searchString) - Checks if a string ends with a specific substring.
console.log(text.endsWith("!")); // Output: true

/*
========================================
 4. Extracting Substrings
========================================
*/

// slice(beginIndex, endIndex) - Extracts a portion of the string.
console.log(text.slice(0, 10)); // Output: "JavaScript"

// substring(start, end) - Extracts characters between two indices.
console.log(text.substring(4, 10)); // Output: "Script"

/*
========================================
 5. Modifying and Combining Strings
========================================
*/

// concat(...strings) - Combines two or more strings.
console.log(str1.concat(" ", str2)); // Output: "Hello, World! JavaScript is awesome!"

// replace(searchFor, replaceWith) - Replaces the first occurrence of a substring.
console.log(str1.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

// replaceAll(searchFor, replaceWith) - Replaces all occurrences of a substring.
console.log("Hello, Hello!".replaceAll("Hello", "Hi")); // Output: "Hi, Hi!"

// toUpperCase() - Converts a string to uppercase.
console.log(str1.toUpperCase()); // Output: "HELLO, WORLD!"

// toLowerCase() - Converts a string to lowercase.
console.log(str1.toLowerCase()); // Output: "hello, world!"

/*
========================================
 6. Removing Whitespace
========================================
*/

const spaced = "   Hello, World!   ";

// trim() - Removes whitespace from both ends.
console.log(spaced.trim()); // Output: "Hello, World!"

// trimStart() - Removes whitespace from the start.
console.log(spaced.trimStart()); // Output: "Hello, World!   "

// trimEnd() - Removes whitespace from the end.
console.log(spaced.trimEnd()); // Output: "   Hello, World!"

/*
========================================
 7. Padding Strings
========================================
*/

// padStart(targetLength, padString) - Pads the start of a string.
console.log("5".padStart(3, "0")); // Output: "005"

// padEnd(targetLength, padString) - Pads the end of a string.
console.log("5".padEnd(3, "0")); // Output: "500"

/*
========================================
 8. Splitting Strings
========================================
*/

const csv = "apple,banana,grape";

// split(separator) - Splits a string into an array.
console.log(csv.split(",")); // Output: ["apple", "banana", "grape"]

/*
========================================
 9. Repeating Strings
========================================
*/

// repeat(count) - Repeats the string a specified number of times.
console.log("Hello ".repeat(3)); // Output: "Hello Hello Hello "

/*
========================================
 10. Template Literals
========================================
*/

const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: "Hello, John!"

/*
========================================
 More Methods in Latest JavaScript Releases
========================================
*/

// matchAll(regex) - Returns an iterator of all matched substrings.
const regex = /[aeiou]/g;
console.log([..."JavaScript".matchAll(regex)]); // Output: Array of matched vowels

// normalize(form) - Normalizes Unicode text.
console.log("café".normalize("NFD")); // Output: "café"

// at(index) - Gets the character at a given index (including negative indices).
console.log("Hello".at(-1)); // Output: "o"

/*
========================================
 End of Documentation
========================================
*/
