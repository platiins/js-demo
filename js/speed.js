const distance = prompt("please enter a distance between the two cities (km):");

const time = prompt(
  "please enter a time you want to cover the distance within:"
);

let speed = distance / time;

document.body.innerHTML = `<h1>to be on time you should move with the speed ${speed} km/h</h1>`;
