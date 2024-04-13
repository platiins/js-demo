/* request user's name, age, country of birth 
and display them in the console in different lines with different colors */

const userName = prompt("please enter your name:");

const userAge = prompt("please enter your age:");

const userCountry = prompt("please enter your country of birth:");

console.log(`info about you:

your name: ${userName}, 
your age: ${userAge},
your country of birth: ${userCountry}`);

// to display on screen

/* 

document.body.innerHTML = `<h1>info about you:</h1>
<ul>
    <li class="name">your name: ${userName}</li>
    <li class="age">your age: ${userAge}</li>
    <li class="country">your country of birth: ${userCountry}</li>
</ul>`; 

document.querySelector(".name").style.color = "red";
document.querySelector(".age").style.color = "green";
document.querySelector(".country").style.color = "blue";

*/
