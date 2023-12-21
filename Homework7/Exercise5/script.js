// ---------- Part 1 ----------

let studentArray = [];

let btnCreate = document.getElementById("btnCreateObject");
let div = document.getElementById("result"); //selecting the div with id="result"

// ---------- If we want to add every object in the same <ul> ----------
let list = document.createElement("ul"); //creating new HTML element <ul>
div.appendChild(list); //adding the created <ul> element inside the div id="result"


// ---------- Part 2 ----------
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


// ---------- Part 3 ----------

let btnCreateBook = document.getElementById("btnAddBook");
btnCreateBook.addEventListener("click", function ()
{
    let bookTitle = document.getElementById("txtBookTitle").value;
    let bookAuthor = document.getElementById("txtBookAuthor").value;
    let isRead = false;

    if(document.getElementById("read").checked === true)
    {
        isRead = true;
    }

    let book = 
    {
        title: bookTitle,
        author: bookAuthor,
        read: isRead,
    
        getInfo: function()
        {
            if(this.read === false)
            {
                return document.getElementById("bookResult").innerText += `You still need to read \`${this.title}\` by ${this.author}.\n`;
            }
            else
            {
                return document.getElementById("bookResult").innerText += `You have already read \`${this.title}\` by ${this.author}.\n`;
            }
        }
    };
    book.getInfo();
});



// ---------- Part 4 ----------

let usersArray = [];
document.getElementById("hiddenList").style.visibility = "hidden";
function UserCredentials(firstName, lastName, email, password)
{
    this.name = firstName,
    this.lastname = lastName,
    this.mail = email,
    this.pass = password,

    this.addToArray = function()
    {
        return `User Name: ${this.firstName}, User Lastname: ${this.lastName}`;
    }
}

let btnUsersClicked = document.getElementById("btnSubmit");
btnUsersClicked.addEventListener("click", function()
{
    let firstName = document.getElementById("userFirstName").value;
    let lastName = document.getElementById("userLastName").value;
    let email = document.getElementById("userEmal").value;
    let password = document.getElementById("userPassword").value;
    
    let users = new UserCredentials(firstName, lastName, email, password);
    usersArray.push(users);

    console.log(usersArray);
    return alert("Successfully registered.");
    
});

let btnListUsers = document.getElementById("btnListUsers");
btnListUsers.addEventListener("click", function()
{
    let listUsers = document.getElementById("listUsers");
    if(usersArray.length === 0)
    {
        listUsers.innerText = "No users in the object.";
    }
    else
    {
        document.getElementById("hiddenList").style.visibility = "visible";
        listUsers.innerText = "";
        // console.log(usersArray);
        
        for(let i = 0; i < usersArray.length; i++)
        {
            listUsers.innerText += `Name: ${usersArray[i]["name"]}\nLastname: ${usersArray[i]["lastname"]}\n`;
            // console.log(`Name: ${usersArray[i]["name"]}\nLastname: ${usersArray[i]["lastname"]}\n`);
        }
    }
});