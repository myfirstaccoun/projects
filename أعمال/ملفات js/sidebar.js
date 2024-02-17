sidePages.querySelector(".page") != null? activePageName = allData[0].name : activePageName = "";

let menuActivePageName = "";
let menuActivePageCopy = 1;

function changeInfoPageName() {// كتابة إسم الصفحة في شريط المعلومات
    activePageName != ""? pagenameText.innerHTML = activePageName : "";
   
    if(sidePages.children.length == 1) {
        document.querySelector(".infobar .page-icon").style.opacity = 0;
    } else {
        document.querySelector(".infobar .page-icon").style.opacity = 1;
    }
}

function checkDuplicatePage(pageName) {// التحقق من الصفحات المكررة
    let itemInData = allData.length;
    let areCopy = 0;

    while(itemInData > 0) {// تسمية الصفحة الجديدة المكررة
        if(allData[itemInData-1].name == pageName) {
            let copyNum = allData[itemInData-1].copy + 1;
            allData[allData.length-1].copy = copyNum;
            areCopy = 1;
            break;
        }
        itemInData--;
    }

    if(areCopy == 0) {// تسمية الصفحة الجديدة الغير مكررة
        allData[allData.length-1].copy = 1;
    }

    // عدد تكرار الصفحة
    allData[allData.length-1].copy > 1? thenewPage.setAttribute("copyNum", allData[allData.length-1].copy) : thenewPage.setAttribute("copyNum", 1);
}

function resetDuplicatePages(pageName) {// ترتيب رقم التكرار
    let newPageCopyNum = 1;

    if(document.querySelector(`.sidebar .pages .page[pagename="${pageName}"]`) != null) {
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == pageName) {
                allData[i].copy = newPageCopyNum;
                document.querySelectorAll(`.sidebar .pages .page[pagename="${pageName}"]`)[newPageCopyNum-1].setAttribute("copyNum", newPageCopyNum);
                newPageCopyNum++;
            }
        }
    }

}

// إضافة صفحة
function addPagefx(pageName= "صفحة جديدة", pageIcon = "", coverImg = "", coverTop = 0, pageItems = {itemName: [], itemValue: [], itemScroll: []}, pathName = [], pathCopy = [], saveToallData = true) {
    let newPage = document.createElement("button");
    sidePages.append(newPage);
    newPage.classList.add("page");
    newPage.setAttribute("draggable", "true");

    let itemInData = allData.length;
    let areCopy = 0;

    while(itemInData > 0) {// تسمية الصفحة الجديدة المكررة
        if(allData[itemInData-1].name == pageName) {
            let copyNum = allData[itemInData-1].copy + 1;
            saveToallData == true? allData.push({name: pageName, copy: copyNum, icon: pageIcon, cover: coverImg, coverTop: coverTop, pathName: pathName, pathCopy: pathCopy, items: pageItems}) : "";
            activePageName = pageName;
            activePageCopy = copyNum;
            areCopy = 1;
            break;
        }
        itemInData--;
    }

    if(areCopy == 0) {// تسمية الصفحة الجديدة الغير مكررة
        saveToallData == true? allData.push({name: pageName, copy: 1, icon: "", cover: coverImg, coverTop: coverTop, pathName: pathName, pathCopy: pathCopy, items: pageItems}) : "";
    }

    // عدد تكرار الصفحة
    allData[allData.length-1].copy > 1? newPage.setAttribute("copyNum", allData[allData.length-1].copy) : newPage.setAttribute("copyNum", 1);


    newPage.draggable = "true";

    {// داخل زر الصفحة

    //toggle
    let toggleBtn = document.createElement("div");
    newPage.append(toggleBtn);
    toggleBtn.classList.add("toggle-btn");
    toggleBtn.classList.add("page-box");

    let toggle = document.createElement("span");
    toggleBtn.append(toggle);
    toggle.classList.add("toggle");


    //icon
    let iconBtn = document.createElement("div");
    newPage.append(iconBtn);
    iconBtn.classList.add("icon-btn");
    iconBtn.classList.add("page-box");

    let icon = document.createElement("img");
    iconBtn.append(icon);
    icon.classList.add("icon");
    pageIcon == ""? icon.src = "صور/صفحة فارغة.png" : icon.src = pageIcon;
    icon.setAttribute("draggable", "false");


    //name
    let newPageName = document.createElement("label");
    newPage.append(newPageName);
    newPageName.classList.add("name");
    newPageName.innerText = pageName;
    newPage.setAttribute("pageName", pageName);


    //addPage
    let newPageAddPage = document.createElement("div");
    newPage.append(newPageAddPage);
    newPageAddPage.classList.add("add");
    newPageAddPage.classList.add("page-box");

    let newPageAddPageImg = document.createElement("img");
    newPageAddPage.append(newPageAddPageImg);
    newPageAddPageImg.src = "صور/إضافة.png";
    newPageAddPageImg.setAttribute("draggable", "false");


    //more
    let newPageMore = document.createElement("div");
    newPage.append(newPageMore);
    newPageMore.classList.add("more");
    newPageMore.classList.add("page-box");

    let newPageMoreImg = document.createElement("img");
    newPageMore.append(newPageMoreImg);
    newPageMoreImg.src = "صور/أكثر.png";
    newPageMoreImg.setAttribute("draggable", "false");

    }

    thenewPage = newPage;
    pageNameInput.value = pageName;
    activePage = newPage;

    if(coverDragable == true) {
        cover.style.cursor = "";
        coverPosition.innerText = "غير مكان الصورة";
        coverDragging = false;
        coverDragable = false;
    }
}

