/**
 * ===============================
 * Object Destructuring in JavaScript
 * ===============================
 * Destructuring allows you to extract properties from objects
 * and assign them to variables in a clean and readable way.
 */

// ********** 1. Basic Object Destructuring **********
// Description: Extract properties from an object directly into variables.

const person = {
  name: "John",
  age: 30,
  city: "New York",
};

const { name, age, city } = person;
console.log(name); // Output: John
console.log(age); // Output: 30
console.log(city); // Output: New York

// ********** 2. Using a Different Variable Name **********
// Description: You can rename variables while destructuring using :.
/*
const user = {
    firstName: "Alice",
    lastName: "Smith",
    country: "USA"
};

const { firstName: fName, lastName: lName, country: location } = user;
console.log(fName);    // Output: Alice
console.log(lName);    // Output: Smith
console.log(location); // Output: USA
*/

// ********** 3. Default Values **********
// Description: Assign default values if a property is missing or undefined.
/*
const employee = {
    id: 101,
    department: "IT"
};

const { id, department, salary = 50000 } = employee;
console.log(id);        // Output: 101
console.log(department);// Output: IT
console.log(salary);    // Output: 50000 (default value)
*/

// ********** 4. Nested Object Destructuring **********
// Description: Extract properties from nested objects directly.
/*
const student = {
    fullName: "Emma Watson",
    marks: {
        math: 90,
        science: 85
    }
};

const { fullName, marks: { math, science } } = student;
console.log(fullName); // Output: Emma Watson
console.log(math);     // Output: 90
console.log(science);  // Output: 85
*/

// ********** 5. Destructuring in Function Parameters **********
// Description: Extract object properties directly in function parameters for cleaner code.
/*
function displayUser({ name, age }) {
    console.log(`Name: ${name}, Age: ${age}`);
}

const user = { name: "David", age: 28 };
displayUser(user);  // Output: Name: David, Age: 28
*/

// ********** 6. Rest Operator with Destructuring **********
// Description: Use the rest operator (...) to collect remaining properties.
/*
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "White"
};

const { brand, model, ...rest } = car;
console.log(brand); // Output: Toyota
console.log(model); // Output: Camry
console.log(rest);  // Output: { year: 2022, color: 'White' }
*/

// ********** 7. Destructuring in an Array of Objects **********
// Description: Loop through an array of objects and destructure each object.
/*
const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];

for (const { id, name } of users) {
    console.log(`ID: ${id}, Name: ${name}`);
}
*/

// ********** 8. Destructuring Objects from Function Returns **********
// Description: Functions that return objects can be easily destructured.
/*
function getProduct() {
    return { product: "Laptop", price: 1200 };
}

const { product, price } = getProduct();
console.log(product); // Output: Laptop
console.log(price);   // Output: 1200
*/
