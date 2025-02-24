/**
 * ============================================
 * Summary: Which Data Structure to Use in JavaScript?
 * ============================================
 * JavaScript provides several data structures, each suited for different use cases.
 * Here’s a comparison with examples and when to use each.
 */

/**
 * 1️⃣ Arrays (Ordered List of Items)
 * --------------------------------
 * ✅ Use Case: When you need an ordered collection of elements, allowing duplicates.
 * ✅ Best For: Storing lists, iterating, and performing operations like sorting & filtering.
 */
/*
const fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango"); // Adding an item
console.log(fruits.includes("Banana")); // Output: true
*/

/**
 * 2️⃣ Objects (Key-Value Pairs)
 * --------------------------------
 * ✅ Use Case: When you need a structure with named properties.
 * ✅ Best For: Storing structured data and quick lookup operations.
 */
/*
const user = { name: "Alice", age: 25, city: "New York" };
console.log(user.age); // Output: 25
*/

/**
 * 3️⃣ Maps (Ordered Key-Value Pairs)
 * --------------------------------
 * ✅ Use Case: When you need key-value pairs where keys can be any type.
 * ✅ Best For: Fast lookups, maintaining key order, and storing unique keys.
 */
/*
const map = new Map();
map.set("name", "Bob");
map.set(1, "One");
console.log(map.get(1)); // Output: One
*/

/**
 * 4️⃣ Sets (Unique Values)
 * --------------------------------
 * ✅ Use Case: When you need a collection of unique values.
 * ✅ Best For: Removing duplicates, quick existence checks, and set operations.
 */
/*
const set = new Set([1, 2, 3, 3, 4]);
console.log(set.has(3)); // Output: true
console.log([...set]); // Output: [1, 2, 3, 4]
*/

/**
 * 5️⃣ WeakMap (Garbage Collection-Friendly Maps)
 * --------------------------------
 * ✅ Use Case: When you need key-value pairs where keys should be objects and can be garbage-collected.
 * ✅ Best For: Storing private data for objects without preventing garbage collection.
 */
/*
const weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "Secret");
console.log(weakMap.get(obj)); // Output: Secret
*/

/**
 * 6️⃣ WeakSet (Garbage Collection-Friendly Sets)
 * --------------------------------
 * ✅ Use Case: When you need a set that holds only objects and allows garbage collection.
 * ✅ Best For: Keeping track of objects without preventing their deletion.
 */
/*
const weakSet = new WeakSet();
let obj2 = {};
weakSet.add(obj2);
console.log(weakSet.has(obj2)); // Output: true
*/

/**
 * ============================================
 * Choosing the Right Data Structure:
 * ============================================
 * ✅ Use Arrays when order matters and duplicates are allowed.
 * ✅ Use Objects for structured key-value storage and fast lookups.
 * ✅ Use Maps for ordered key-value pairs with non-string keys.
 * ✅ Use Sets to store unique values and remove duplicates.
 * ✅ Use WeakMaps/WeakSets for objects that should be garbage-collectable.
 */
