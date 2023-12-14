// Part 1

if(document.getElementById("firstPage"))
{
    console.log("---------- Part 1 ----------");
    let pAndH = document.querySelectorAll("p, h1, h3");

    for(let i = 0; i < pAndH.length; i++)
    {
        pAndH[i].innerText = "CHANGED TEXT";
    }
}

if (document.getElementById("secondPage"))
{
    console.log("---------- Part 2 ----------");
    let numberArray = [1, 2, 3];
    document.getElementById('secondPage').appendChild(makeUL(numberArray));
}

// got help making elements via JS from: https://stackoverflow.com/a/11128791/2875898
function makeUL(array)
{
    // Create the list element:
    let list = document.createElement('ul');

    let allItems = "";
    let sum = null;

    for (let i = 0; i < array.length + 1; i++)
    {
        if (i < array.length)
        {
            // Create the list item:
            let item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));

            // Add it to the list:
            list.appendChild(item);

            sum += parseInt(array[i]);
            // console.log(sum);

            if(i === array.length -1)
            {
                allItems +=array[i] +  " = ";
                // console.log("LAST");
            }
            else
            {
                allItems += array[i] + " + ";
                // console.log("NOT LAST");
            }            
            // console.log(allItems);
        }

        if (array.length === i)
        {
            // Create the list item:
            item = document.createElement('li');
            // allItems += " = ";
            // console.log(allItems);

            // Set its contents:
            item.appendChild(document.createTextNode("Sum is: " + allItems + sum));

            // Add it to the list:
            list.appendChild(item);   
        }
        
    }

    return list;
}

if (document.getElementById("bonusPage"))
{
    console.log("---------- BONUS ----------");
    
    let recipeName = prompt("Enter name for the recipe:");
    let inputIngredients = prompt("Enter number of ingredients needed: ")

    if (isNaN(parseInt(inputIngredients)))
    {
        console.log(typeof inputIngredients);
        alert("Incorrect data!");
    }
    else
    {
        document.getElementById('ingredients').appendChild(getRecipe(recipeName, inputIngredients));
    }
        
    function getRecipe(recipeName, noOfIngredients)
    {
        document.getElementById("recipeName").innerText = recipeName;
        

        // let arrayIngredients = [];
        let array = [];
        for(let i = 0; i < noOfIngredients; i++ )
        {
            array.push(prompt(`Enter name for ingredient ${i + 1}`));
        }
        
        let list = document.createElement('ul');
        for(let i = 0; i < array.length; i++)
        {
            let item = document.createElement('li');

            // Set its contents:
            item.appendChild(document.createTextNode(array[i]));

            // Add it to the list:
            list.appendChild(item);
        }
        return list;
    }
    
}