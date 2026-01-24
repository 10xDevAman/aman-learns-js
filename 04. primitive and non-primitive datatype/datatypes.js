// Primitive Data Type

// -------------------Number------------------- 

const age = 24;
console.log(typeof age, age);  // number 24

// -------------------String-------------------

const fullName = "Aman Shah";
const address = "Azamgarh";
const country = "INDIA";

console.log(typeof fullName , fullName); // string Aman Shah
console.log(typeof address , address); //string Azamgarh
console.log(typeof country , country);  // string INDIA

const newAge = "25";
console.log(typeof newAge ,  newAge); // string 25


// ---------------Boolean---------------

const isValid = false;

console.log(isValid , typeof isValid); // flase  boolean


// -----------------NULL-----------------
const product = null;
console.log(typeof product ,  product); // object  null

// ----------------Symbol : It is used to make anything  unique----------------

const userName = Symbol("Aman Shah");
console.log(userName , typeof userName); // Symbol(Aman Shah) symbol

const anotherUserName = Symbol("Aman Shah");
console.log(anotherUserName , typeof anotherUserName); // Symbol(Aman Shah) symbol

// Both userName and anotherUserName are same but with Symbol keyword we make it unique although they are exactly same.

console.log(userName === anotherUserName); // false


// ----------------BigInt----------------
const largeNumber = 9876543210987654321n;
console.log(typeof largeNumber , largeNumber); // bigint 9876543210987654321n

//-----------------undefined-----------------

let yourName = undefined;
console.log(typeof yourName , yourName); // undefined undefined

let yourLastName;
console.log(typeof yourLastName , yourLastName); // undefined undefined


// -----------------Object---------------------

const student = {
    name : "Abhishek",
    class : 5,
    address : "Azamgarh",
    details : {
        fatherName : "Ajay",
        mobileNumber : 9876543210,
    }
}

console.log(typeof student , student); 
/**
  object {
  name: 'Abhishek',
  class: 5,
  address: 'Azamgarh',
  details: { fatherName: 'Ajay', mobileNumber: 9876543210 }
}
 */

console.log(student.name); //Abhishek


console.log(student.details); // { fatherName: 'Ajay', mobileNumber: 9876543210 }

console.log(student.details.fatherName); // Ajay

console.log(student["name"]);  // Abhishek
console.log(student["details"] ["fatherName"]); // Ajay