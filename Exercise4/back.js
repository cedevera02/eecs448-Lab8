var border = ""
var background = ""
var red = "red value"
var green = "green value";
var blue = "blue value";

function change(){
    border = document.getElementById("border")
    background = document.getElementById("background")
    var par = document.getElementById("par")
    if (background.value.toString() == red){
        par.style.backgroundColor = "red";
    }else if (background.value.toString() == green)
    {
        par.style.backgroundColor = "green";
    }else if (background.value.toString() == blue)
    {
        par.style.backgroundColor = "blue";
    }else{
        alert("Input for background must be: \"" + red + "\" or \"" + green +"\" or \"" +blue + "\""); 
    }

    if (border.value.toString() == red){
        par.style.borderColor = "red";
    }else if (border.value.toString() == green)
    {
        par.style.borderColor = "green";
    }else if (border.value.toString() == blue)
    {
        par.style.borderColor = "blue";
    }else{
        alert("Input for border must be: \"" + red + "\" or \"" + green +"\" or \"" +blue + "\""); 
    }
}