function activePagefx() {// تفعيل الصفحة
    document.querySelector(".sidebar .pages .active")!= null? document.querySelector(".sidebar .pages .active").classList.remove("active") : "";
    thenewPage.classList.add("active");
    activePageName = thenewPage.getAttribute("pageName");
    activePageCopy = thenewPage.getAttribute("copynum");
    activePage = sidePages.querySelector(`.page[pagename="${activePageName}"][copyNum="${activePageCopy}"]`);
}

function removeaddnewPageBtnfx() {// نقل زر إضافة الصفحة للأسفل
    document.querySelector(".sidebar .pages .add-page").remove();

    //زر إضافة صفحة
    let addnewPage = document.createElement("button");
    sidePages.append(addnewPage);
    addnewPage.classList.add("add-page");


    //الإسم
    let addnewPageName = document.createElement("h1");
    addnewPage.append(addnewPageName);
    addnewPageName.innerText = "إضافة صفحة";


    //الصورة
    let addnewPageImg = document.createElement("img");
    addnewPage.append(addnewPageImg);
    addnewPageImg.src = "صور/إضافة 2.png";
    
    addPage = document.querySelector(".sidebar .pages .add-page");
}

showHide.onclick = () => {// إخفاء الشريط الجانبي
    root.setProperty("--side-width", "0px");
    infobar.classList.add("showMenuBtn");
    sidebar.classList.add("hide");
    pagesName.style.right = "40px";
}

sidebar.onclick = (eo) => {// إضافة صفحة - إظهار/إخفاء إعدادات الصفحة
    deleteIconMenu.style.display = "none";

    // إضافة صفحة
    if(eo.target == addPage || eo.target.parentNode == addPage || eo.target == addPageDown || eo.target.parentNode == addPageDown || eo.target.classList.contains("add") || (eo.target.tagName.toLowerCase() == "img" && eo.target.parentNode.classList.contains("add"))) {
        addPagefx(); //إضافة صفحة
        activePagefx(); //تفعبل الصفحة
        removeaddnewPageBtnfx(); // نقل زر إضافة الصفحة للأسفل
        changeInfoPageName(); // تغيير إسم الصفحة في شريط المعلومات
        sideMorePage = sidePages.querySelectorAll(".page .more");
        checkIconAndCover();
        changeIconAndTitle();
        loadBlocks();

        mainContent.scrollTop = 0;
    }
    
    // إخفاء إعدادات الصفحة
    if(eo.target.parentNode != null) {
        if(eo.target.parentNode.getAttribute("class") != null) {
            if(eo.target.parentNode.classList.contains("show-hide")) {
                pageMenu.style.display = "none";
            }
        }
    }
    if(eo.target.getAttribute("class") != null) {
        if(eo.target.classList.contains("pages") || eo.target.classList.contains("show-hide") || eo.target.classList.contains("sidebar")) {
            pageMenu.style.display = "none";
        }
    }
    
    // إظهار إعدادات الصفحة
    if(eo.target.classList.contains("more") || (eo.target.tagName.toLowerCase() == "img" && eo.target.parentNode.classList.contains("more"))) {// إظهار إعدادات الصفحة
        pageMenu.style.top = JSON.stringify(eo.pageY + 20) + "px";
        pageMenu.style.right = "auto";
        pageMenu.style.left = JSON.stringify(eo.pageX - 220) + "px";
        pageMenu.style.display = "block";
        
        if(eo.target.parentNode.classList.contains("page")) {
            menuActivePageName = eo.target.parentNode.getAttribute("pagename");
            menuActivePageCopy = eo.target.parentNode.getAttribute("copynum");
        } else if(eo.target.parentNode.parentNode.classList.contains("page")) {
            menuActivePageName = eo.target.parentNode.parentNode.getAttribute("pagename");
            menuActivePageCopy = eo.target.parentNode.parentNode.getAttribute("copynum");
        }
    }
}

