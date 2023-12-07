let fridayCash = parseInt(prompt("Enter how much money you have:"));


// For debugging purposes
// console.log('Type of fridayCash is:', typeof(fridayCash));
// console.log('Value of fridayCash is:', fridayCash);


//If I enter NumString (123wqe) it doesn't catch it as NaN... I don't know why
if (isNaN(fridayCash))
{
    fridayCash = null;
    alert("Invalid data. Try again.");
}
else
{
    if(fridayCash > 100)
    {
        alert("You have " + fridayCash + " money. You have too much money. Do as you please.");
    }
    else if (fridayCash >= 50)
    {
        alert("You have " + fridayCash + " money. You should go out to a dinner and a movie.");
    }
    else if(fridayCash >= 35)
    {
        alert("You have " + fridayCash + " money. You should go out to a fine meal.");
    }
    else if(fridayCash >= 12)
    {
        alert("You have " + fridayCash + " money. You should go see a movie.");
    }
    else
    {
        alert("You have " + fridayCash + " money. You are broke. Stay home!");
    }
}