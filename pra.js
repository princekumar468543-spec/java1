/*
abcd();
function abcd (){

}

// function decleration hosting hoti ha 

let abcd = function(){

}
// function expression hosting nahi hota ha


greet();
function greet (){
    console.log("hello");
}

// print hello'

let multiple = (a,b)=>{
    return a*b;
}

//fat arrow function

function dfg(...val){
 console.log(val);
}

dfg(1,2,3,4,5,);

// using rest operator




function getscore(...score){
    let total = 0;
    score.forEach(function(score){
    total = total + score;
    });
    return total;

}
console.log(getscore(10, 30, 49, 76, 56));


function checkage(age){
    if(age>18) return "allowed";
    return "not allowed";
}

console.log(checkage(23));

*/


function abcd(val){
 val();
}

abcd(function(){
    console.log("hello");
});