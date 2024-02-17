let inpt = document.querySelector("#InputToShare");
let ShareBtn = document.querySelector("#ShareBtn");

ShareBtn.onclick = () => {
    if(inpt.value != "") {
        if(inpt.value.includes("/shorts/")) {
            window.open("https://web.facebook.com/dialog/share?app_id=87741124305&href=https%3A%2F%2Fyoutube.com%2Fshorts%2F" + inpt.value.split("/")[4].split("?")[0] + "%3Ffeature%3Dshare&display=popup&_rdc=1&_rdr", "_blank", "");
        } else {
            window.open("https://web.facebook.com/dialog/share?app_id=87741124305&href=https%3A%2F%2Fyoutube.com%2Fwatch%3Fv%3D" + inpt.value.split("/")[3] + "%26feature%3Dshare&display=popup&_rdc=1&_rdr", "_blank", "");
        }
    } else {
        alert("أدخل الرابط");
    }
}