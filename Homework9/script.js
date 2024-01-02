// Part 1
let button = $("#button");
button.on("click", function()
{
    let text = $("#text").val();
    console.log(text);
    $("#h1Part1").first().text(`Your output message is: ${text}`);
});


// Part 2
$("#part2").after(`<br><br>------------------------------------------------------------------<h3>Enter text: </h3><input type="text" id="textForText"><br>
<h3>Enter color: </h3><input type="text" id="textForColor">`);

$("#textForColor").after(`<br><br><input type="button" value="Click to change text and color" id="btnChange">`);

$("#btnChange").after(`<br><br><h1 id="result">asd</h1>`);

//https://stackoverflow.com/a/48485007/2875898
//check if entered string exists in CSS property `color`
function isColor(color)
{
    let clr = new Option().style;
    clr.color = color;
    return clr.color == color;
};
let btnChange = $("#btnChange");
btnChange.on("click", function()
{
    $("#result").css("color", "black");
    let text = $("#textForText").val();
    let color = $("#textForColor").val();

    console.log(text);
    console.log(color);
    //isColor(color) === true || 
    if(isColor(color) === false || !text)
    {
        if(isColor(color) === false)
        {
            $("#result").first().text(`Invalid color entered - ${color}`);
        }
        if(!text)
        {
            $("#result").append().text(`Invalid text entered - ${text}`);
        }
    }
    else
    {
        $("#result").css("color", color);
        $("#result").first().text(`Text entered: ${text}\nColor entered: ${color}`);
    }
});