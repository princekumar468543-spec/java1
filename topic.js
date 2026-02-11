//Hosting Practice
/*
console.log(a);
var a = 5;

//output = undefined

abcd();
function abcd(){
    console.log("hii");
}

//print hii

console.log(b);
let b = 10;

//output = cannot acces b before intilization



// scope Practice

let x = 10;

function test(){
    let x = 20;
    console.log(x);
}

test();
console.log(x);

{
    var a = 5;
    
}
console.log(a)

let b = 10;
console.log(b);

*/

//Closure Practice

function createCounter(){
    
    let count = 0;
    return function(){
     count++;
     console.log(count);
    }
}

let counter = createCounter();

counter();
counter();

function securePassword(val){
    let check;
    return function(check){
        if(check === val){
            console.log("acces Granted")
        }
        else{
            console.log("wrong password")
        }
        return check;
    }
}

let password = securePassword("mypassword");
password("bcddkcbk");