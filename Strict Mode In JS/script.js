//1. Enabling Strict Mode
//Strict mode is activated using the "use strict"; directive at the beginning of a script or function.

//Global Strict Mode (Applied to Entire Script)

"use strict";

x = 10; // ❌ Error: x is not declared
console.log(x);
//Without strict mode, JavaScript would create x as a global variable. With strict mode, it throws an error.

//Function-Level Strict Mode

function myFunction() {
  "use strict";
  y = 5; // ❌ Error: y is not declared
}
myFunction();
//Strict mode only applies inside myFunction() in this case.

//2. Key Features & Benefits of Strict Mode
//A) Prevents Accidental Global Variables

("use strict");
num = 100; // ❌ ReferenceError: num is not defined
//Without strict mode, num would be a global variable.

//B) Prevents Duplicate Parameter Names

("use strict");
function add(a, a) {
  // ❌ SyntaxError: Duplicate parameter name
  return a + a;
}
//C) Prevents Writing to Read-Only Properties

("use strict");
const obj = Object.freeze({ name: "John" });
obj.name = "Doe"; // ❌ TypeError: Cannot assign to read-only property
//D) Prevents Deleting Non-Deletable Properties

("use strict");
delete Object.prototype; // ❌ TypeError: Cannot delete property
//E) this in Functions Defaults to undefined Instead of window

("use strict");
function show() {
  console.log(this); // undefined (instead of window in non-strict mode)
}
show();

/*
3. When to Use Strict Mode?

Always in new projects for better security & debugging.
When working with ES6 modules (they use strict mode by default).
Avoid in legacy code if it might break existing functionality.
Would you like more examples or deeper explanations on strict mode? 🚀 */
