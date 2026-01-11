// var keyword --------------------------

var address = "India";

var address = "Russia"; // re-declaration

// console.log(address);

// {} (block) doesn't effect Variable declared with var keyword means it consider as there is no block.
{
    var firstName = "Aman";
    console.log(firstName);
    var age = 25;
}

console.log("Outside the Block : ", firstName); // firstName can access from outside the block.

// Note : var keyword ignores the block but it consider the function block.


function fun(){
    var name = '10xdevaman';
    console.log(name);
}
fun();


// console.log(name);  Error: We cannot access name variable outside the block because it is inside the function body.



// let ----------------------------------


let city = "Azamgarh";

// let city = "Bullia"; ❌ Error

{
    let city = "Bullia"; //✅
    console.log(city); // Bullia
}

console.log(city); // Azamgarh

city = Prayagraj; // -> Re-assign value

console.log(city); // Prayagraj


//const----------------------------------

const PI = 3.14;
// pi = 3.14059 // Error: Assignment to const variable.

// const PI = 5.1 // Syntax Error : Identifier 'PI' has already been declared.