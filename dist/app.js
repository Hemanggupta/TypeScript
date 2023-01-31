"use strict";
let Uname = "Hemang";
{
    let Uname = "Gupta";
}
console.log(Uname);
const add = (num1, num2) => num1 + num2;
const sum = (a, b = 5) => console.log(a + b);
sum(5, 5);
