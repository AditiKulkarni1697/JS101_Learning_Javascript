//Print the average of even numbers from 1 to 100 (both included)

//average of even number from 1 to 100.
//analyze the question first
//even number between the limit
//calculate sum of even number and count of even number
//calculate the average

let i = 1;
let sum = 0;
let count = 0;
while(i<=100){
  if(i%2==0){
    sum = sum + i
    count++
  }
  i++
}
console.log("The average is ", sum /count)
