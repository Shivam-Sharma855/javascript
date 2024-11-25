//***********************************Arithmetic Operator******************************************* 
// addition operator
// let a = 4;
// let b = 5;
// console.log("a =",a, "& b =",b ); // print a=4 b=5

// console.log(a+b); // first method ouput= 9
// console.log("a + b =", a + b);// second method output= a + b = 9
// //substraction operator
// console.log(a - b);
// console.log("a - b =", a - b);
// //multiplication
// console.log(a * b);
// console.log("a * b =", a * b);
// //dividetion
// console.log(a / b);
// console.log("a / b =", a / b);
// // Modulus
// console.log(a % b);
// console.log("a % b =", a % b);
// // Exponentiation
// console.log(a ** b);
// console.log("a ** b =", a ** b); //4^5
// these operators works on to operand e.g; one operand A and other one is B


/*******************************But in programming language we have two more operators which is increment and decrement operator These operators called Unary operators**************************************/
/*
increment operator symbol ++   means-->(a++ => a+1)
decrement operator symbol --   means-->(a-- => a-1)
*/
/***************************************POST METHOD*********************************************/
//phele print hoga uske baad value change hogi
// let c = 4;
// let d = 5;
// console.log("c =",c, "& d =",d );
//increment 

// c=c+1;
// console.log("c =",c) // output=5 First  simple Method
// c++;
// console.log("c =",c) // output=5 Second Use Unary operator

//decrement 
// c=c-1;
// console.log("c =",c); // output=3 First  simple Method
// c--;
// console.log("c =",c); // output=3 Second Use Unary operator

/***************************************PRE METHOD*********************************************/
//phele value change hogi fir print hoga
// c--;
// console.log("c =",c) // c-- = 3
// --c;
// console.log("--c",--c); //--c = 2

// Assignment Operator
// += operator
//  let e = 5;
//  let f = 6;
// //  e += 4;
// //  console.log("e = ", e); // e = 9
// // -= operator
//  e -= 4;
//  console.log("e = ", e); // e = 1


// Same as *=, /=, %=, **= ETC...



// ********************************Comparison Operators*********************************************
/*
In math
a = b  a equal to b
a =/ a not equal to b
In programming 
a == b a equal to b
a != b a not equal to b
This method check value inside e.g; e=5 number f="2" string but check inside value 2
*/
// let e = 5;
// let f = 2;
// console.log("5 == 2", e == f); // First Method False
// console.log( "e == f",e == f); // Second Method false

// let e = 5;
// let f = 5;
// console.log( "5 == 5",e == f); // true

// let e = 5;
// let f = 4;
// console.log( "5 != 5",e != f); // we use both method here true

// let e = 5; // number
// let f = 5; // number
// console.log( "5 != 5",e != f);  // we use both method here false




// let e = 5; // number
// let f = "5"; // string
// console.log( "5 != 5",e != f); 
//This case we use equal to & type ===
//This case we use not equal to & type !==
//This method check datatype inside e.g; e=5 number f="2" string but check inside datatype string 

// let e = 5; // number
// let f = "5"; // string
// console.log( "5 == 5",e == f); // true because here check value

// let e = 5; // number
// let f = "5"; // string
// console.log( "5 === 5",e === f); // false because here check data type

// let e = 5; // number
// let f = "4"; // string
// console.log( "5 !== 4",e !== f); // true because here check data type

// let e = 5; 
// let f = 4;
// console.log( "5 > 4",e  > f); // true

// let e = 5; 
// let f = 4;
// console.log( "5 < 4",e  < f); // false

// let e = 5; 
// let f = 4;
// console.log( "5 <= 4",e  <= f); // false
// let e = 5; 
// let f = 5;
// console.log( "5 <= 5",e  <= f); //true
// let e = 5; 
// let f = 5;
// console.log( "5 >= 5",e  >= f); //true


//******************************************LOGICAL OPERATOR****************************************
// comparison operator compare value of operands , But logical operator multiple experssions of evaluate provide answer , answer will be same comparison operator ture or false. 

// Logical And && works if condition 1 true and condition 2 true then logical and give true otherwise false even one is true another is false even both are false 

// let a = 6; 
// let b = 5;
// let cond1 = a < b;// false
// let cond2 = a===6;//true
// console.log("cond1 && cond2", cond1 && cond2); //false



// let a = 6; 
// let b = 5;
// let cond1 = a > b;// false
// let cond2 = a===6;//true
// console.log("cond1 && cond2", cond1 && cond2); //true


// Logical OR || works if condition 1 true and condition 2 true then logical OR give true otherwise true even one is true another is false if both condition false then i return false.


// let a = 6; 
// let b = 5;
// let cond1 = a > b;// false
// let cond2 = a===6;//true
// console.log("cond1 || cond2", cond1 || cond2); //true

// let a = 6; 
// let b = 5;
// let cond1 = a < b;// false
// let cond2 = a!==6;//false
// console.log("cond1 || cond2", cond1 || cond2); //false

// let a = 6; 
// let b = 5;
// let cond1 = a > b;// true
// let cond2 = a===6;//true
// console.log("cond1 || cond2", cond1 || cond2); //true


// LOGICAL NOT ! tell if value true i convert it false and value false i convert true

// let a = 6; 
// let b = 5;

// console.log("!(6<5) =", !(a<b)); //true

let a = 6; 
let b = 5;

console.log("!(a===6) =", !(a===6)); //false