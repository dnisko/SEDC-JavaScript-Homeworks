// Part 1
console.log("---------- Part 1 ----------");

function typeReturn(input)
{
    return typeof input;
}

// Object
console.log(typeReturn([1,2,3]));

// Boolean
console.log(typeReturn(true));

// Number
console.log(typeReturn(1));

// String
console.log(typeReturn("String"));

// Undefined
console.log(typeReturn());


// Part 2
console.log("---------- Part 2 ----------");

function converDogToHumanYears(dogYears, humanYears)
{
    const convertion = 7;
    let convertedToHumanYears = convertion * dogYears;
    let convertedToDogYears = humanYears / convertion;
    console.log(`Human years entered: ${humanYears}. Human would have ${convertedToDogYears} in dog years`);
    console.log(`Dog years entered: ${dogYears}. Dog would have ${convertedToHumanYears} in human years`);
}

let humanYears = prompt("Enter human years:")
let dogYears = prompt("Enter dog years:")

converDogToHumanYears(dogYears, humanYears);


// Part 3
console.log("---------- Part 3 ----------");

function cashWithdraw(amount)
{
    const totalAmount = 5000;
    let remainingCash = totalAmount - amount;
    if (remainingCash < 0)
    {
        return "Not enough money";    
    }
    else
    {
        return `You have withdrawn ${amount}.\nYou have left ${remainingCash} in the account.`;
    }
}

let amount = prompt("Enter amount you wish to withdraw:");
console.log(cashWithdraw(amount));