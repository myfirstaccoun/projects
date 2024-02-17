const bodyon = document.querySelector("body");
const divbtns = document.querySelector(".divbtns");
let btns = document.querySelectorAll(".divbtns .thebtn");
let txt = document.querySelector(".inputs input");
let stars = document.querySelector(".star");
let del = document.querySelector(".delete");
let delsure = document.querySelector(".delsure");
let delsurediv = document.querySelector(".delsurediv");
let delnum;
let yesbtn = document.querySelector(".yes");
let nobtn = document.querySelector(".no");
let len = (document.querySelectorAll(".divbtns .thebtn").length) - 1;
let editdiv = document.querySelector(".editpagediv");
let editinput = document.querySelector(".editpagediv input");
let editval = editinput.value;
let edittarg;

function saveData(){
    setTimeout(() => {

        let dataObjArr = [];

        for(let i = 0; i < divbtns.getElementsByTagName("p").length; i++) {
            let btnVal = {
                name: divbtns.getElementsByTagName("p")[i].innerText,
                star: divbtns.getElementsByTagName("img")[(2*(i+1)) + i].src,
            };
    
            dataObjArr.push(btnVal);
        }

        localStorage.setItem("data", JSON.stringify(dataObjArr));
    },500);
}


/*  تعديل ال
    margin
    والغاؤه من اخر زرار
*/
function lenfx(num = 1) {
    len = (document.querySelectorAll(".divbtns .thebtn").length) - 1;
    btns = document.querySelectorAll(".divbtns .thebtn");

    if (len != -1) {

        if (num == 1) {
            btns[len].classList.remove("margin-none");
        } else if (num == 2) {
            btns[len].classList.add("margin-none");
        }

    }

}

function add() {
    btns = document.querySelectorAll(".divbtns .thebtn");
    let none = document.querySelectorAll(".none");

    if (btns.length >= 5) {
        divbtns.classList.add("divbtns-scroll");
    }

    if (txt.value == "") {
        alert("إملأ البينات");
    } else {



        if (none.length == 1) {
            none[0].remove();
        }

        lenfx();

        divbtns.innerHTML = `${divbtns.innerHTML} <div class="thebtn margin-none">
        <p>${txt.value}</p>
        <img src="إلغاء.png" class="delete">
        <img src="تعديل.png" class="edit">
        <img src="نجمة.png" class="star">
        </div>`;
        txt.value = "";
        saveData();
    }
}

delsure = document.querySelector(".delsure");

divbtns.onclick = (eo) => {
    if (eo.target.classList.contains("delete")) {
        btns = document.querySelectorAll(".divbtns .thebtn");
        delnum = eo.target.parentNode;

        delsure.style.display = "block";
        delsurediv.style.display = "block";
        editdiv.style.display = "none";
        bodyon.style.backgroundColor = "rgb(255, 206, 206)";
    } else if (eo.target.classList.contains("star")) {

        if (eo.target.src == "file:///Y:/%D8%AA%D8%AF%D8%B1%D8%A8%20%D8%B9%D9%84%D9%89%20%D8%B5%D9%86%D8%B9%20%D8%A7%D9%84%D9%85%D9%88%D8%A7%D9%82%D8%B9/%D8%A7%D9%84%D9%88%D8%A7%D8%AC%D9%87%D8%A7%D8%AA/%D8%AA%D8%B9%D9%84%D9%85%20%D8%AC%D8%A7%D9%81%D8%A7%20%D8%B3%D9%83%D8%B1%D8%A8%D8%AA/%D8%A7%D9%84%D9%85%D8%B4%D8%B1%D9%88%D8%B9%202/%D9%86%D8%AC%D9%85%D8%A9.png") {
                eo.target.src = "نجمة بعد.png";
                eo.target.parentNode.remove();
                divbtns.innerHTML = `<div class="thebtn">
                ${eo.target.parentNode.innerHTML}
                </div> ${divbtns.innerHTML}`;

                lenfx(2);
        } else {
            eo.target.src = "نجمة.png";
        }
        saveData();
    } else if (eo.target.classList.contains("edit")) {
        
        edittarg = eo.target.parentNode;
        editinput.value = "";
        delsure.style.display = "block";
        editdiv.style.display = "block";
        delsurediv.style.display = "none";
        editinput.focus = true;
        bodyon.style.backgroundColor = "rgb(255, 206, 206)";
    }
};

delsure.onclick = (eo) => {
    if (eo.target.classList.contains("yes")) {
        delnum.remove();

        btns = document.querySelectorAll(".divbtns .thebtn");

        saveData();

        if (btns.length <= 5 && btns.length != 0) {
            divbtns.classList.remove("divbtns-scroll");
        }

        if (btns.length == 0) {
            const non = document.createElement("h1");
            non.innerText = "إيه يا معلم";
            non.classList.add("none");
            divbtns.append(non);
        }
        
        delsure.style.display = "none";
        bodyon.style.backgroundColor = "rgb(0, 63, 163)";

    } else if (eo.target.classList.contains("no")) {
        delsure.style.display = "none";
        bodyon.style.backgroundColor = "rgb(0, 63, 163)";
    } else if (eo.target.classList.contains("editbtn") || eo.keyCode == 13) {
        if (editinput.value == "") {
            alert("إملأ البينات");
        } else {
            editval = editinput.value;
            edittarg.querySelector("p").innerText = editval;
            delsure.style.display= "none";
            bodyon.style.backgroundColor = "rgb(0, 63, 163)";
            saveData();
        }
    }
}

window.onload = () => {

    localStorage.getItem("data") == "[]" ? localStorage.clear() : "";

    if(localStorage.length > 0) {
        let myData = JSON.parse(localStorage.data);
        let myNum = 0;
        for (let i = 0; i < JSON.parse(localStorage.data).length-1; i++) {
            divbtns.innerHTML = `${divbtns.innerHTML} <div class="thebtn">
        <p>${myData[i].name}</p>
        <img src="إلغاء.png" class="delete">
        <img src="تعديل.png" class="edit">
        <img src="${myData[i].star}" class="star">
        </div>`;
            myNum = i + 1;
        }

        divbtns.innerHTML = `${divbtns.innerHTML} <div class="thebtn margin-none">
        <p>${myData[myNum].name}</p>
        <img src="إلغاء.png" class="delete">
        <img src="تعديل.png" class="edit">
        <img src="${myData[myNum].star}" class="star">
        </div>`;

    }else {
        if (btns.length == 0) {
            const non = document.createElement("h1");
            non.innerText = "إيه يا معلم";
            non.classList.add("none");
            divbtns.append(non);
        }
    }
}

window.addEventListener("keydown" , (es) => {
    if (es.key == "Escape") {
        delsure.style.display= "none";
        bodyon.style.backgroundColor = "rgb(0, 63, 163)";
        editinput.value = "";
    }
});

editinput.onkeydown = (e) => {
    if (e.keyCode == 13) {
        if (editinput.value == "") {
            alert("إملأ البينات");
        } else {
            editval = editinput.value;
            edittarg.querySelector("p").innerText = editval;
            delsure.style.display= "none";
            bodyon.style.backgroundColor = "rgb(0, 63, 163)";
            saveData();
        }
        editinput.blur();
    }
}