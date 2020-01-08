/* ----------------------------- Include Lodash ----------------------------- */
//? Import function from Lodash Library using Browserify
// Using require() syntax, originally for Node.js
var _ = require('lodash');
console.log(_);

//! ES6 Import is not supported yet, this requires Webpack:
// import { without } from 'lodash';
// console.log(without);

/* ----------------------------- Testing Lodash ----------------------------- */
let array = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('answer', _.without(array, 3));

/* ------------------------------ UI Selectors ------------------------------ */
var gradientDirection = document.querySelector('#gradient-direction');
var color1 = document.querySelector('#color-1');
var color2 = document.querySelector('#color-2');
var btnRandom = document.querySelector('#btn-random');
var cssGradient = document.querySelector('h3');

/* -------------------------------- Functions ------------------------------- */
function setGradientInUI(direction, color1, color2) {
    document.body.style.background = `linear-gradient(${direction}, ${color1}, ${color2})`;

    cssGradient.textContent = `linear-gradient(${direction}, ${color1}, ${color2})`;
}

function pickRandomDirection() {
    // HTML Collection of all direction options
    var htmlDirections = document.getElementsByClassName('direction');

    // Extract string values for gradient directions, from dropdown options...
    // and store in array 
    var strDirections = [];
    for (var i = 0; i < htmlDirections.length; i++) {
        strDirections.push(htmlDirections[i].value);
    }

    // Select random direction from the array
    var randomDirection = strDirections[Math.floor(Math.random() * strDirections.length)];

    // Set dropdown value to same as randomDirection
    gradientDirection.value = randomDirection;

    console.log(randomDirection); // REVIEW FOR TESTING

    return randomDirection;
}

function pickRandomColor() {
    // https://stackoverflow.com/questions/1484506/random-color-generator
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* ----------------------------- Event Handlers ----------------------------- */
function setGradient() {
    var direction = gradientDirection.value.toLowerCase();

    setGradientInUI(direction, color1.value, color2.value);
}

function generateRandomBg() {
    var direction = pickRandomDirection();
    color1.value = pickRandomColor();
    color2.value = pickRandomColor();

    setGradientInUI(direction, color1.value, color2.value);
}

/* ----------------------------- Event Listeners ---------------------------- */
document.addEventListener('DOMContentLoaded', generateRandomBg);
gradientDirection.addEventListener('change', setGradient);
color1.addEventListener('input', setGradient);
color2.addEventListener('input', setGradient);
btnRandom.addEventListener('click', generateRandomBg);