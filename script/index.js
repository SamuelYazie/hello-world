'use strict'

const codingSound = document.getElementById('coding-Sound');
let userName;
userName = window.prompt("What is your name?");
console.log(`Hello to the world of coding ${userName}`);

let title = document.getElementById('main-title');
title.innerText = `Hello to the world of coding ${userName}`;

document.addEventListener('click', () => {
    codingSound.play();
    codingSound.volume = 0.8;
});

console.log("Hello world");

let greeting = "Hello, World!";
console.log(greeting);

let name = "Samuel";
console.log(`Hello world, my name is ${name}`);