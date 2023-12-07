//Write a program that will accept user input between 1-7 (week number) and print week day.

const userInput = prompt("Enter number between 1 and 7 to get the week day.");

if(userInput < 1 || userInput > 7)
{
    alert("Invalid data entered. Please enter number between 1-7");
}
else if (userInput == 1)
{
    console.log(`Entered number: ${userInput}\nWeek day: Monday`);
}
else if (userInput == 2)
{
    console.log(`Entered number: ${userInput}\nWeek day: Tuesday`);
}
else if (userInput == 3)
{
    console.log(`Entered number: ${userInput}\nWeek day: Wednesday`);
}
else if (userInput == 4)
{
    console.log(`Entered number: ${userInput}\nWeek day: Thursday`);
}
else if (userInput == 5)
{
    console.log(`Entered number: ${userInput}\nWeek day: Friday`);
}
else if (userInput == 6)
{
    console.log(`Entered number: ${userInput}\nWeek day: Saturday`);
}
else
{
    console.log(`Entered number: ${userInput}\nWeek day: Sunday`);

}