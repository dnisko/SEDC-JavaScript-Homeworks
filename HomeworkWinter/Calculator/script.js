let txtCurrent = document.getElementById("txtCurrent");
let txtHistory = document.getElementById("txtHistory");

let current = [];
let history = "";
let clicked = false;

// Buttons
let btnZero = document.getElementById("zero");
let btnOne = document.getElementById("one");
let btnTwo = document.getElementById("two");
let btnThree = document.getElementById("three");
let btnFour = document.getElementById("four");
let btnFive = document.getElementById("five");
let btnSix = document.getElementById("six");
let btnSeven = document.getElementById("seven");
let btnEight = document.getElementById("eight");
let btnNine = document.getElementById("nine");

let btnDot = document.getElementById("dot");

let btnPlus = document.getElementById("plus");
let btnMinus = document.getElementById("minus");
let btnMultiplication = document.getElementById("multiplication");
let btnDivision = document.getElementById("division");
let btnEqual = document.getElementById("equal");

let btnClear = document.getElementById("clear");
let btnBackspace = document.getElementById("backspace");

document.querySelector("body").addEventListener("load", function()
{
    txtCurrent.value = "";
    txtHistory.value = "";
});

btnClear.addEventListener("click", function()
{
    txtCurrent.value = "";
    txtHistory.value = "";
    current = [];
    history = "";
    // console.log(txtCurrent.value);
});

btnBackspace.addEventListener("click", function()
{
    let currentText = txtCurrent.value
    let tempArray = [];

    for(let i = 0; i < currentText.length; i++)
    {
        tempArray.push(currentText[i]);
    }
    // console.log(tempArray);
    tempArray.pop();
    // console.log(tempArray);
    currentText = tempArray.join("");
    txtCurrent.value = currentText;
    // console.log(currentText);
    // console.log(currentText[currentText.length-1]);
});

btnDot.addEventListener("click", function()
{
    let checkedFloat = checkFloat(parseFloat(txtCurrent.value));
    // console.log(checkedFloat);
    if(checkedFloat === true)
    {
        txtCurrent.value += ".";
    }
});

btnEqual.addEventListener("click", function()
{
    checkCurrentText();
    // console.log(txtCurrent.value);
    if(txtCurrent.value !== "")
    {
        let parsed = parseFloat(txtCurrent.value);
        current.push(parsed);
        // console.log(current);
        if(current.length > 1)
        {
            history = txtHistory.value;
            // console.log(current);
            // console.log("history = ");
            // console.log(history);
            // let equality = history.split(" ");
            let operand = history[history.length-1];
            // console.log(operand);
            
            let result = null;

            if(current[0] == 0 || current[1] == 0)
            {
                txtCurrent.value = "Cannot divide by zero";
                txtHistory.value = "";
                current = [];
            }
            else
            {
                switch (operand) 
                {
                    case "+":
                        result = current[0] + current[1];
                        break;
                    case "-":
                        result = current[0] - current[1];
                        break;
                    case "⋅":
                        result = current[0] * current[1];
                        break;
                    case "÷":
                        result = current[0] / current[1];
                        break;
                }
                // console.log(result);
                let parseResult = String(result);
                // console.log(parseResult.length);

                for(let i = 0; i < parseResult.length; i++)
                {
                    // console.log(parseResult[i]);
                    if(parseResult[i] == "e")
                    {
                        txtCurrent.value = "The number is too big.";
                        txtHistory.value = "";
                        current = [];
                        break;
                    }
                }

                if(current.length > 0 )
                {
                    txtHistory.value = `${current[0]} ${operand} ${current[1]} = `;
                    txtCurrent.value = `${result}`;
                    current = [];
                }
                
            }
            
        }
        else
        {
            txtHistory.value = `${parsed} =`;
            // console.log(current);
        }
    }
});

