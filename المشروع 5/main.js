let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let bodycolor = document.querySelector("body");
let randbtn = document.querySelector(".randcolor");
let rand;

function randfx() {
    rand = "#";
    for (let i = 0 ; i < 6 ; i++) {
        rand += Math.floor(Math.random() * 10);
    }
    return rand;
}

window.onload = () => {
    bodycolor.style.background = `linear-gradient(-90deg , ${color1.value}, ${color2.value})`;
    console.log(color1.value);
}

color1.addEventListener("input" , () => {
    bodycolor.style.background = `linear-gradient(-90deg , ${color1.value}, ${color2.value})`;
    console.log(color1.value);
});


color2.addEventListener("input" , () => {
    bodycolor.style.backgroundImage = `linear-gradient(-90deg , ${color1.value}, ${color2.value})`;
    console.log(color1.value);
});

randbtn.onclick = () => {
    color1.value = randfx();
    color2.value = randfx();
    bodycolor.style.backgroundImage = `linear-gradient(-90deg , ${color1.value}, ${color2.value})`;
}