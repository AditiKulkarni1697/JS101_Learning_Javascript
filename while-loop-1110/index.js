//if you want to repeat something use loops. 
let x=20;

x = x +20;
x = x + 30;
console.log(x);

let a = 10;
a = a+2;
a+= 10;
a++
  ++a; //this is also adding 1 to a

console.log(a);

//a++ is called "post increment"
//++a is called "pre increment"
//both of them have same functionality that is adding 1 to value. 

//in case of post increment when we do b = a++ that is assign a++ to b. first value of a is assigned to b and then increment occurs. 

let A = 10;
let B = A++
console.log( "value of A", A);
console.log("value of B", B)

//divide A++ to two part, A and ++, here B will have initial value of A that is 10 and A will have added ++ value that is 11. 

let X = 10;
let Y = X--
console.log( "value of X", X);
console.log("value of Y", Y)

//in case of pre increment ---

let C = 10;
let D = ++C;
console.log("value of C", C)
console.log("value of D", D)

//here, ++C means first adding (++) one to C and then assigning that incremented value to D. 

let a1 = 10;
let c1 = ++a1;
let b1 = 10;
let d1 = b1++

console.log(a1, b1, c1, d1)

//here, first although a1 first had 10, in next step we added 1 to a1 so now the a1 has value 11, and then I assigned that value to c1. so both a1 and c1 have value 11. 
//in case of b1, b1 first had value 10, in next operation we assigned that initial value of b1 to d1 hence the value of d1 will now become 10, but after assigning the value of b1 to d1 we added 1 to b1 hence value of b1 will be 11.

let e = 6;
let f = e--;

//WHILE LOOP --->

// syntax 
/*
1.starting position 
2.while(ending condition)
{
3. code or console.log
4. increment(i++ or ++i)
}

explanation --

here, first a variable is assigned that is starting position, then I will go to ending condition to check if the value I have is less than ending. And then I will go to curly brackets and print what is inside, and then I will increment the variable value and again go to ending condition to check if the incremented value is less than endition value and again go to curly brackets to print the code. and this cycle goes on untill the incremented value is greater than ending condition.
if we do not give the increment then value of x will always be 1 and it will never reach the ending condition which will make it print it infinite times. which will end up in system crash to avoid it click controlC

We can use 0 and negative values to start the loop
*/

//print the counting from 1 to 10

let y = 1;
while (y<=10){
 console.log(y)
  y+=2
}

//break statement---
// applying break will stop and terminate the loop.

console.log("--------")
let G = 1;
while (G <= 10){
  if(G==5){
    break;
  }
  console.log(G);
  G++
}

//here, the loop will not print 5, as G==5 will break the loop. And we will get 1 to 4.

//---------
let H = 1;
while (H <= 10){
  
  console.log(H);
  H++

  if(H==5){
    break;
  }
}

// here, also we will break the loop when H will increment 
console.log("------------")
let I = 1;
while (I <= 10){
  
  console.log(I);
  

  if(I==5){
    break;
  }
  I++
}
console.log("------------")
let F = 1;
while (F <= 10){
  
  console.log(F);
  

  if(F==5){
    break;
  }
  F++
}
//this will go to infinite loop.