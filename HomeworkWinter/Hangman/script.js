let divMiddle = document.getElementById("middle");
let divLeft = document.getElementById("leftDiv");
let divMiddle1 = document.getElementById("middle1");
let divBottom = document.getElementById("bottom");

divMiddle.hidden = true;
divLeft.hidden = true;
divMiddle1.hidden = true;
divBottom.hidden = true;

let hangmanArray = [];
let buttonClicked = [];

// let restart = document.getElementById("btnRestart");
let chosenWord = document.getElementById("word");
let chosenCategory = document.getElementById("category");
let chooseCategory = document.getElementById("chooseCategory");
let livesText = document.getElementById("lives");
let lives = 6;
let usedLetters = document.getElementById("usedLetters");
let word = "";
let dashedArray = [];

addToHangman("The Matrix", "Movie");
addToHangman("Strawberry", "Food");
addToHangman("JavaScript", "IT");
addToHangman("Dire Straits", "Music");
addToHangman("Testing with dash - tested", "Test");
addToHangman("Never gonna give you up, never gonna let you down", "Music");
addToHangman("A Series of Unfortunate Events", "Movie");
addToHangman("Bolognese Shpagetti", "Food");
addToHangman("Never gonna give you up, never gonna let you down", "Food");
addToHangman("Diego Armando Maradona", "Sport");

// console.log(hangmanArray);

//https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/
let categoryArray = [];
let count = 0;
let start = false;

for(let i = 0; i < hangmanArray.length; i++)
{
    for(let j = 0; j < categoryArray.length ;j++)
    {
        if(hangmanArray[i].category == categoryArray[j])
        {
            start = true
        }
    }
    count++;

    if(count === 1 && start === false)
    {
        categoryArray.push(hangmanArray[i].category);
    }
    start = false;
    count = 0;
}

// console.log(categoryArray);

for(let i = 0; i < categoryArray.length; i++)
{
    // console.log(categoryArray[i]);
    let add = document.createElement("option");
    add.value = i;
    add.innerHTML = categoryArray[i];
    // console.log(hangmanArray[i].category);
    chooseCategory.appendChild(add);
}

function Hangman(word, category)
{
    this.word = word;
    this.category = category;
}

function addToHangman(word, category)
{
    // console.log(hangmanArray);
    hangmanArray.push(new Hangman(word, category));
    // console.log(hangmanArray);
}


function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

chooseCategory.onchange = function ()
{
    reset();

    divMiddle.hidden = false;
    divLeft.hidden = false;
    divMiddle1.hidden = false;
    divBottom.hidden = false;

    // console.log(random);
    // console.log(hangmanArray.length);
    // let categoryValue = chooseCategory.value;
    let categoryText = chooseCategory.options[chooseCategory.selectedIndex].text;
    // console.log("tuka sme");
    // console.log(categoryValue);
    // console.log(categoryText);
    // console.log("zavrsi");

    let category = categoryText;
    let hangmanFromCategory = [];
    for(let i = 0; i < hangmanArray.length; i++)
    {
        if(hangmanArray[i].category === categoryText)
        {
            hangmanFromCategory.push(hangmanArray[i].word);
        }
        // console.log(hangmanFromCategory);
    }
    let random = getRandomInt(0, hangmanFromCategory.length);
    word = hangmanFromCategory[random];

    console.log(`${word}, ${category}`);

    chosenCategory.innerText = `The chosen category is: ${category}`;

    for(let i = 0; i < word.length; i++)
    {
        if(word[i] == " ")
        {
            dashedArray.push(" ");
            chosenWord.innerHTML += `&nbsp;`;
        }
        else if (word[i] == "-")
        {
            dashedArray.push(`-`);
            chosenWord.innerHTML += `-`;
        }
        else
        {
            dashedArray.push(`_ `);
            chosenWord.innerHTML += `_&nbsp;`;
        }
    }
    console.log(word.length);
    console.log(dashedArray);
}
//https://www.fwait.com/how-to-detect-which-button-is-clicked-in-javascript/
document.addEventListener('click', function(e)
{
    let toLower = word.toLowerCase();
    let element = e.target;
    // console.log("tuka");
    // console.log(element.id);
    // console.log(e.target);
    if(element.tagName == "BUTTON"){        
        buttonClicked = [element.id, element.innerText];
        console.log(buttonClicked);
    }
    if(buttonClicked[0] === "btnRestart")
    {
        console.log("tuka....");
        reset();
    }
    let btn = document.getElementById(`${buttonClicked[1]}Btn`);
    
    if(btn !== null)
    {
      if(btn.disabled === false)
        {
            let doesLetterEixsist = false;
            // console.log(buttonClicked[1]);
            for(let i = 0; i < word.length; i++)
            {
                if(toLower[i] == buttonClicked[1])
                {
                    dashedArray[i] = word[i];
                    console.log(word);
                    console.log(word.length);
                    console.log(dashedArray);
                    console.log("equal " + word[i]);
                    doesLetterEixsist = true;

                    //Wierd text style and adding ,...
                    chosenWord.innerHTML = dashedArray;
                }
            }
            
            // console.log(btn.getAttribute("disabled"));
            // console.log(btn.disabled);
            btn.disabled = true;

            if(!doesLetterEixsist)
            {
                lives += -1;
            }
            console.log(lives);
            console.log(doesLetterEixsist);

            usedLetters.innerHTML += `${element.innerText}, `;
        }

        livesText.innerText = lives;  
    }
    
});

function reset()
{
    dashedArray = [];

    divMiddle.hidden = true;
    divLeft.hidden = true;
    divMiddle1.hidden = true;
    divBottom.hidden = true;

    livesText.innerText = lives;

    chosenWord.innerHTML = "";
    buttonClicked = [];
}
    // divMiddle.hidden = false;
    // divLeft.hidden = false;
    // divMiddle1.hidden = false;
    // divBottom.hidden = false;
