/*
========================================
 The bind() Method in JavaScript
========================================

 What is the bind() Method?
 --------------------------
 - The `bind()` method creates a new function that, when called, has its `this` keyword set to a specified value.
 - Unlike `call()` and `apply()`, `bind()` does not immediately invoke the function. Instead, it returns a new function that can be executed later.
 - It is useful when dealing with event handlers and function borrowing.
*/

/*
========================================
 Example: Using bind() to Set `this` Value
========================================
*/

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, my name is ${this.name}.`);
  },
};

const greetFunction = person.greet;
greetFunction(); // Output: Hello, my name is undefined. (or error in strict mode)

const boundGreet = person.greet.bind(person);
boundGreet(); // Output: Hello, my name is Alice.

/*
  ========================================
   Using bind() with Function Arguments
  ========================================
   - `bind()` can also pre-set arguments for the function.
  */

function introduce(age, city) {
  console.log(
    `My name is ${this.name}, I am ${age} years old and I live in ${city}.`
  );
}

const introduceAlice = introduce.bind(person, 25, "New York");
introduceAlice(); // Output: My name is Alice, I am 25 years old and I live in New York.

/*
  ========================================
   Using bind() in Event Listeners
  ========================================
   - The `this` keyword inside event listeners often refers to the element triggering the event.
   - `bind()` helps attach methods to the correct object.
  */

const button = document.createElement("button");
button.textContent = "Click Me";
document.body.appendChild(button);

const eventHandler = {
  message: "Button clicked!",
  handleClick: function () {
    console.log(this.message);
  },
};

button.addEventListener("click", eventHandler.handleClick.bind(eventHandler));
// Without bind, `this` would refer to the button element, causing `undefined`.

/*
  ========================================
   Summary
  ========================================
   - `bind()` returns a new function with a specific `this` value.
   - It does not immediately execute the function.
   - It is useful for preserving `this` in callbacks and event listeners.
   - It can pre-set function arguments.
  
  End of Documentation
  ========================================
  */
