//Object Methods (Functions Inside Objects)

let user = {
  name: "Alice",
  greet: function () {
    return "Hello, " + this.name + "!";
  },
};

console.log(user.greet()); // "Hello, Alice!"
//🔹 this refers to the current object.

//6. Looping Through an Object (for...in)

for (let key in person) {
  console.log(key + ": " + person[key]);
}
//7. Checking if a Property Exists (hasOwnProperty)

console.log(person.hasOwnProperty("name")); // true
console.log(person.hasOwnProperty("salary")); // false
/*
Why Use Objects?
✅ Store structured data
✅ Access and modify values easily
✅ Group related data and functions

*/
