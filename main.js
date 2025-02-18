let num = 10369;

let dig1 = (num - (num % 10000)) / 10000;
let dig2 = ((num % 10000) - (num % 1000)) / 1000;
let dig3 = ((num % 1000) - (num % 100)) / 100;
let dig4 = ((num % 100) - (num % 10)) / 10;
let dig5 = num % 10;

console.log(`${dig1} ${dig2} ${dig3} ${dig4} ${dig5}`);