/*
"use strict" // treat all js code as a newer js version
alert(3+3) // we are using nodejs, not browser
console.log(3
    +
    3); //code redability should be high
 console.log("Shivam Sharma"); // print Shivam Sharma
 let name="Shivam Sharma" // String DataType
 let age=21 // Number DataType
 let isLoggedIn= true //Boolean Datatype
 let state= null // object
 */
 
// number => 2 to power 53
//bigint => when i use 2 to power 53 large number
//string => ""
//boolean => true or false
//null => standalone value
//undefined =>
//symbol => unique

//object
/*
console.log(typeof undefined); //undefined
console.log(typeof null);// object
*/
 // this is a object
const student = {
    fullName:"Shivam",
    age:21,
    cgpa:8.2,
    isPass:true,
};
//console.log(student); // all data print

console.log(student.age);// first method to print only age data  
console.log(student["age"]);// second method to print only age print 

console.log(student.fullName);// first method to print only fulName data  
console.log(student["fullName"]);// second method to print only fullNmae print 

// NOTE => Const variable cannot change but Const object Can be change example below
// change value inside a object
student["age"]=student["age"]+1; // change value syntax
console.log(student.age);

student["fullName"]="Shivam SHarma"; // change value syntax
console.log(student);