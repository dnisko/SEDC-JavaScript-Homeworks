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

let clues = document.getElementById("clue");
let chosenWord = document.getElementById("word");
let chosenCategory = document.getElementById("category");
let chooseCategory = document.getElementById("chooseCategory");
let livesText = document.getElementById("lives");
let lives = 6;

for(let i = 0; i < lives; i++)
{
    // console.log(document.getElementById(`img${i}`));
    document.getElementById(`img${i}`).hidden = true;
}

let usedLetters = document.getElementById("usedLetters");
let word = "";
let dashedArray = [];

let clueArray = [];
let depletedClues = false;

let categoryArray = [];
let count = 0;
let start = false;

addToHangman("The Matrix", "Movie", ["Green", "Falling letters", "Computer rulling"]);
addToHangman("Strawberry", "Food", ["Clue1", "Clue2", "Clue3"]);
addToHangman("JavaScript", "IT", ["Clue1", "Clue2", "Clue3"]);
addToHangman("Dire Straits", "Music", ["Clue1", "Clue2", "Clue3"]);
addToHangman("Testing with dash - tested", "Test", ["Clue1", "Clue2", "Clue3"]);
addToHangman("Never gonna give you up, never gonna let you down", "Music", ["Clue1", "Clue2", "Clue3"]);
addToHangman("A Series of Unfortunate Events", "Movie", ["Clue1", "Clue2", "Clue3"]);
addToHangman("Bolognese Shpagetti", "Food", ["Clue1", "Clue2", "Clue3"]);
addToHangman("Never gonna give you up, never gonna let you down", "Food", ["Clue1", "Clue2", "Clue3"]);
addToHangman("Diego Armando Maradona", "Sport", ["Clue1", "Clue2", "Clue3"]);


//https://www.geeksforgeeks.org/how-to-get-all-unique-values-remove-duplicates-in-a-javascript-array/


if(categoryArray.length === 0)
{
    getUniqueCategory(hangmanArray, categoryArray, count, start);
}
function getUniqueCategory(hangmanArray, categoryArray, count, start)
{
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
}


function Hangman(word, category, clue = [])
{
    this.word = word;
    this.category = category;
    this.clue = clue;
}

function addToHangman(word, category, clue)
{
    // console.log(hangmanArray);
    hangmanArray.push(new Hangman(word, category, clue));
    // console.log(hangmanArray);
}

function getRandomInt(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function getClues(array, word)
{
    console.log("clicked the clear button");
    // console.log(hangmanArray);
    // console.log(word);
    // console.log(hangmanArray[1].clue);
    
    if(clueArray.length === 0 && depletedClues === false)
    {
        for(let i = 0; i < array.length; i++)
        {
            if(hangmanArray[i].word === word)
            {
                // console.log(array[i].clue[2]);
                // console.log(array[i].clue.length);
                // clueArray.push(hangmanArray[i].clue);
                for(let j = 0; j < array[i].clue.length; j++)
                {
                    clueArray.push(array[i].clue[j]);
                }
            }
            // console.log(clueArray);
        }

        
    }
    // console.log(clueArray);
    if(clueArray.length > 0 && depletedClues === false)
    {
        clues.innerText += `${clueArray[0]}\n`;
        // console.log(clueArray);
        clueArray.shift();
        // console.log(clueArray);

        if(clueArray.length === 0)
        {
            clues.innerText += `\nNo more clues, you are on your own now.`;
            depletedClues = true;
        }
    }
           
        console.log(clueArray);
    
    
    for(let i = 0; i < clueArray.length; i++)
    {

    }
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
    console.log(word);
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
    // console.log(word.length);
    // console.log(dashedArray);
}

//https://www.fwait.com/how-to-detect-which-button-is-clicked-in-javascript/
document.addEventListener('click', function(e)
{
    console.log(hangmanArray);
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
        reset();
    }

    if(buttonClicked[0] === "btnClue")
    {
        getClues(hangmanArray, word);
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
                    chosenWord.innerHTML = dashedArray.join(" ");
                }
            }
                
            // console.log(btn.getAttribute("disabled"));
            // console.log(btn.disabled);
            btn.disabled = true;

            if(!doesLetterEixsist)
            {
                lives += -1;
                if(lives === 0)
                {
                    if (confirm(`You have lost, the chosen word was ${word}`) == true)
                    {
                        reset();
                    }
                    else
                    {
                        reset();
                    }
                }
            }
            // console.log(lives);
            // console.log(doesLetterEixsist);
            usedLetters.innerHTML += `${element.innerText}, `;
        }

        livesText.innerText = lives;
        if(lives < 6)
        {
            // console.log(lives);
            hangmanPicture(lives);
        }
        // }
        // console.log(dashedArray.join(""));
        // console.log("this");
        // console.log(word);
        if(dashedArray.join("") == word)
        {
            if (confirm(`Congratulations!!! The chosen word was ${word}`) == true)
            {
                reset();
            }
            else
            {
                reset();
            }
        }
    } 
   
});

function hangmanPicture(lives)
{
    tempLives = lives + 1;
    console.log(tempLives);
    console.log(document.getElementById(`img${lives}`));
    document.getElementById(`img${lives}`).hidden = false;
    

}

function reset()
{
    // dashedArray = null;

    divMiddle.hidden = true;
    divLeft.hidden = true;
    divMiddle1.hidden = true;
    divBottom.hidden = true;

    lives = 6;
    livesText.innerText = lives;

    chosenWord.innerHTML = "";
    buttonClicked = [];

    clues.innerHTML = "";
    depletedClues = false;

    for (i = 97; i <= 122; i++)
    {
        document.getElementById(`${String.fromCharCode(i)}Btn`).disabled = false;
    }

    // hangmanArray = [];
    buttonClicked = [];

    for(let i = 0; i < lives; i++)
    {
        // console.log(document.getElementById(`img${i}`));
        document.getElementById(`img${i}`).hidden = true;
    }

    dashedArray = [];
    usedLetters.innerHTML = "";
    // clueArray = [];

    // categoryArray = [];
    // location.reload();
}