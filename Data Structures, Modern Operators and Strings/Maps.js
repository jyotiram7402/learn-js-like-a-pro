/**
 * ===============================
 * Map Data Structure in JavaScript
 * ===============================
 * A Map is a built-in JavaScript object that allows you to store key-value pairs.
 * Unlike regular objects, Maps can have keys of any data type and maintain insertion order.
 */

// ********** 1. Creating a Map **********
// Description: A Map can be initialized with key-value pairs or created empty.
/*
const myMap = new Map();
myMap.set("name", "John");
myMap.set(1, "one");
myMap.set(true, "boolean");
console.log(myMap);
// Output: Map { 'name' => 'John', 1 => 'one', true => 'boolean' }
*/

// ********** 2. Getting Values from a Map **********
// Description: Use `.get()` to retrieve values based on keys.
/*
console.log(myMap.get("name")); // Output: John
console.log(myMap.get(1));      // Output: one
*/

// ********** 3. Checking for a Key **********
// Description: Use `.has()` to check if a key exists in the Map.
/*
console.log(myMap.has("name")); // Output: true
console.log(myMap.has("age"));  // Output: false
*/

// ********** 4. Deleting a Key-Value Pair **********
// Description: Use `.delete()` to remove a specific key-value pair.
/*
myMap.delete(1);
console.log(myMap); // Output: Map { 'name' => 'John', true => 'boolean' }
*/

// ********** 5. Getting the Size of a Map **********
// Description: Use `.size` to get the number of key-value pairs.
/*
console.log(myMap.size); // Output: 2
*/

// ********** 6. Looping Through a Map **********
// Description: Use `for-of` loop to iterate over key-value pairs.
/*
for (let [key, value] of myMap) {
  console.log(`${key}: ${value}`);
}
// Output:
// name: John
// true: boolean
*/

/**
 * ===============================
 * Advanced Map Operations
 * ===============================
 */

// ********** 7. Converting a Map to an Array **********
// Description: Use `Array.from()` to transform a Map into an array.
/*
const mapArray = Array.from(myMap);
console.log(mapArray);
// Output: [['name', 'John'], [true, 'boolean']]
*/

// ********** 8. Converting an Array to a Map **********
// Description: Convert an array of key-value pairs into a Map.
/*
const arr = [["age", 25], ["city", "New York"]];
const newMap = new Map(arr);
console.log(newMap);
// Output: Map { 'age' => 25, 'city' => 'New York' }
*/

// ********** 9. Clearing a Map **********
// Description: Use `.clear()` to remove all key-value pairs from a Map.
/*
newMap.clear();
console.log(newMap.size); // Output: 0
*/

// ********** 10. Using Objects as Keys **********
// Description: Unlike regular objects, Maps can have objects as keys.
/*
const objKey = { id: 1 };
myMap.set(objKey, "Object Value");
console.log(myMap.get(objKey)); // Output: Object Value
*/

// ********** 11. WeakMap in JavaScript **********
// Description: WeakMaps are similar to Maps but only allow objects as keys and do not prevent garbage collection.
/*
const weakMap = new WeakMap();
const obj = {};
weakMap.set(obj, "WeakMap Value");
console.log(weakMap.get(obj)); // Output: WeakMap Value
*/
