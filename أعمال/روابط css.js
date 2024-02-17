let CSSnames = [
"all",
"infobar",
"scrollbar",
"sidebar",
"variables",
"mainContent"
];

let CSSlinks = [];
let CSSnumber = 0;

while (CSSnumber < CSSnames.length) {
    CSSlinks.push(`<link rel="stylesheet" href="/ملفات css/${CSSnames[CSSnumber]}.css">`);
    CSSnumber++;
}

document.querySelector("head").innerHTML += CSSlinks.join("\n");