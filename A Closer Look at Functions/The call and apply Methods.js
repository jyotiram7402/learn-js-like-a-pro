/*
========================================
 The Call and Apply Methods in JavaScript
========================================

 What are Call and Apply Methods?
 --------------------------------
 - Both `call` and `apply` are used to invoke a function with a specific `this` value.
 - They allow borrowing methods from other objects.
 - The difference is in how arguments are passed.
*/

/*
========================================
 Using the call() Method
========================================
 - `call` invokes a function and allows passing arguments one by one.
*/

const person1 = {
  name: "Alice",
};

const person2 = {
  name: "Bob",
};

function greet(age, city) {
  console.log(
    `Hello, my name is ${this.name}. I am ${age} years old and I live in ${city}.`
  );
}

greet.call(person1, 25, "New York");
// Output: Hello, my name is Alice. I am 25 years old and I live in New York.

greet.call(person2, 30, "Los Angeles");
// Output: Hello, my name is Bob. I am 30 years old and I live in Los Angeles.

/*
  ========================================
   Using the apply() Method
  ========================================
   - `apply` is similar to `call`, but it takes arguments as an array.
  */

greet.apply(person1, [25, "New York"]);
// Output: Hello, my name is Alice. I am 25 years old and I live in New York.

greet.apply(person2, [30, "Los Angeles"]);
// Output: Hello, my name is Bob. I am 30 years old and I live in Los Angeles.

/*
  ========================================
   Difference Between call() and apply()
  ========================================
   - `call` passes arguments individually.
   - `apply` passes arguments as an array.
  */

/*
  ========================================
   Summary
  ========================================
   - **call()**: Invokes a function with a specific `this` value and individual arguments.
   - **apply()**: Invokes a function with a specific `this` value and arguments as an array.
   - **Use Cases**: Method borrowing, function reusability, and dynamic function invocation.
  
  End of Documentation
  ========================================
  */
