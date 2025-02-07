// Array Properties & Methods
//A) length Property (Find Array Size)

let cars = ["BMW", "Audi", "Tesla"];
console.log(cars.length); // 3

/*B) Adding & Removing Elements
Method	         Action	                           Example
push()	        Add to end	                       arr.push("New")
pop()	        Remove last item	               arr.pop()
unshift()	    Add to beginning	               arr.unshift("First")
shift()	        Remove first item	               arr.shift()
*/

let nums = [1, 2, 3];

nums.push(4); // [1, 2, 3, 4]
nums.pop(); // [1, 2, 3]
nums.unshift(0); // [0, 1, 2, 3]
nums.shift(); // [1, 2, 3]

//5. Looping Through an Array
//A) for Loop

let fruits = ["Apple", "Banana", "Cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//B) forEach() Method

fruits.forEach((fruit) => console.log(fruit));
//6. Checking if a Value Exists (includes())

let items = ["Pen", "Pencil", "Eraser"];
console.log(items.includes("Pencil")); // true
console.log(items.includes("Marker")); // false

//7. Converting Arrays to Strings (join())

let words = ["Hello", "World"];
console.log(words.join(" ")); // "Hello World"

/*
Why Use Arrays?
✅ Store multiple values in a single variable
✅ Easily access and modify elements
✅ Provide useful methods for data manipulation

*/
