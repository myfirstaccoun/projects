let key = document.querySelector(".keyCode");
let key2 = document.querySelector(".code");
let keyName = document.querySelector(".keyName");
let allform = document.querySelector(".allinform");
let form = document.querySelector(".keysform");
let press = document.querySelector(".pressany");

window.onkeydown = (pr) => {
    
    if (allform.style.display == "") {
        allform.style.display = "block";
        form.classList.add("margtop");
        press.style.display = "none";
        form.classList.add("show");
    }

    if (pr.key.toUpperCase() == "ARROWRIGHT") {
        keyName.innerText = "➡";
    } else if (pr.key.toUpperCase() == "ARROWLEFT") {
        keyName.innerText = "⬅";
    } else if (pr.key.toUpperCase() == "ARROWUP") {
        keyName.innerText = "⬆";
    } else if (pr.key.toUpperCase() == "ARROWDOWN") {
        keyName.innerText = "⬇";
    } else {
        keyName.innerText = pr.key.toUpperCase();
    }
    
    if (keyName.innerText == "") {
        keyName.innerText = "SPACE";
    }
    

    key.innerText = pr.keyCode;
    key2.innerText = pr.keyCode;
}