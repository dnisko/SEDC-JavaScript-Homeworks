let container = document.getElementById("main");
let clearButton = document.getElementById("clearBtn");
let numOfExcercises = document.getElementById("numOfExcercises");
let submitButton = document.getElementById("sbmBtnForNumOfEx");

// console.log(container);

let vezbi =
{
  vezba1:
    "Declare and initialize a variable of every type that we learned so far. Print each of them in a console or alert()!",

  vezba2:
    "Read 5 variables as user input and then print each of the variable types in the console.",

  vezba3:
    "Write a JavaScript program to get the difference between a given number and 13, if the number is greater than 13 double the difference as a result. Make sure you use a function! Ex. Input: 20 ==> Output: 14",

  vezba4:
    "Write a JavaScript program that will find out which of two inserted integers is closer to 100. Make sure to alert the user if a negative number is inserted! Make sure you use a function! Ex. Input1: 20Input2: 80Output: 80 is closer to 100",

  vezba5:
    "Bob's salary is 1000 eur per month. He has expenses that has to cover during the month. He has to pay rent for his apartment 375 euros. He should pay 250 euros for his bills in total. Print on-screen what is the amount left that Bob has for the rest of the month, and what is the total amount of his expenses.",

  vezba6:
    "One student has 5 exams in the first semester. The student's name is Bob Bobsky. His/Her grades for all of the exams are Math = 10, English = 6, Science = 8, Sport = 9, Chemistry = 6 respectively. The professor told the students that to pass the first semester they must have an average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student passes or not! Print on the screen all of the subjects and the student name as well.",

  vezba7:
    "Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7. If the number is divisible by 3, then write 'Fizz' in the console, if the number is divisible by 7, then write 'Buzz' in the console, and if the number is divisible by 3 and 7, write 'FizzBuzz' in the console.",

  vezba8:
    "Write a simple JavaScript program to join all elements of the array into a string. The array should have at least 5 elements",

  vezba9:
    "Make an array of ten elements. Make sure four of them to be: Null, undefined, NaN, “” and false (JavaScript falsy values). Create a function that will work for every array in the world :) and it will remove all the falsy values from the array.",

  vezba10:
    "Write a JavaScript function called storyTeller(), that will take as input parameters the input field values from the html! ex: storyTeller(who, what, when) In the function, retrieve the current values of the form input elements, make a story from them, and output that in the story div (like Example: Lancelot was a really strong knight in the middle age! )",

  vezba11:
    "Write a JavaScript program called PhoneBook. You should have three input fields in the HTML, one for firstName, lastName and phoneNumber. After entering the values into each of them, by clicking on a “Save” button, you should display the newly added contact in a table below the inputs. Make sure the user is entering appropriate values in the fields! Bonus: Add a column with a delete and edit button so that you can edit or delete a contact! Try to save the newly added contact as an object (literal or constructor function it's up to you) and add it to an array!",

  vezba12:
    "Make a TODO app for yourself. You should have only one input and an “Add” button. After clicking on the Add button, display the newly added task that you need to do in an unordered list. Each new todo should be saved into an array. Bonus:4 Add checkbox to each of the tasks in the unordered list, and after checking a task, it should cross through the text! Try making the ToDo an object that needs to have two properties: Name and isCompleted properties",
};
// console.log(typeof vezbi);
// console.log(vezbi);

function PrintExcercises(inputObject, numOfProps)
{
    //see Google for Object.Values => advanced JS subject will cover this in full detail along with many other things
    values = Object.values(inputObject);
    console.log(numOfProps);
    console.log(values.length);
    // 2nd part of homework
    if(isNaN(numOfProps))
    {
      container.innerHTML = `<p>Enter a number to select an exercise.</p>`;
    }
    else if(numOfProps < 0 || numOfProps > values.length)
    {
      container.innerHTML = `<p>too many exercises, give the students some time to learn!!</p>`;
    }
    else
    {
      for (let i = 0; i < Math.min(numOfProps, values.length); i++)
      {
          console.log(values[i]);
          container.innerHTML += `<p> Vezba ${i + 1}: ${values[i]}</p>`
          container.innerHTML += `---------------------------------------------------`
      }
    }
};

function ClearHtml(inputElement)
{
    inputElement.innerHTML = "";
};

clearButton.addEventListener("click", function()
{
    ClearHtml(container);
});

submitButton.addEventListener("click", function ()
{
    let numberOfExcercises = numOfExcercises.value;
    PrintExcercises(vezbi, numberOfExcercises);
    numOfExcercises.value = "";
});

//FOR HOMEWORK!!!!!!!!!!!!
//1. Try extending our application so it has other HTML elements and logic in JS that will give us just a given exercise (also handle errors if there is no such exercise in our object).

let selectExcercises = document.getElementById("selectExcercises");

function printSelectedExcercise(inputObject, value)
{
  values = Object.values(inputObject);

  //let value = document.getElementById("selectExcercises").value;
  let parsedValue = parseInt(value);

  if(isNaN(parsedValue))
  {
    container.innerHTML = `<p>Enter a number to select an exercise.</p>`;
  }
  else
  {
    container.innerHTML = `<p> Vezba ${parsedValue}: ${values[value]}</p>`;
    container.innerHTML += `---------------------------------------------------`;
  }
};

let submitSelectedButton = document.getElementById("sbmBtnSelectExcercises");
let selectExcercise = document.getElementById("selectExcercises");
submitSelectedButton.addEventListener("click", function ()
{
  let numberOfExcercise = selectExcercise.value;
  printSelectedExcercise(vezbi, numberOfExcercise);
  selectExcercise.value = "";
});

//2 Try to make validation in the function that will handle errors if we put more exercises for showing and we don't have that much in our object, we want an alert to be shown for it that will print "too many exercises, give the students some time to learn!!". The same can be for negative numbers as well as for strings.

//3. Add some dynamic style to our elements, but do it in JS!

//-----------------FOR THE BOLDEST!----------------

//4. Try to Change the theme of the main view so the background is black and the text is white - Do this via a button and if you click the button, the theme should reset and be in its original white screen and black text color.

// Remember to NOOOOOOOOOOTTTT use Google or something similar, think for yourself, and see references from our previous material and presentations!!!

//HAPPY CODING!!!!!!!!!!!!
