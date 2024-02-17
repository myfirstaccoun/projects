let addmenu = document.querySelector(".addmenu");
let addmenuBtn = document.querySelector(".addmenu button");
let addmenuInput = document.querySelector(".addmenu input");
let addZekrBtn = document.querySelector(".addZekr");
let azkarmenu = document.querySelector(".Azkar");
let azkar;
let black = document.querySelector(".black");
let counter = document.querySelector(".counter");
let increase = document.querySelector(".add");
let menu = document.querySelector(".menu");
let menubtn = document.querySelector(".menubtn");
let num;
let reset = document.querySelector(".reset");
let sebha = document.querySelector(".sebha");


function checkList() {//إظهار وإخفاء القائمة
    if(localStorage.getItem("azkar") == null || localStorage.getItem("azkar") == "" || localStorage.getItem("azkar") == "[]") {
        menu.style.display = "inline-block";
        sebha.style.display = "none";
        black.style.display = "inline-block";
        menubtn.querySelector("img").src = "إغلاق.png";
    } else {
        sebha.style.display = "inline-block";
        black.style.display = "none";
    }
}

checkList();


if(localStorage.getItem("azkar") != null && localStorage.getItem("azkar") != "") {//تخزين الأذكار
    azkar = JSON.parse(localStorage.getItem("azkar"));
} else {
    azkar = [];
    localStorage.setItem("azkar", azkar);
}

localStorage.getItem("num") == null ? num = 0 : num = localStorage.getItem("num");

function addZekr(name, value) {//عمل زر الذكر
    let newZekr = document.createElement("button");
    let newName = document.createElement("h1");
    let newCount = document.createElement("h1");
    let newDelete = document.createElement("img");
    let newnewName = splitId(name.split(" "));

    azkarmenu.append(newZekr);
    newZekr.prepend(newName);
    newZekr.prepend(newCount);
    newZekr.prepend(newDelete);
    
    newZekr.setAttribute("id",newnewName);
    newZekr.setAttribute("class","Zekr");
    
    newName.setAttribute("class","name");
    newName.innerText = name;

    newCount.setAttribute("class","count");
    newCount.innerText = value;

    newDelete.setAttribute("class","delete");
    newDelete.src = "إغلاق.png";
}

function makeAzkar() {//إضافة الأذكار للقائمة
    let i = 0;

    while (i < azkar.length) {
        addZekr(azkar[i].name, azkar[i].number);
        i++;
    }
}

function selectZekr() {//تحديد الذكر على القائمة
    counter.innerText = num;

    
    if(localStorage.getItem("activeZekr") != null && localStorage.getItem("activeZekr") != "") {
        let i = 0;
        let newnewName = splitId(localStorage.getItem("activeZekr").split(" "));

        i = 0;
        while (i < azkar.length) {
            azkarmenu.children[i].style.backgroundColor = "transparent";
            i++;
        }
    
        azkarmenu.querySelector(`#${newnewName}`).style.backgroundColor = "rgb(200, 200, 200)";
    }
}

function splitId(Id) {
    let i = 0;
    let newnewName = Id[0];
    while(i < Id.length-1) {
        newnewName = newnewName + "_" + Id[i+1];
        i++;
    }

    return newnewName;
}

function ZekrIndex(zekrName) {
    let i = 0;
    while (i < azkar.length) {
        if(azkar[i].name == zekrName) {
            break;
        } else {
            i++;
        }
    }

    return i;
}

makeAzkar();

window.onload = () => {
    selectZekr();

    let newnewName;
    if(localStorage.getItem("activeZekr") != null && localStorage.getItem("activeZekr") != "") {
        newnewName = splitId(localStorage.getItem("activeZekr").split(" "));
    }
    
    localStorage.getItem("activeZekr") != null && localStorage.getItem("activeZekr") != "" ? counter.innerText = azkarmenu.querySelector(`#${newnewName} .count`).innerText : "";
}


addZekrBtn.onclick = () => {//زر إضافة ذكر
    addmenu.style.display = "block";
}

menubtn.onclick = () => {//زر القائمة
    if(menu.style.display == "inline-block") {
        menu.style.display = "none";
        menubtn.querySelector("img").src = "قائمة.png";
    } else {
        menu.style.display = "inline-block";
        menubtn.querySelector("img").src = "إغلاق.png";
    }
}

addmenuBtn.onclick = () => {//إضافة ذكر
    typeof azkar == "string" ? azkar = JSON.parse(localStorage.getItem("azkar")) : "";
    azkar.push({name: addmenuInput.value, number: 0});
    addZekr(addmenuInput.value, 0);
    addmenu.style.display = "none";
    localStorage.setItem("activeZekr", addmenuInput.value);
    addmenuInput.value = "";
    localStorage.setItem("azkar",JSON.stringify(azkar));
    checkList();
    selectZekr();
    counter.innerText = 0;
}

azkarmenu.onclick = (eo) => {//الضغط على / الغاء الذكر
    if (eo.target.classList.contains("delete")) {
        let removeId = eo.target.parentNode.querySelector(".name").innerText;
        let i = 0;

        console.log(removeId, localStorage.getItem("activeZekr"), localStorage.getItem("activeZekr") == removeId);

        if(localStorage.getItem("activeZekr") == removeId) {
            sebha.style.display = "none";
            localStorage.setItem("activeZekr", "");
            i = ZekrIndex(removeId);
    
            i > -1 ? azkar.splice(i,1) : "";
            
            localStorage.setItem("azkar", JSON.stringify(azkar));
            eo.target.parentNode.remove();
        } else {
            localStorage.setItem("activeZekr", "");
            i = ZekrIndex(removeId);
    
            i > -1 ? azkar.splice(i,1) : "";
            
            localStorage.setItem("azkar", JSON.stringify(azkar));
            eo.target.parentNode.remove();
            checkList();
        }

    } else {
        
        let i = 0;
        while (i < azkar.length) {
            azkarmenu.children[i].style.backgroundColor = "transparent";
            i++;
        }
        
        sebha.style.display = "inline-block";
        addmenu.style.display = "none";

        if(eo.target.classList.contains("Zekr")) {
            eo.target.style.backgroundColor = "rgb(200, 200, 200)";
            localStorage.setItem("activeZekr", eo.target.querySelector(".name").innerText);
            counter.innerText = eo.target.querySelector(".count").innerText;
        } else {
            eo.target.parentNode.style.backgroundColor = "rgb(200, 200, 200)";
            localStorage.setItem("activeZekr", eo.target.parentNode.querySelector(".name").innerText);
            counter.innerText = eo.target.parentNode.querySelector(".count").innerText;
        }

        if(localStorage.getItem("activeZekr") == "") {
            sebha.style.display = "none";
        }

    }
}

increase.onclick = () => {//إضافة
    let newnewName = splitId(localStorage.getItem("activeZekr").split(" "));
    let i = ZekrIndex(localStorage.getItem("activeZekr"));

    num = azkarmenu.querySelector(`#${newnewName} .count`).innerText;
    num++;
    azkarmenu.querySelector(`#${newnewName} .count`).innerText = num;
    azkar[i].number = num;
    localStorage.setItem("azkar", JSON.stringify(azkar));
    counter.innerText = num;
}

reset.onclick = () => {//إعادة
    num = 0;
    counter.innerText = num;
    
    let newnewName = splitId(localStorage.getItem("activeZekr").split(" "));
    azkarmenu.querySelector(`#${newnewName} .count`).innerText = 0;
    
    let i = ZekrIndex(localStorage.getItem("activeZekr"));

    azkar[i].number = 0;
    localStorage.setItem("azkar", JSON.stringify(azkar));
}