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
        let tbl = document.createElement('table');
        
        for (let i = 0; i < rows; i++)
        {
            const tr = tbl.insertRow();
            
            for(let j = 0; j < columns; j++)
            {
                const td = tr.insertCell();
                td.textContent = `Row-${i + 1} Cell-${j + 1}`;
            }            
        }
        tbl.setAttribute("border", "1");
        // tbl.style.border = "1px solid black";
        tbl.style.fontSize = "20px";
        mainDiv.appendChild(tbl);
    }
}