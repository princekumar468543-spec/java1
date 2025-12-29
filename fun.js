function prince() {
    //function statement
    console.log("prince sharma");
}

prince();
prince();

let fnc = function(){
    // function expresion
    console.log("prince sharma");
}

fnc();

// fat arrow function

let f1 = () =>{
    console.log("prince sharma")
}

f1();

function BCD(v1){
    console.log(`${v1} prince sharma`);
}

//dynamic value
BCD("hello");
BCD("heyy")


function add(v1,v2){// function parameter
console.log( v1 + v2);
}

add(1 ,2);//function argument

function abcde(...val){
    console.log(val);
}
//function rest
abcde(1,2,3,4,5,6,7,8,9);

function cdf(v){
    return v + 12;
}

let val = cdf(23);
console.log(val);