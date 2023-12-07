//Write a program to check whether a number is negative, positive or zero.

let number = 0;

console.log("The number is: " + number);
if(number > 0)
{
    console.log("The number is a positive number.");
}
else if(number < 0)
{
    console.log("The number is a negative number.");
}
else
{
    if(typeof(number)=="string")
    {
        console.log("Input error.");
    }
    else
    {
        console.log("The number is 0.");
    }
    
}