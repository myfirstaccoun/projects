const numbad = document.querySelector(".parent");
const inpt  = document.querySelector(".big");
const small  = document.querySelector(".small");
let count = 0;
let op = document.querySelectorAll(".operators");
let num1 = 0;
let num2 = 0;
let operator = "+";
let result = 0;

function right(str, chr) {
    return str.slice(str.length-chr,str.length);
}
  
function left(str, chr) {
    return str.slice(0, chr - str.length);
}

function sumnums() {
    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            result = num1 / num2;
            break;
    }
}

function changetxtsize () {
    count = inpt.innerText.split("").length;

    if (count < 8) {
        inpt.style.fontSize = "60px";
        inpt.style.top = "0";
    } else if (count >= 8 && count < 9) {
        inpt.style = "font-size: 55px; top: 10px";
    } else if (count >= 9 && count < 10) {
        inpt.style.fontSize = "50px";
    } else if (count >= 10 && count < 11) {
        inpt.style.fontSize = "45px";
        inpt.style.top = "15px";
    } else if (count >= 11 && count < 12) {
        inpt.style.fontSize = "40px";
        inpt.style.top = "25px";
    } else if (count >= 12 && count < 13) {
        inpt.style.fontSize = "38px";
        inpt.style.top = "30px";
    } else if (count >= 13) {
        inpt.innerText = left(inpt.innerText , inpt.innerText.length - 1);
    }
}

numbad.onclick = (eo) => {
    if (eo.target.classList.contains("nums")) {
        if (eo.target.innerText >= 0 && eo.target.innerText <= 9) {
            if (inpt.innerText == "0") {
                inpt.innerText = eo.target.innerText;
            } else {
                inpt.innerText += eo.target.innerText;
            }
        }
    }

    if (eo.target.innerText == "⌫") {
        inpt.innerText = left(inpt.innerText , inpt.innerText.length - 1);

        if (inpt.innerText == "") {
            inpt.innerText = 0;
        }
    }

    if (eo.target.classList.contains("operators")) {
        if (eo.target.innerText == "÷") {
            operator = "/";
        } else {
            operator = eo.target.innerText;
        }
        num1 = parseFloat(inpt.innerText);
        small.innerText = ` ${operator} ${num1}`;
        inpt.innerText = 0;
    }

    if (eo.target.classList.contains("equal")) {
        num2 = parseFloat(inpt.innerText);
        small.innerText = ` = ${num2} ${operator} ${num1}`;
        sumnums();
        inpt.innerText = result;
        num1 = result;
    }

    if (eo.target.classList.contains("delall")) {
        num1 = 0;
        num2 = 0;
        result = 0;
        inpt.innerText = 0;
        small.innerText = "";
    }

    if (eo.target.classList.contains("dot")) {
        if (inpt.innerText.indexOf(".") == -1) {
            inpt.innerText += ".";
        }
    }

    changetxtsize();
}

window.onkeydown = (pr) => {
    if ((pr.key >= 0 && pr.key <= 9 || (pr.key == 0 && inpt.innerText != "")) && inpt != document.activeElement) {
        if (inpt.innerText == "0") {
            inpt.innerText = pr.key;
        } else {
            inpt.innerText += pr.key;
        }
    } else if (pr.keyCode == 8) {
        inpt.innerText = left(inpt.innerText , inpt.innerText.length - 1);
        
        if (inpt.innerText == "") {
            inpt.innerText = 0;
        }
    }

    switch (pr.key) {

        case "+":
            operator = "+";
            break;
        
        case "-":
            operator = "-";
            break;

        case "*":
            operator = "*";
            break;

        case "/":
            operator = "/";
            break;
    }
    
    if (pr.key == "+" || pr.key == "-" || pr.key == "*" || pr.key == "/") {
        num1 = parseFloat(inpt.innerText);
        small.innerText = ` ${operator} ${num1}`;
        inpt.innerText = 0;
    }

    if (pr.key == "=" || pr.key == "Enter") {
        num2 = parseFloat(inpt.innerText);
        small.innerText = ` = ${num2} ${operator} ${num1}`;
        sumnums();
        inpt.innerText = result;
        num1 = result;
    }

    if (pr.key == "Delete") {
        num1 = 0;
        num2 = 0;
        result = 0;
        inpt.innerText = 0;
        small.innerText = "";
    }

    if (pr.keyCode == 190) {
        if (inpt.innerText.indexOf(".") == -1) {
            inpt.innerText += ".";
        }
    }

    changetxtsize();
}