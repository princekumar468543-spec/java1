const prompt = require("prompt-sync")()
/*
let i = Number(prompt("Enter the number"))
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);

    }
}


let sum = 0;
for (i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log(sum);


let a = 2;
for (i = 1; i <= 10; i++) {
    console.log(a * i);
}


for (let i = 100; i >= 1; i--) {
    console.log(i);
}

let n = 4;
let fact = 1;
for (let i = 1; i <= n; i++

) {
    fact = fact * i;
}
console.log(fact);


let z = Number(prompt("Enter the Number"));
let sum = 0;
while (z > 0) {
    sum = sum + (z % 10);
    z = Math.floor(z / 10);
}

console.log(sum);
*/

let y = Number(prompt("Enter the Number"));
let count = 0;
while (y > 0) {
    count++;
    y = Math.floor(y / 10);
}

console.log(count);






