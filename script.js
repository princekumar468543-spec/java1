const prompt = require("prompt-sync")()

let i = Number(prompt("Enter the number"))
for (let i =1; i<=100 ; i++){
    if(i%2===0){ 
        console.log(i);

    } 
}
    

let sum = 0;
for(i = 1 ; i<= 100 ; i++){
    sum = sum + i;
}
console.log(sum);


let a = 2;
for(i = 1 ; i<=10 ; i++){
    console.log( a * i);
}
    
   
for( let i = 100; i >= 1; i--){
    console.log(i);
}

let n = 4;
let fact = 1;
for ( let i = 1; i <= n; i++

) {
    fact = fact * i;
}
console.log(fact);



