//المتغيرات
const allitems = document.querySelector("*");
const numbad = document.querySelector(".parent");
const inpt  = document.querySelector(".big");
const small  = document.querySelector(".small");
const slider1 = document.querySelector('.small');
const slider2 = document.querySelector('.big');
const sliderup = document.querySelector('.bigup');
const sliderup2 = document.querySelector('.smallup');
let isDown = false;
let startX;
let scrollLeft;
let count = 0;
let op = document.querySelectorAll(".operators");
let num1 = 0;
let num2 = 0;
let operator = "+";
let result = 0;

//الأرقام الكبيرة
let lennums = 1;
//الأرقام الصغيرة
let lennums2 = 0;


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

function checklennum(){
    lennums = inpt.innerText.split("").length;
    if (lennums >= 9) {
        sliderup.classList.add("up");
    } else {
        if (sliderup.classList.contains("up")) {
            sliderup.classList.remove("up");
        }
    }
}

function checklennum2(){
    lennums2 = small.innerText.split("").length;
    if (lennums2 >= 23) {
        sliderup2.classList.add("up");
    } else {
        if (sliderup2.classList.contains("up")) {
            sliderup2.classList.remove("up");
        }
    }
}

numbad.onclick = (eo) => {
    {//الأرقام
    if (eo.target.classList.contains("nums")) {
        if (eo.target.innerText >= 0 && eo.target.innerText <= 9) {
            if (inpt.innerText == "0") {
                inpt.innerText = eo.target.innerText;
            } else {
                inpt.innerText += eo.target.innerText;
            }
        }
    }
    }

    {//المسح
    if (eo.target.innerText == "⌫") {
        inpt.innerText = left(inpt.innerText , inpt.innerText.length - 1);

        if (inpt.innerText == "") {
            inpt.innerText = 0;
        }
    }
    }

    {//العمليات الحسابية
    if (eo.target.classList.contains("operators")) {
        if (eo.target.innerText == "÷") {
            operator = "/";
        } else {
            operator = eo.target.innerText;
        }
        num1 = parseFloat(inpt.innerText);
        small.innerText = ` ${operator} ${num1}`;
        inpt.innerText = 0;
        lennums2 = small.innerText.length;
    }
    }

    {//الناتج
    if (eo.target.classList.contains("equal")) {
        num2 = parseFloat(inpt.innerText);
        small.innerText = ` = ${num2} ${operator} ${num1}`;
        sumnums();
        inpt.innerText = result;
        num1 = result;
        lennums2 = small.innerText.length;
    }
    }

    {//مسح الكل
    if (eo.target.classList.contains("delall")) {
        num1 = 0;
        num2 = 0;
        result = 0;
        inpt.innerText = 0;
        small.innerText = "";
        lennums2 = 0;
    }
    }

    {//النقطة
    if (eo.target.classList.contains("dot")) {
        if (inpt.innerText.indexOf(".") == -1) {
            inpt.innerText += ".";
        }
    }
    }

    checklennum();
    checklennum2();
}

window.onkeydown = (pr) => {
    //الأرقام
    if ((pr.key >= 0 && pr.key <= 9 || (pr.key == 0 && inpt.innerText != "")) && inpt != document.activeElement) {
        if (inpt.innerText == "0") {
            inpt.innerText = pr.key;
        } else {
            inpt.innerText += pr.key;
        }
    }

    //المسح
    else if (pr.keyCode == 8) {
        inpt.innerText = left(inpt.innerText , inpt.innerText.length - 1);
        
        if (inpt.innerText == "") {
            inpt.innerText = 0;
        }
    }
    
    //تغيير قيمة الناتج
    sumnums();
    
    //العمليات الحسابية
    if (pr.key == "+" || pr.key == "-" || pr.key == "*" || pr.key == "/") {
        num1 = parseFloat(inpt.innerText);
        operator = pr.key;
        small.innerText = ` ${operator} ${num1}`;
        inpt.innerText = 0;
        lennums2 = small.innerText.length;
    }

    //الناتج
    if (pr.key == "=" || pr.key == "Enter") {
        num2 = parseFloat(inpt.innerText);
        small.innerText = ` = ${num2} ${operator} ${num1}`;
        sumnums();
        inpt.innerText = result;
        num1 = result;
        lennums2 = small.innerText.length;
    }

    //مسح الكل
    if (pr.key == "Delete") {
        num1 = 0;
        num2 = 0;
        result = 0;
        inpt.innerText = 0;
        small.innerText = "";
        lennums2 = 0;
    }

    //النقطة
    if (pr.keyCode == 190) {
        if (inpt.innerText.indexOf(".") == -1) {
            inpt.innerText += ".";
        }
    }

    //عشان الظل
    checklennum();
    checklennum2();

    //التحريك بالأسهم
    //يمين
    if (pr.keyCode == 39) {
        slider2.scrollBy(20,0);
    }
    //شمال
    else if (pr.keyCode == 37) {
        slider2.scrollBy(-20,0);
    }
}