pageMenu.onclick = (eo) => {// الضغط على أزرار إعدادات الصفحة
    {// إلغاء الصفحة
    
    if(eo.target.classList.contains("delete") || eo.target.parentNode.classList.contains("delete")) {
            document.querySelector(`.sidebar .pages .page[pagename='${menuActivePageName}'][copyNum='${menuActivePageCopy}']`).remove();
            pageMenu.style.display = "none";
    
        let iPage = 0;
        while(iPage < allData.length) {
            if(allData[iPage].name == menuActivePageName && allData[iPage].copy == menuActivePageCopy) {
                allData.splice(iPage, 1);
            }
            iPage++;
        }
        
        // هل ضغطت على اعدادات الصفحة المفعلة
        if(menuActivePageName == activePageName && menuActivePageCopy == activePageCopy) {
            if(document.querySelector(".sidebar .pages .active") != null) {
                document.querySelector(".sidebar .pages .active").classList.remove("active");
            }
            
            if(document.querySelector(`.sidebar .page`) != null) {
                activePage = document.querySelector(`.sidebar .page`);
                document.querySelector(`.sidebar .page`).classList.add("active");
                activePageName = document.querySelector(`.sidebar .page`).getAttribute("pagename");
                activePageCopy = document.querySelector(`.sidebar .page`).getAttribute("copynum");
                pageNameInput.value = document.querySelector(".sidebar .page label").innerText;

                changeIconAndTitle();

            }
        }

        if(document.querySelector(`.sidebar .page`) == null) {
            activePage = null;
            activePageName = "";
            menuActivePageName = "";
            activePageCopy = 0;
            menuActivePageCopy = 0;
        }
        
        if(coverDragable == true) {
            cover.style.cursor = "";
            coverPosition.innerText = "غير مكان الصورة";
            coverDragging = false;
            coverDragable = false;
        }

        changeInfoPageName(); // تغيير إسم الصفحة في شريط المعلومات
        resetDuplicatePages(menuActivePageName);
        loadBlocks();

        mainContent.scrollTop = 0;
    }

    }

    {// تكرار الصفحة
    
    if(eo.target.classList.contains("duplicate") || eo.target.parentNode.classList.contains("duplicate")) {
        pageMenu.style.display = "none";
        let numOfPage = 0; // رقم الصفحة المكررة في allData[]

        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == menuActivePageName && allData[i].copy == menuActivePageCopy) {
                numOfPage = i;
            }
        }

        // إضافة صفحة
        // التأكد من الصفحة الفارغة
        sidePages.querySelector(`.page[pagename="${menuActivePageName}"][copyNum="${menuActivePageCopy}"] img`).src.includes("%D8%B5%D9%81%D8%AD%D8%A9%20%D9%81%D8%A7%D8%B1%D8%BA%D8%A9.png")? addPagefx(menuActivePageName, "", allData[numOfPage].cover, allData[numOfPage].coverTop, allData[numOfPage].items) : addPagefx(menuActivePageName, sidePages.querySelector(`.page[pagename="${menuActivePageName}"][copyNum="${menuActivePageCopy}"] img`).src, allData[numOfPage].cover, allData[numOfPage].coverTop, allData[numOfPage].items);
        
        activePagefx(); //تفعبل الصفحة
        removeaddnewPageBtnfx(); // نقل زر إضافة الصفحة للأسفل
        changeInfoPageName(); // تغيير إسم الصفحة في شريط المعلومات
        sideMorePage = sidePages.querySelectorAll(".page .more");
        changeIconAndTitle();
        loadBlocks();

        mainContent.scrollTop = 0;
    }

    }

    eo.target.classList.contains("box-in-list") || eo.target.parentNode.classList.contains("box-in-list")? checkIconAndCover() : "";
}

sidePages.onclick = (eo) => {// تفعيل صفحة
    let theTarget = eo.target;

    if(!(theTarget.classList.contains("active") || theTarget.parentNode.classList.contains("active")) && (theTarget.classList.contains("page") || theTarget.classList.contains("name"))) {
        
        document.querySelector(".sidebar .pages .active") != null? document.querySelector(".sidebar .pages .active").classList.remove("active") : "";
        
        if(theTarget.classList.contains("page")) {
            activePageName = theTarget.getAttribute("pageName");
            activePageCopy = theTarget.getAttribute("copyNum");
        }
        
        if(theTarget.classList.contains("name")) {
            activePageName = theTarget.parentNode.getAttribute("pageName");
            activePageCopy = JSON.parse(theTarget.parentNode.getAttribute("copyNum"));
        }

        document.querySelector(`.sidebar .page[pagename="${activePageName}"][copyNum="${activePageCopy}"]`).classList.add("active");
        activePage = document.querySelector(`.sidebar .page[pagename="${activePageName}"][copyNum="${activePageCopy}"]`);

        changeInfoPageName(); // تغيير إسم الصفحة في شريط المعلومات
        pageNameInput.value = activePageName;

        if(coverDragable == true) {
            cover.style.cursor = "";
            coverPosition.innerText = "غير مكان الصورة";
            coverDragging = false;
            coverDragable = false;
        }

        checkIconAndCover();
        changeIconAndTitle();
        loadBlocks();

        mainContent.scrollTop = 0;
    }
}

sidePages.querySelectorAll(".page").forEach(page => {// تحريك الصفحة
    
    page.addEventListener("dragstart", (e) => {
        page.classList.add("dragging");
    });

    page.addEventListener("dragend", (e) => {
        page.classList.remove("dragging");
    });

    page.addEventListener("dragover", (e) => {
        e.preventDefault();
    });
});