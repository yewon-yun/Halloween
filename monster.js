let booleanVar = false;

function boo() {
    if (booleanVar == false){
        document.getElementById("cute").style.display = "block";
        document.getElementById("spooky").style.display = "none";
        document.getElementById("page").style.backgroundColor = "white";
        booleanVar = true;
    }
    else{
        document.getElementById("cute").style.display = "none";
        document.getElementById("spooky").style.display = "block";
        document.getElementById("page").style.backgroundColor = "black";
        booleanVar = false;
    }
}