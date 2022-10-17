//The ternary operator --

//the key components in conditional statement are 1.condition 2. check if its true or false. 3. statement if its true 4. statement if its false. 

//we can write if..else statement in single line example,

let a = 20;
let b = 30;

a>b ? console.log(a, "is greater than b"): console.log(b, "is greater than a")

//1. And(&&) operator ---

/* input is boolean and output is boolean

Incase of and operator all the conditions should be true only then result is true.


*/

console.log(true&&false)

//problem2

let c=10;
let d =20;
let e=20;
let f = 19;

if((c>d)&&(e>f)){
  console.log("true")
}
else {console.log("false")}

((c>d)&&(e>f))? console.log("true"): console.log("false");

//example 3

let reg_email = "abc";
let reg_pass = 123;

let email = "abc";
let pass = 123;

if((email==reg_email)&&(pass=reg_pass)){
  console.log("login")
}
else {console.log("wrong")}

((email==reg_email)&&(pass=reg_pass))?console.log("login"):console.log("wrong");

//2. Or operator

//here also the input and output are boolean

//even if any one condition is true output will be true.

//--example 3

let gender = "male";
let age = 25;
if((gender=="female"&&age>=21)||(gender=="male")&&(age>=23)){
  console.log(gender, "can marry");
}
else {
  console.log("wrong")
}

(gender=="female"&&age>=21)||(gender=="male"&&age>=23)?console.log(gender, "can marry"):console.log("wrong");

//3.Not operator


console.log(!true)


//console.log((10>20&&20>5)&&(!true))


console.log(!0)

//research truthy and falsy values.

//switch case 

//shuffleing between different cases. 























