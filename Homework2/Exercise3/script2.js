//Write a program to find the maximum between three numbers.

let number1 = 1;
let number2 = 2;
let number3 = 3;

biggerNumber = null;
// console.log("The numbers are: " + number1 + ", " + number2 + " and " + number3); 
if(number1 === number2 && number1 === number3)
{
    biggerNumber = "they are equal";
    // console.log("they are equal");
}
else if(number1 > number2 && number1 > number3)
{
    biggerNumber = number1;
    // console.log("The biggest is: " + number1); 
}
else if(number2 > number1 && number2 > number3)
{
    biggerNumber = number2;
    // console.log("The biggest is: " + number2); 
}
else
{
    biggerNumber = number3;
    // console.log("The biggest is: " + number3); 
}

console.log("The numbers are: " + number1 + ", " + number2 + " and " + number3 + ".\nThe biggest is: " + biggerNumber); 