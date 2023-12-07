const userInput = prompt("Enter year for calculation of the Chinese Zodiac Sign:");

let chineseZodiac = (userInput - 4) % 12;

if(chineseZodiac === 0)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Rat");
}
else if(chineseZodiac === 1)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Ox");
}
else if(chineseZodiac === 2)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Tiger");
}
else if(chineseZodiac === 3)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Rabit");
}
else if(chineseZodiac === 4)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Dragon");
}
else if(chineseZodiac === 5)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Snake");
}
else if(chineseZodiac === 6)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Horse");
}
else if(chineseZodiac === 7)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Goat");
}
else if(chineseZodiac === 8)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Monkey");
}
else if(chineseZodiac === 9)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Rooster");
}
else if(chineseZodiac === 10)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Dog");
}
else if(chineseZodiac === 11)
{
    alert("Your year is: " + userInput + " and the chinese zodiac sign is: Pig");
}
else
{
    alert("Invalid data.");
}

//OR
// let userInput = prompt("Enter year for calculation of the Chinese Zodiac Sign:");
// let chineseZodiac = (userInput - 4) % 12;

// if(chineseZodiac === 0)
// {
//     chineseZodiac = "Rat";
// }
// else if(chineseZodiac === 1)
// {
//     chineseZodiac = "Ox";
// }
// else if(chineseZodiac === 2)
// {
//     chineseZodiac = "Tiger";
// }
// else if(chineseZodiac === 3)
// {
//     chineseZodiac = "Rabit";
// }
// else if(chineseZodiac === 4)
// {
//     chineseZodiac = "Dragon";
// }
// else if(chineseZodiac === 5)
// {
//     chineseZodiac = "Snake";
// }
// else if(chineseZodiac === 6)
// {
//     chineseZodiac = "Horse";
// }
// else if(chineseZodiac === 7)
// {
//     chineseZodiac = "Snake";
// }
// else if(chineseZodiac === 8)
// {
//     chineseZodiac = "Monkey";
// }
// else if(chineseZodiac === 9)
// {
//     chineseZodiac = "Rooster";
// }
// else if(chineseZodiac === 10)
// {
//     chineseZodiac = "Dog";
// }
// else if(chineseZodiac === 11)
// {
//     chineseZodiac = "Pig";
// }
// else
// {
//     chineseZodiac = "Invalid data.";
// }

// alert("Your chinese zodiac sign is: " + chineseZodiac);