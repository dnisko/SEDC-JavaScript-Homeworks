// Additional notes:

// For some of the solutions you will have to look for the relevant formula
// Make sure to declare and name the variables properly using relevant keywords (let/const) and give proper names to the variables
// Try to write the code more readable and descriptive


//1. Write a JavaScript program that calculates the total price of 30 Phones, where the price of one phone is $119.95 and the tax rate is 5%. Print the result in the console.
//                      Program 1
let phonePrice = 119.95; //not a const because it could change in real life
const tax = 5;
let priceWithTax = phonePrice + ((tax / 100) * phonePrice);
let phoneQuantity = 30;

let resultProgram1 = priceWithTax * phoneQuantity;

console.log("Total price for", phoneQuantity, "phones is:", "$", resultProgram1);



//2. Write a JavaScript program that takes minutes and converts them to seconds. Print the result in the console.
//                      Program2
const secondsInMinutes = 60;
let minutes = 60;
let resultProgram2 = secondsInMinutes * minutes;

console.log("There are", resultProgram2, "seconds in", minutes, "minutes.");



//3. Write a JavaScript program that takes a number increments the number by +1 and prints the result in the console.
//                      Program3
let incrementingNumber = 1;
incrementingNumber++;
incrementingNumber++;
console.log("Incrementing the number:", incrementingNumber);



//4. Write a JavaScript program that takes the base and height of a triangle and calculates its area. Print the result in the console.
//                      Program4
let triangleBase = 10;
let triangleHeight = 5;
let tirangleArea = 0.5 * triangleBase * triangleHeight;

console.log("The area of a triangle with base:", triangleBase, "and height:", triangleHeight, "is:", tirangleArea);



//5. Write a JavaScript program that takes the length and width of a rectangle and finds its perimeter. Print the result in the console.
//                      Program5
let rectangleWidth = 5;
let rectangleHeight = 7;
let rectanglePerimeter = 2 * (rectangleWidth + rectangleHeight);

console.log("The perimeter of a rectangle with width:", rectangleWidth, "and height:", rectangleHeight, "is:", rectanglePerimeter);


//6. Write a JavaScript program that will calculate the area of a circle. Print the result in the console
//                      Program6
const pi = 3.14;
let circleRadius = 3;
let circleArea = pi * (circleRadius * circleRadius);

console.log("The area of a circle with a radius of:", circleRadius, "is:", circleArea, "cm2");