btnPlus.addEventListener("click", function()
{
    checkCurrentText();
    // console.log(txtCurrent.value);
    if(txtCurrent.value !== "")
    {
        let parsed = parseFloat(txtCurrent.value);
        current.push(parsed);
        if(current.length > 1)
        {
            console.log(current);
            history = current[0] + current[1];
            txtHistory.value = `${history} +`;
            txtCurrent.value = current[1];
            current = [history];
        }
        else
        {
            txtHistory.value = `${parsed} +`;
            // console.log(current);
        }
    }
    clicked = true;
});

btnMinus.addEventListener("click", function()
{
    checkCurrentText();
    // console.log(txtCurrent.value);
    if(txtCurrent.value !== "")
    {
        
        let parsed = parseFloat(txtCurrent.value);
        current.push(parsed);
        if(current.length > 1)
        {
            // console.log(current);
            history = current[0] - current[1];
            txtHistory.value = `${history} -`;
            txtCurrent.value = current[1];
            current = [history];
        }
        else
        {
            txtHistory.value = `${parsed} -`;
            // console.log(current);
        }
    }
    clicked = true;
});

btnDivision.addEventListener("click", function()
{
    checkCurrentText();
    // console.log(txtCurrent.value);
    if(txtCurrent.value !== "")
    {
        let parsed = parseFloat(txtCurrent.value);
        current.push(parsed);
        if(current.length > 1)
        {
            // console.log(current);
            if(current[0] == 0 || current[1] == 0)
            {
                txtCurrent.value = "Cannot divide by zero";
                current = [];
            }
            else
            {
                history = current[0] / current[1];
                txtHistory.value = `${history} ÷`;
                txtCurrent.value = current[1];
                current = [history];
            }
            
        }
        else
        {
            txtHistory.value = `${parsed} ÷`;
            // console.log(current);
        }
    }
    clicked = true;
});

btnMultiplication.addEventListener("click", function()
{
    checkCurrentText();
    // console.log(txtCurrent.value);
    if(txtCurrent.value !== "")
    {
        
        let parsed = parseFloat(txtCurrent.value);
        current.push(parsed);
        if(current.length > 1)
        {
            // console.log(current);
            history = current[0] * current[1];
            txtHistory.value = `${history} ⋅`;
            txtCurrent.value = current[1];
            current = [history];
        }
        else
        {
            txtHistory.value = `${parsed} ⋅`;
            // console.log(current);
        }
    }
    clicked = true;
});

btnZero.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 0;
});

btnOne.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 1;
});

btnTwo.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 2;
});

btnThree.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 3;
});

btnFour.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 4;
});

btnFive.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 5;
});

btnSix.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 6;
});

btnSeven.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 7;
});

btnEight.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 8;
});

btnNine.addEventListener("click", function()
{
    checkIfOperatorClicked();
    txtCurrent.value += 9;
});


function checkFloat(num)
{
    return num % 1 === 0;
}

function checkCurrentText()
{
    if(isNaN(txtCurrent.value))
    {
        txtCurrent.value = "";
        txtHistory.value = "";
        current = [];
    }
    
    if(current.length > 0)
    {
        let checkBig = [];
        checkBig.push(String(current[0]));
        checkBig.push(txtCurrent.value);
        // console.log(checkBig);
        for(let i = 0; i < checkBig.length; i++)
        {
            // console.log(`1st FOR ${i}`);
            // console.log(checkBig.length);
            for(let j = 0; j < checkBig[i].length; j++)
            {
                // console.log(`2nd FOR ${i} ${j}`);
                // console.log(checkBig[i][j]);
                
                if(checkBig[i][j] == "e")
                {
                    txtCurrent.value = "The number is too big.";
                    txtHistory.value = "";
                    current = [];
                    // console.log("  enter IF");
                    break;
                }
            }
        }
    }
}

function checkIfOperatorClicked()
{
    if (clicked === true)
    {
        txtCurrent.value = "";
        clicked = false;
    }
}