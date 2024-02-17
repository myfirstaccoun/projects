let mainH = document.querySelector("h1.main-content");
// let theDate = "30 / 7 / 2022";
let theDate = "15 / 12 / 2007";

let mainSec;
let hor;
let min;
let sec;
let millisec;

// الساعة
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");

const secBtn = document.querySelector(".btn-sec");
const minBtn = document.querySelector(".btn-min");
const hourBtn = document.querySelector(".btn-hour");

//حالة الحركة
let secVal = 0;
let minVal = 0;
let hourVal = 0;

secBtn.onclick = () => {
    secVal = changeValue(secVal,0,1);

    if(secVal == 1) {
        secBtn.innerText = "ثواني / متحرك";
    } else {
        secBtn.innerText = "ثواني";
    }
}

minBtn.onclick = () => {
    minVal = changeValue(minVal,0,1);

    if(minVal == 1) {
        minBtn.innerText = "دقائق / متحرك";
    } else {
        minBtn.innerText = "دقائق";
    }
}

hourBtn.onclick = () => {
    hourVal = changeValue(hourVal,0,1);

    if(hourVal == 1) {
        hourBtn.innerText = "ساعات / متحرك";
    } else {
        hourBtn.innerText = "ساعات";
    }
}

function changeValue(value,val1,val2) {
    let finalVal = "";

    if(value == val1)
        finalVal = val2;
    else if(value == val2)
        finalVal = val1;

    return finalVal;
}

setInterval(() => {
    const firstDate = new Date(theDate.split(" / ")[2], theDate.split(" / ")[1]-1, theDate.split(" / ")[0]);
    const secondDate = new Date();
    const diffDays =  Math.round(Math.abs((firstDate - secondDate) / 1000));
    mainSec = diffDays / (Math.round(5.9 * 24 * 60 * 60 * 10)/10);

    min = Math.floor(Math.floor(mainSec) / 60);
    hor = Math.floor(min / 60);
    min = Math.floor(Math.floor(Math.floor(mainSec) / 60) - (hor*60));
    sec = Math.floor(Math.floor(mainSec) - (Math.floor(mainSec/60)*60));
    millisec = Math.floor((mainSec - Math.floor(mainSec/60)*60 - sec) *100);
    mainH.innerText = `${hor} : ${min} : ${sec}.${millisec}`;



    {// الساعة
    let hh = hor * 30;
    let mm = min * deg;
    let ss = sec * deg;
    let ms = millisec/1000 * deg;
        
    if(hourVal == 0)
        hr.style.transform = `rotateZ(${hh}deg)`;
    else if(hourVal == 1)
        hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;

    if(minVal == 0)
        mn.style.transform = `rotateZ(${mm}deg)`;
    else if(minVal == 1)
        mn.style.transform = `rotateZ(${(mm)+(ss/60)}deg)`;

    if(secVal == 0)
        sc.style.transform = `rotateZ(${ss}deg)`;
    else if(secVal == 1)
        sc.style.transform = `rotateZ(${(ss)+ms}deg)`;
    }

    {// الحصول على التاريخ الهجري
    /*
    function right(str, char) {
        return str.length - char;
    }

    let nameday = (h.split(" ")[0]).split("").filter(names => names != "،").join("");

    let day = h.split(" ")[1];
    let month = h.split(" ")[2];
    let year = "";

    for (i of h.split(" ")[3].split("")) {
        if (i == "١") {
            year = h.split(" ")[3];
            break;
        } else {
            month = `${h.split(" ")[2]} ${h.split(" ")[3]}`;
            year = h.split(" ")[4];
            break;
        }
    }

    let thedate = `${nameday}
${day} ${month} ${year}هـ`;
    document.querySelector("header h3").innerText = thedate;
    */
    }
});