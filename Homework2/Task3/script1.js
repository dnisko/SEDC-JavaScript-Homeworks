//Write a program to find the maximum between two numbers.
let number1 = 30;
let number2 = 30;

let biggerNumber = null;

if(number1 > number2)
{
    biggerNumber = number1;
}
else if(number1 < number2)
{
    biggerNumber = number2;
}
else
{
    biggerNumber = "they are equal";
}
console.log("The number 1 is: " + number1 + "\nThe number 2 is: " + number2 + "\nBigger is: " + biggerNumber)