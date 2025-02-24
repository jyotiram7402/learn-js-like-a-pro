/**
 * ===============================
 * Set Data Structure in JavaScript
 * ===============================
 * A Set is a built-in JavaScript object that allows you to store unique values.
 * It does not allow duplicate entries and provides useful methods to manipulate the data.
 */

// ********** 1. Creating a Set **********
// Description: A Set can be initialized with values or created empty.
/*
const uniqueNumbers = new Set([1, 2, 3, 3, 4, 5]);
console.log(uniqueNumbers); // Output: Set { 1, 2, 3, 4, 5 }
*/

// ********** 2. Adding Values to a Set **********
// Description: Use `.add()` to insert new elements.
/*
const letters = new Set();
letters.add("A");
letters.add("B");
letters.add("C");
letters.add("A"); // Duplicate, ignored
console.log(letters); // Output: Set { 'A', 'B', 'C' }
*/

// ********** 3. Deleting Values from a Set **********
// Description: Use `.delete()` to remove specific elements.
/*
letters.delete("B");
console.log(letters); // Output: Set { 'A', 'C' }
*/

// ********** 4. Checking for Values in a Set **********
// Description: Use `.has()` to check if an element exists.
/*
console.log(letters.has("A")); // Output: true
console.log(letters.has("B")); // Output: false
*/

// ********** 5. Getting the Size of a Set **********
// Description: Use `.size` to get the number of elements in a Set.
/*
console.log(letters.size); // Output: 2
*/

// ********** 6. Looping Through a Set **********
// Description: Use `for-of` loop to iterate over Set values.
/*
for (let letter of letters) {
  console.log(letter);
}
// Output:
// A
// C
*/

/**
 * ===============================
 * Comparison: Set vs Array
 * ===============================
 * 1️⃣ **Uniqueness**: Set stores only unique values, while Arrays allow duplicates.
 * 2️⃣ **Performance**: Set operations (`add()`, `has()`, `delete()`) are faster than array operations like `includes()` for large datasets.
 * 3️⃣ **Indexing**: Arrays support indexed access (`array[0]`), whereas Sets do not.
 * 4️⃣ **Iteration**: Both can be looped using `for-of`, but Sets do not have a `map()` or `filter()` method.
 */

// ********** 7. Example: Removing Duplicates from an Array Using Set **********
/*
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbersArray = [...new Set(numbers)];
console.log(uniqueNumbersArray); // Output: [1, 2, 3, 4, 5]
*/

/**
 * ===============================
 * Advanced Set Operations
 * ===============================
 */

// ********** 8. Union of Two Sets **********
// Description: Combines two sets into one without duplicates.
/*
const setA = new Set([1, 2, 3]);
const setB = new Set([3, 4, 5]);
const unionSet = new Set([...setA, ...setB]);
console.log(unionSet); // Output: Set { 1, 2, 3, 4, 5 }
*/

// ********** 9. Intersection of Two Sets **********
// Description: Finds common elements between two sets.
/*
const intersectionSet = new Set([...setA].filter(x => setB.has(x)));
console.log(intersectionSet); // Output: Set { 3 }
*/

// ********** 10. Difference of Two Sets **********
// Description: Finds elements present in setA but not in setB.
/*
const differenceSet = new Set([...setA].filter(x => !setB.has(x)));
console.log(differenceSet); // Output: Set { 1, 2 }
*/

// ********** 11. Subset Check **********
// Description: Checks if setA is a subset of setB.
/*
const isSubset = [...setA].every(x => setB.has(x));
console.log(isSubset); // Output: false (setA is not fully contained in setB)
*/
