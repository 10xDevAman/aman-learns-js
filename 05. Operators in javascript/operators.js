

let num1 = 10;
let num2 = 5;
console.log("num1 + num 2 = ",num1 + num2);  // 15
console.log("num1 - num 2 = ",num1 - num2); // 5
console.log("num1 * num2 = ", num1 * num2); // 50
console.log("num1 / num2 = ", num1 / num2); // 2
console.log("num1 % num2 = ", num1 % num2); // 0
console.log("num1 ** num2 = ",num1 ** num2); // 100000

// increment and decrement Operator 
   
console.log("num1++ = " , num1++ ); // num1 = num1 + 1 
console.log("num2-- = " , num2-- ); // num2 = num2 - 2

// illustration for post-increment and pre-increment

{
    let num1 = 6;

    console.log("num1++ = ", num1++); // 6
    console.log("++num1 = ", ++num1); // 8
    console.log("--num1 = ", --num1); // 7
    console.log("num1-- = ", num1--); // 7
    console.log(num1); // 6
}


// Assignment Operator

let assignment = 12;
assignment += 10;  // assignment = assignment + 10;
console.log(assignment);


// Comparison Operator

let num3  = 10;
let num4  = 10;

console.log(" == " , num3 == num4 );  // true
console.log(" != " , num3 != num4 ); //false
console.log(" === " , num3 === num4 ); // true
console.log(" !== " , num3 !== num4 ); // false
console.log(" < " , num3 < num4 ); // false
console.log(" > " , num3 > num4 ); // false

console.log("================");

let num5  = 10;
let num6  = "10";

console.log(" == " , num5 == num6 );  // true
console.log(" != " , num5 != num6 ); //false
console.log(" === " , num5 === num6 ); // false
console.log(" !== " , num5 !== num6 ); // true


// Logical Operators

console.log(num5 > num6 && num5 === 10 ); // false
console.log(num5 > num6 || num5 === 10 ); // true

// Logical Not 
console.log(!(num5 > num6 || num5 === 10 )); // false


// typeof operator

console.log(typeof num3); // number