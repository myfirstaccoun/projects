let bodym = document.querySelector("body");
let n1 = document.querySelector(".num1");
let num1;
let n2 = document.querySelector(".num2");
let num2;
let reset = document.querySelector(".reset");
let inpt = document.querySelector(".resinpt");
let numpress = document.querySelector(".parent");


function right(str, chr) {
    return str.slice(str.length-chr,str.length);
}
  
function left(str, chr) {
    return str.slice(0, chr - str.length);
}

window.onload = () => {
    n1.innerText = Math.round(Math.random() * 10,0);
    num1 = n1.innerText;
    n2.innerText = Math.round(Math.random() * 10,0);
    num2 = n2.innerText;
}

reset.onclick = () => {
    n1.innerText = Math.round(Math.random() * 10,0);
    num1 = n1.innerText;
    n2.innerText = Math.round(Math.random() * 10,0);
    num2 = n2.innerText;
}

inpt.onkeyup = (pr) => {
    if (pr.key == 0 && inpt.value * 1 == "0") {
        inpt.value = 0;
    } else {
        if ((pr.key > 0 && pr.key <= 9 || (pr.key == 0 && inpt.value != "")) && inpt.value + pr.key < 1000 && inpt != document.activeElement) {
            if (inpt.value == "0") {
                inpt.value = pr.key;
            } else {
                inpt.value += pr.key;
            }
        } else if (pr.keyCode == 8) {
            inpt.value = (inpt.value / 10) - (right(inpt.value,1))/10;
        }

        if (pr.keyCode == 82) {
            n1.innerText = Math.round(Math.random() * 10,0);
            num1 = n1.innerText;
            n2.innerText = Math.round(Math.random() * 10,0);
            num2 = n2.innerText;
        }

        if (pr.keyCode == 13) {
            if ((inpt.value) == (num1 * num2)) {
                bodym.style.backgroundColor = "rgb(0 , 255 , 0)";
                setTimeout(() => {
                    n1.innerText = Math.round(Math.random() * 10,0);
                    num1 = n1.innerText;
                    n2.innerText = Math.round(Math.random() * 10,0);
                    num2 = n2.innerText;
                    inpt.value = 0;
                },1100);
            } else {
                bodym.style.backgroundColor = "rgb(255 , 193 ,193)";
            }

            setTimeout(() => {bodym.style.backgroundColor = "rgb(255 , 255 , 255)";}, 1000);
        }
    }
}

window.onkeydown = (pr) => {

    if ((pr.key >= 0 && pr.key <= 9 || (pr.key == 0 && inpt.value != "")) && inpt.value + pr.key < 1000 && inpt != document.activeElement) {
        if (inpt.value == "0") {
            inpt.value = pr.key;
        } else {
            inpt.value += pr.key;
        }
    } else if (pr.keyCode == 8) {
        inpt.value = (inpt.value / 10) - (right(inpt.value,1))/10;
    }

    if (pr.keyCode == 82) {
        n1.innerText = Math.round(Math.random() * 10,0);
        num1 = n1.innerText;
        n2.innerText = Math.round(Math.random() * 10,0);
        num2 = n2.innerText;
    }

    if (pr.keyCode == 13) {
        if ((inpt.value) == (num1 * num2)) {
            bodym.style.backgroundColor = "rgb(0 , 255 , 0)";
            setTimeout(() => {
                n1.innerText = Math.round(Math.random() * 10,0);
                num1 = n1.innerText;
                n2.innerText = Math.round(Math.random() * 10,0);
                num2 = n2.innerText;
                inpt.value = 0;
            },1100);
        } else {
            bodym.style.backgroundColor = "rgb(255 , 193 ,193)";
        }

        setTimeout(() => {bodym.style.backgroundColor = "rgb(255 , 255 , 255)";}, 1000);
    }
}

numpress.onclick = (eo) => {
    if (eo.target.classList == "num") {
        if ((eo.target.innerText >= 0 && eo.target.innerText <= 9 || (eo.target.innerText == 0 && inpt.value != "")) && inpt.value + eo.target.innerText < 1000 && inpt != document.activeElement) {
            if (inpt.value == "0") {
                inpt.value = eo.target.innerText;
            } else {
                inpt.value += eo.target.innerText;
            }
        }
    }

    if (eo.target.innerText == "⌫") {
        inpt.value = (inpt.value / 10) - (right(inpt.value,1))/10;
    }

    if (eo.target.classList == "enter") {
        if ((inpt.value) == (num1 * num2)) {
            bodym.style.backgroundColor = "rgb(0 , 255 , 0)";
            setTimeout(() => {
                n1.innerText = Math.round(Math.random() * 10,0);
                num1 = n1.innerText;
                n2.innerText = Math.round(Math.random() * 10,0);
                num2 = n2.innerText;
                inpt.value = 0;
            },1100);
        } else {
            bodym.style.backgroundColor = "rgb(255 , 193 ,193)";
        }

        setTimeout(() => {bodym.style.backgroundColor = "rgb(255 , 255 , 255)";}, 1000);
    }
}
