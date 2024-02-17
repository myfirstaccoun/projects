let root = document.querySelector(":root").style;
let activePageName = "";
let activePageCopy = 1;


// pageMenu
let pageMenu = document.querySelector(".menuPage.list-box");

// delete icon
let deleteIconMenu = document.querySelector(".menuDeleteIcon.list-box");

// sidebar
let sidebar = document.querySelector(".sidebar");
let sidePages = sidebar.querySelector(".pages");
let showHide = sidebar.querySelector(".show-hide");
let addPage = sidebar.querySelector(".add-page");
let addPageDown = sidebar.querySelector(".add-down");
let sideMorePage = sidePages.querySelectorAll(".page .more");
let thenewPage;
let activePage = sidePages.querySelector(".page");

// infobar
let infobar = document.querySelector(".infobar");
let showHideInfo = infobar.querySelector(".show-hide");
let pagenameText = infobar.querySelector("label.page-name span");
let pagesName = infobar.querySelector(".pages-name");
let pageName = pagesName.querySelector(".page-name");
let pageIcon = pageName.querySelector("img");


// mainContent
// المحتوى الأساسي
let mainContent = document.querySelector(".main-content");
let isMouseDown = false; // هل ضغطت على الفأرة
let mx = ""; // مكان الفأرة عند الضغط على محور س
let my = ""; // مكان الفأرة عند الضغط على محور ص

let selectBox = mainContent.querySelector(".select-box");
let content = mainContent.querySelector(".content.main-div");

// الصورة
let cover = mainContent.querySelector(".cover.main-div");
let coverImg = cover.querySelector("img");
let coverDelete = cover.querySelector(".delete-cover");
let coverChange = cover.querySelector(".change-cover");
let coverChangeInput = cover.querySelector(".change-cover input");
let coverPosition = cover.querySelector(".change-position");
let coverAddInput = content.querySelector(".add-icon-cover .add-cover input");
let coverAdd = content.querySelector(".add-icon-cover .add-cover");
// تحريك الصورة
let coverDragable = false;
let coverDragging = false;
let starty;
let y;
// المحتوى
let pageNameInput = content.querySelector(".page-name-input");
// الأيقونة
let icon = content.querySelector(".page-icon");
let iconImg = content.querySelector(".page-icon img");
let iconChangeInput = content.querySelector(".page-icon input");
let iconAdd = content.querySelector(".add-icon-cover .add-icon");
let iconAddInput = content.querySelector(".add-icon-cover .add-icon input");


// المحتوى المتغير
let ii = 0;
let commandBlock = content.querySelector(".block-main.add-main");
let addBlockMenu = document.querySelector(".all-blocks.list-box");
let activeBlock = null;