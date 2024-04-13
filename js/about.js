/* request user's name, age, country of birth 
and display them in the console in different lines with different colors */

const userName = prompt("please enter your name:");

const userAge = prompt("please enter your age:");

const userCountry = prompt("please enter your country of birth:");

console.log(`%cyour name: ${userName}`, "color:green");
console.log(`%cyour age: ${userAge}`, "color:lightblue");
console.log(`%cyour country: ${userCountry}`, "color:red");
