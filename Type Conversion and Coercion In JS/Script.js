console.log("All Working Fine ");

//Type Conversion

const inputYear = "1991";
console.log(inputYear);
console.log(typeof inputYear);
console.log(inputYear + 10);
console.log(Number(inputYear) + 18); // Number() is function is used  convert String into the number
// Below line of code is Bit Confusing but Understand It
console.log(Number("Jonas")); // Here We are Trying to convert String into number which is bad practice it return NaN as Output

//Type Coercion ~ Automatically type conversion

console.log("I am " + 23 + " year old"); // In the line of code js convert number to string thats mean 23 is convert into string
console.log("I am " + "23" + " year old");

//both above line of code is same

// Output of the below line of code is very intreating

console.log("23" - "10" - 3); //output is 10

/* Why is 10 as output i explain it
 what is happen here is minus operator act as opposite to the plus operator  convert the string into number 
 thats means 23-10=13 and now 13 is number now 13-3=10  */

console.log("23" + "10" + 3); //Output is --> 23103
console.log("23" * "2"); //output is --->46

//Play a game -- Guess the Number

let n = "1" + 1;
n = n - 1;
console.log(n);
