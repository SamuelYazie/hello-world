'use strict'

import { onEvent, select, selectById, selectAll, print } from "./utility.js";

const codingSound = selectById('coding-Sound');
let userName;
userName = window.prompt("What is your name?");
print(`Hello to the world of coding ${userName}`);

let title = selectById('main-title');
title.innerText = `Hello to the world of coding ${userName}`;

document.fonts.ready.then(() => {
    title.classList.add('typing-effect');
});

onEvent('click', document, () => {
    codingSound.play();
    codingSound.volume = 0.8;
});

print("Hello world");

let greeting = "Hello, World!";
print(greeting);

let name = "Samuel";
print(`Hello world, my name is ${name}`);