{//تحريك الأرقام الكبيرة
    sliderup.addEventListener('mousedown', (e) => {
        if (lennums >= 9) {
            isDown = true;
            slider2.classList.add('active');
            startX = e.pageX - slider2.offsetLeft;
            scrollLeft = slider2.scrollLeft;
        }
    });

    sliderup.addEventListener('mouseleave', () => {
        if (lennums >= 9) {
            isDown = false;
            slider2.classList.remove('active');
        }
    });

    sliderup.addEventListener('mouseup', () => {
        if (lennums >= 9) {
            isDown = false;
            slider2.classList.remove('active');
        }
    });

    sliderup.addEventListener('mousemove', (e) => {
        if (lennums >= 9) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider2.offsetLeft;
            const walk = (x - startX);
            slider2.scrollLeft = scrollLeft - walk;
        }
    });
}

{//تحريك الأرقام الصغيرة
sliderup2.addEventListener('mousedown', (e) => {
    if (lennums2 >= 23) {
        isDown = true;
        slider1.classList.add('active');
        startX = e.pageX - slider1.offsetLeft;
        scrollLeft = slider1.scrollLeft;
    }
});

sliderup2.addEventListener('mouseleave', () => {
    if (lennums2 >= 23) {
        isDown = false;
        slider1.classList.remove('active');
    }
});

sliderup2.addEventListener('mouseup', () => {
    if (lennums2 >= 23) {
        isDown = false;
        slider1.classList.remove('active');
    }
});

sliderup2.addEventListener('mousemove', (e) => {
    if (lennums2 >= 23) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider1.offsetLeft;
        const walk = (x - startX);
        slider1.scrollLeft = scrollLeft - walk;
    }
});
}

{//الهاتف

{//تحريك الأرقام الكبيرة
sliderup.addEventListener("touchstart",(e) => {
    if (lennums >= 9) {
        isDown = true;
        slider2.classList.add('active');
        startX = e.touches[0].pageX - slider2.offsetLeft;
        scrollLeft = slider2.scrollLeft;
    }
})

sliderup.addEventListener("touchend",(e) => {
    if (lennums >= 9) {
        isDown = false;
        slider2.classList.remove('active');
    }
})

sliderup.addEventListener("touchmove",(e) => {
    if (lennums >= 9) {
        if (!isDown) return;
        e.preventDefault();
        const x = e.touches[0].pageX - slider2.offsetLeft;
        const walk = (x - startX);
        slider2.scrollLeft = scrollLeft - walk;
    }
})
}

{//تحريك الأرقام الصغيرة
    sliderup2.addEventListener("touchstart",(e) => {
        if (lennums2 >= 23) {
            isDown = true;
            slider1.classList.add('active');
            startX = e.touches[0].pageX - slider1.offsetLeft;
            scrollLeft = slider1.scrollLeft;
        }
    })
    
    sliderup2.addEventListener("touchend",(e) => {
        if (lennums2 >= 23) {
            isDown = false;
            slider1.classList.remove('active');
        }
    })
    
    sliderup2.addEventListener("touchmove",(e) => {
        if (lennums2 >= 23) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.touches[0].pageX - slider1.offsetLeft;
            const walk = (x - startX);
            slider1.scrollLeft = scrollLeft - walk;
        }
    })
}

}