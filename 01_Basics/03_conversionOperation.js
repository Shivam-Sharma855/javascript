let score ="33abc"
console.log(typeof score);//  first method check dataType 
console.log(typeof (score));//second method check dataType 
let valueInNumber =Number(score); // convert score in number
console.log(typeof valueInNumber);// check dataType 
console.log(valueInNumber);// Print

//33=> Easily convert number 33
//33abc=> NaN not an number
//true=> convert 1
//false=> convert 0

let isLoggedIn =""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

//1=>output true
//0=>false
//""=>false
//"Shivam"=>true

let somenumber=33
let stringNumber= String(somenumber) // convert number into string
console.log(stringNumber); //print string number =>33
console.log( typeof  stringNumber); //check dataType => string


