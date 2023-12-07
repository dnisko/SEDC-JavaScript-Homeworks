//Write a program that will check if user typed an input that is a number or not

const userInput = prompt("Enter something to see if it is a number:");

if(!isNaN(userInput))
{
    console.log("The input you entered is: " + userInput + "\nThe type is number")
}
else
{
    console.log("The input you entered is: " + userInput + "\nThe type is not a number")
}