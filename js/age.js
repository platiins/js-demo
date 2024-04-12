const currentYear = "2023";

const birthYear = prompt("please enter the year of birth:");

let userAge = currentYear - birthYear;

document.body.innerHTML = `<h1> you are ${userAge} years old</h1>`;
