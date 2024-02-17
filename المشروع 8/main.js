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

setInterval(() => {
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;
    let ms = day.getMilliseconds()/1000 * deg;
    
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
});

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