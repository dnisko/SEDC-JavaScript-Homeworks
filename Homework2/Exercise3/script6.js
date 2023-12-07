//Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

const inputPhysics = parseInt(prompt("Enter score for Physics"));
const inputChemistry = parseInt(prompt("Enter score for Chemistry"));
const inputBiology = parseInt(prompt("Enter score for Biology"));
const inputMathematics =  parseInt(prompt("Enter score for Mathematics"));
const inputComputer = parseInt(prompt("Enter score for Computer"));

console.log(inputPhysics);
console.log(inputChemistry);
console.log(inputBiology);
console.log(inputMathematics);
console.log(inputComputer);

let totalScore = inputPhysics + inputChemistry + inputBiology + inputMathematics + inputComputer;
let percentage = totalScore / 5;

if(percentage >= 90 )
{
    console.log("Your total score is: " + percentage + "\nYour grade is A!");
}
else if(percentage >= 80 )
{
    console.log("Your total score is: " + percentage + "\nYour grade is B!");
}
else if(percentage >= 70 )
{
    console.log("Your total score is: " + percentage + "\nYour grade is C!");
}
else if(percentage >= 60 )
{
    console.log("Your total score is: " + percentage + "\nYour grade is D!");
}
else if(percentage >= 40 )
{
    console.log("Your total score is: " + percentage + "\nYour grade is E!");
}
else
{
    console.log("Your total score is: " + percentage + "\nYour grade is F!");
}