let studentArray = [];

let btnCreate = document.getElementById("btnCreateObject");
let div = document.getElementById("result"); //selecting the div with id="result"

// ---------- If we want to add every object in the same <ul> ----------
//let list = document.createElement("ul"); //creating new HTML element <ul>
//div.appendChild(list); //adding the created <ul> element inside the div id="result"


btnCreate.addEventListener("click", function()
{
    let firstName = document.getElementById("txtFirstName").value;
    let lastName = document.getElementById("txtLastName").value;
    let age = document.getElementById("txtAge").value;

    let parsedAge = parseInt(age);

    if(isNaN(parsedAge) || firstName == "" || lastName == "")
    {
        alert("First & Last name are mandatory\nAge must be a number.");
    }
    else
    {
        let studentObject = new Object();
        studentObject.firstName = firstName;
        studentObject.lastName = lastName;
        studentObject.age = parsedAge;

        studentArray.push(studentObject);

        // ---------- If we want to add every object in a different <ul> every click ----------
        let list = document.createElement("ul"); //creating new HTML element <ul>
        div.appendChild(list); //adding the created <ul> element inside the div id="result"

        // I tried with for loop but couldn't get properties from the Object...
        //something like ${studentOblect.properties[i]}

        // for(let i = 0; i < 3; i++)
        // {
        //     let item = document.createElement('li');
        //     item.appendChild(document.createTextNode(studentObject.properties[i]));
        //     list.appendChild(item);
        // }
        
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(firstName));
        list.appendChild(item);

        item = document.createElement('li');
        item.appendChild(document.createTextNode(lastName));
        list.appendChild(item);

        item = document.createElement('li');
        item.appendChild(document.createTextNode(parsedAge));
        list.appendChild(item);
        
    }
    // return studentArray;
    console.log(studentArray);
});

let btnCreateAnimal = document.getElementById("btnCreateAnimal");


btnCreateAnimal.addEventListener("click", function()
{
    let animal = 
    {
        animalName: document.getElementById("txtAnimalName").value,
        animalKind: document.getElementById("txtAnimalKind").value,
        animalSpeak: document.getElementById("txtSpeak").value,

        speak: function()
        {
            console.log(`The ${this.animalKind} named ${this.animalName}, says: ${this.animalSpeak}.`);
        }
    };
    animal.speak();
});