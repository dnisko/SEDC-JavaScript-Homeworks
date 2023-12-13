// Part 1
console.log("---------- Part 1 ----------");

function tellStory(name, mood, activity)
{
    return `This is ${name}. ${name} is a nice person. Today they are ${mood}. They are ${activity} all day. The end.`
}

let name = prompt("Enter name for the story:")
let mood = prompt("Enter mood for the story:")
let activity = prompt("Enter activity for the story:")

let story = tellStory(name, mood, activity);
console.log(story);



// Part 2
console.log("---------- Part 2 ----------");

function sumOfNumbers(array)
{
    let counter = 0;
    let sum = 0;
    while(counter < array.length)
    {
        sum += array[counter];
        counter++
    }
    return sum;
}

function validateNumber(array)
{
    for(let i = 0; i < array.length; i++)
    {
        if(isNaN(array[i]))
        {
            return `The entered item with index: ${i} is not a number.\nTerminating program.`;
        }

        return sumOfNumbers(array);
    }
}

let numberArrayForPart2 = [];

for(let i = 0; i < 5; i++)
{
    numberArrayForPart2.push(Number(prompt("Enter number " + i + ": ")));
}

console.log(validateNumber(numberArrayForPart2));



// Part 3
console.log("---------- Part 3 ----------");

function printArray(array)
{
    let currentItem = "";

    for(let i = 0; i < array.length; i++)
    {
        currentItem += " " + array[i];
    }
    return currentItem;
}

let stringArrayForPart3 = ["Hello", "there", "students", "of", "SEDC", "!", "asdd", "havve", "a"];
console.log(printArray(stringArrayForPart3));



// Part 4
console.log("---------- Part 4 ----------");

//with while
// let counter = 1;
// while (counter <= 20) 
// {
//     if(counter % 2 === 0)
//     {
//         console.log(counter + "\n\n"); 
//     }
//     else
//     {
//         console.log(counter + " ");  
//     }
     
//     counter ++; 
// }


// with for loop
for(let i = 1; i <= 20; i++)
{
    if(i % 2 === 0)
    {
        console.log(i + "\n\n"); 
    }
    else
    {
        console.log(i + " ");  
    } 
}



// Part 5
console.log("---------- Part 5 ----------");

function findMax(array)
{
    let max = -Infinity;
    for(let i = 0; i < array.length; i++)
    {
        if(!isNaN(array[i]))
        {
            if(array[i] > max)
            {
                max = array[i];
            }
        }
    }
    switch (max)
    {
        case -Infinity:
        case typeof max == "boolean":
        case typeof max == "object":
        case typeof max == "string":
        case typeof max == "undefined":
        case typeof max == "NaN":
            return "No numbers in the array";
        default:
            return max;
    }
}

function findMin(array)
{
    let min = Infinity;
    for(let i = 0; i < array.length; i++)
    {
        if(!isNaN(array[i]))
        {
            if(array[i] < min)
            {
                min = array[i];
            }
        }
    }
    switch (min)
    {
        case Infinity:
        case typeof min == "boolean":
        case typeof min == "object":
        case typeof min == "string":
        case typeof min == "undefined":
        case typeof min == "NaN":
            return "No numbers in the array";
        default:
            return min;
    }
}

function sumOfMinAndMax(num1, num2)
{
    return num1 + num2;
}

// let numberArrayForPart5 = ["a", "there", "d", "asd", "ssd", "!", "d", true, "a"];
let numberArrayForPart5 = ["a", 1, "d", 22, 1, "!", "d", true, "a"];
//if in the array there is a 'false' it doesn't work... I don't know why :(

let max = findMax(numberArrayForPart5);
let min = findMin(numberArrayForPart5);

if(min === "No numbers in the array" || max === "No numbers in the array")
{
    console.log("No numbers in the array");
}
else
{
    let resultOfSumOfMinAndMax = sumOfMinAndMax(min, max);
    console.log(`The biggest number in the array is ${max}.
The smallest number in the array is ${min}.
The sum of them is ${resultOfSumOfMinAndMax}`);
}



// Part 6
console.log("---------- Part 6 ----------");

function combineFirstAndLastName(firstNameArray, lastNameArray)
{
    if(firstNameArray.length !== lastNameArray.length)
    {
        return `The arrays don't have equal items.`
    }
    else
    {
        let combinedArray = [];
        for(let i = 0; i < firstNameArray.length; i++)
        {
            combinedArray.push(`${i+1}. ${firstNameArray[i]} ${lastNameArray[i]}`);
        }
        return combinedArray;
    }
}

let firstNameArray = ["Bob", "Jill", "John", "Keanu"];
let lastNameArray = ["Bobsky", "Vern", "Wick", "Reeves"];

let resultOfCombinedNames = combineFirstAndLastName(firstNameArray, lastNameArray);

// console.log(`Combined arrays of first names: \n${firstNameArray}
// and array of last names: \n${lastNameArray}
// is: \n${resultOfCombinedNames} `);

console.log("First name array:");
console.log(firstNameArray);

console.log("Last name array:");
console.log(lastNameArray);

console.log("Combined array:");
console.log(resultOfCombinedNames);