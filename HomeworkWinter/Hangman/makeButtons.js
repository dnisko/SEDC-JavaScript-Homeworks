function getAlphabet()
{
    let buttons = document.getElementById("middle");
    //https://www.geeksforgeeks.org/javascript-program-to-print-alphabets-from-a-to-z-using-loop/
    for (i = 97; i <= 122; i++)
    {
        buttons.innerHTML += `<button type="button" id="${String.fromCharCode(i)}Btn" class="btn btn-light middleItem">${String.fromCharCode(i)}</button>`;
        // console.log(String.fromCharCode(i));
    }

    let middleItem = document.querySelectorAll(".middleItem");
    for(let i = 0; i < middleItem.length; i++)
    {
        middleItem[i].style.fontSize = "20px";
        middleItem[i].style.textAlign = "center";
        middleItem[i].style.color = "#c2d709";
        middleItem[i].style.width = "40px";
        middleItem[i].style.height = "40px";
    }
}

getAlphabet();