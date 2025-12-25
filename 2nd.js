const prompt = require("prompt-sync")();
/*
let num = Number(prompt("Enter the number"));
for(let num = 2; num <= 100; num++){
let isprime = true;
    
        for(let i = 2; i <num; i++){
            if(num % i === 0){
                isprime = false;
                break;
            }
        }


if (isprime){
    console.log(num);
}
}
*/

let n= Number(prompt("enter the number"));
let isprime = true;

if(n <=1){
    isprime = false;
}else {
    for (let i = 2; i<n; i++){
        if (n % i === 0){
            isprime = false;
            break;
        }
    }
}

if (isprime){
    console.log("prime number");

}else{
    console.log("not prime number");
}