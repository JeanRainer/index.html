
function add() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var sum = num1 + num2;
    var display = "SUM: " + sum;
    document.getElementById("display").innerHTML = display;
}


function minus() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var difference = num1 - num2;
    var display = "DIFFERENCE: " + difference;
    document.getElementById("display").innerHTML = display;
}


function multiply() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var product = num1 * num2;
    var display = "PRODUCT: " + product;
    document.getElementById("display").innerHTML = display;
}


function divide() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var quotient = num1 / num2;
    var display = "QUOTIENT: " + quotient;
    document.getElementById("display").innerHTML = display;
}

--------------------------