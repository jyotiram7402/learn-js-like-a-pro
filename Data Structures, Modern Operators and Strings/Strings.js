/**
 * =====================================================
 * Strings in JavaScript - A Detailed Explanation
 * =====================================================
 * Strings in JavaScript are used to represent text and are a fundamental data type.
 * They can be created using single quotes (' '), double quotes (" "), or template literals (` `).
 */

// ********** 1. Creating Strings **********
// Description: Strings can be created in different ways.
/*
const str1 = "Hello, World!";
const str2 = 'JavaScript Strings';
const str3 = `Template Literals`;
console.log(str1, str2, str3);
*/

// ********** 2. String Length **********
// Description: Use `.length` property to get the length of a string.
/*
const text = "Hello";
console.log(text.length); // Output: 5
*/

// ********** 3. Accessing Characters **********
// Description: Use bracket notation or `.charAt()` to access characters.
/*
console.log(text[0]);      // Output: H
console.log(text.charAt(1)); // Output: e
*/

// ********** 4. Changing Case **********
// Description: Use `.toUpperCase()` and `.toLowerCase()`.
/*
console.log(text.toUpperCase()); // Output: HELLO
console.log(text.toLowerCase()); // Output: hello
*/

// ********** 5. Searching in Strings **********
// Description: Methods to find substrings.
/*
console.log(text.indexOf("l"));      // Output: 2 (first occurrence)
console.log(text.lastIndexOf("l")); // Output: 3 (last occurrence)
console.log(text.includes("Hell")); // Output: true
*/

// ********** 6. Extracting Parts of a String **********
// Description: Methods for substring extraction.
/*
console.log(text.slice(0, 3));   // Output: Hel
console.log(text.substring(0, 3)); // Output: Hel
console.log(text.substr(1, 3));  // Output: ell (deprecated)
*/

// ********** 7. Replacing Text **********
// Description: `.replace()` and `.replaceAll()`
/*
let message = "Hello World!";
console.log(message.replace("World", "JavaScript")); // Output: Hello JavaScript!
console.log(message.replaceAll("l", "x")); // Output: Hexxo Worxd!
*/

// ********** 8. Splitting Strings **********
// Description: Convert a string into an array.
/*
const sentence = "JavaScript is awesome";
console.log(sentence.split(" ")); // Output: ["JavaScript", "is", "awesome"]
*/

// ********** 9. Trimming Strings **********
// Description: Remove whitespace using `.trim()`, `.trimStart()`, `.trimEnd()`
/*
const spacedText = "  Hello!  ";
console.log(spacedText.trim()); // Output: "Hello!"
console.log(spacedText.trimStart()); // Output: "Hello!  "
console.log(spacedText.trimEnd()); // Output: "  Hello!"
*/

// ********** 10. String Concatenation **********
// Description: Use `+`, `.concat()`, or template literals.
/*
const part1 = "Hello";
const part2 = "World";
console.log(part1 + " " + part2); // Output: Hello World
console.log(part1.concat(" ", part2)); // Output: Hello World
console.log(`${part1} ${part2}`); // Output: Hello World
*/

// ********** 11. Repeat Strings **********
// Description: Repeat a string multiple times.
/*
console.log("Hello ".repeat(3)); // Output: Hello Hello Hello 
*/

// ********** 12. Escaping Characters **********
// Description: Use backslash `\` to escape characters.
/*
console.log("She said, \"JavaScript is fun!\""); // Output: She said, "JavaScript is fun!"
*/

// ********** 13. Template Literals **********
// Description: Allow multi-line strings and expressions inside strings.
/*
const name = "John";
const greeting = `Hello, ${name}!`;
console.log(greeting); // Output: Hello, John!
*/

/**
 * =====================================================
 * Conclusion
 * =====================================================
 * Strings are a crucial part of JavaScript programming.
 * Understanding their methods allows for powerful text manipulation.
 */
