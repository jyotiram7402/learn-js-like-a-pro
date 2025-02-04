//JavaScript switch Statement
//The switch statement in JavaScript is used for conditional branching, similar to if-else. It evaluates an expression and executes code based on matching case values.

//Syntax of switch

switch (expression) {
  case value1:
    // Code to execute if expression === value1
    break;
  case value2:
    // Code to execute if expression === value2
    break;
  default:
  // Code to execute if no case matches
}

//Example: Finding the Day of the Week
let dayNumber = new Date().getDay(); // Returns 0 (Sunday) to 6 (Saturday)

switch (dayNumber) {
  case 0:
    console.log("Sunday");
    break;
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  default:
    console.log("Invalid day");
}

//Example: Handling Weekdays and Weekends

let day = "Saturday";

switch (day) {
  case "Monday":
  case "Tuesday":
  case "Wednesday":
  case "Thursday":
  case "Friday":
    console.log(day + " is a Weekday.");
    break;
  case "Saturday":
  case "Sunday":
    console.log(day + " is a Weekend.");
    break;
  default:
    console.log("Invalid day!");
}

//When to Use switch vs. if-else
//Use switch when comparing one variable against multiple possible values.
//Use if-else when dealing with ranges or complex conditions.
