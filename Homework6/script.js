let rows = prompt("Enter number of rows:");
let columns = prompt("Enter number of cells:");

let parsedRows = parseInt(rows);
let parsedColumns = parseInt(columns);

addTable(parsedRows, parsedColumns);

function addTable(rows, columns)
{
    if(isNaN(rows) || isNaN(columns))
    {
        alert("Invalid data entered!");
    }
    else
    {    
        let mainDiv = document.getElementById("main");
        let createTable = document.createElement("table");
        
        for (let i = 0; i < rows; i++)
        {
            const tr = createTable.insertRow();
            
            for(let j = 0; j < columns; j++)
            {
                const td = tr.insertCell();
                td.textContent = `Row-${i + 1} Cell-${j + 1}`;
                //i & j +1 to start showing from 1, not 0
            }            
        }
        createTable.setAttribute("border", "1"); //this way adds border to whole table
        // createTable.style.border = "1px solid black"; //this way adds border only on the edges
        createTable.style.fontSize = "20px";
        mainDiv.appendChild(createTable);
    }
}