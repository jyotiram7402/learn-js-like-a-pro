// There is 5 falsy values in js : 0,'',undefined,null,NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(Boolean("Jonas"));

//Take an example

const money = 0;

if (money) {
  // In this line of code if statement indirectly check the wether money is falsy value or not . Actually is it falsy value thats why else bock is executed
  console.log("You have a money");
} else {
  console.log("You did not have much money");
}

//Below code leads to bug in our programme basically we defined height value to 0 which is valid but still it executed else block.
let height = 0;

if (height) {
  console.log("Yes Height is defined");
} else {
  console.log("Height is not defined yet");
}
