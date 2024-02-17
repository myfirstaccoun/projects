let allData;

localStorage.allData != null? allData = JSON.parse(localStorage.allData) :
                              allData = [
                                         {
                                          name: "حياتي",
                                          copy: 1,
                                          icon: "صور/الحياة.png",
                                          cover: "صور/www.jpg",
                                          coverTop: 0,
                                          pathName: [],
                                          pathCopy: [],
                                          items: {itemName: [],
                                                  itemValue: []}
                                         }
                                        ];

{// حفظ البينات

window.onchange = () => {localStorage.setItem("allData", JSON.stringify(allData));}
window.onkeydown = () => {localStorage.setItem("allData", JSON.stringify(allData));}
window.onclick = () => {localStorage.setItem("allData", JSON.stringify(allData));}

}

function loadData() {
    for(let i = 0; i < allData.length; i++) {
        addPagefx(allData[i].name, allData[i].icon, allData[i].cover, allData[i].coverTop, allData[i].items, allData[i].pathName, allData[i].pathCopy, false);
        activePagefx(); // تفعيل الصفحة
        removeaddnewPageBtnfx(); // نقل زر إضافة الصفحة للأسفل
        changeInfoPageName(); // تغيير إسم الصفحة في شريط المعلومات
        sideMorePage = sidePages.querySelectorAll(".page .more");
        checkIconAndCover();
        changeIconAndTitle();
        loadBlocks();

        mainContent.scrollTop = 0;

        // تغيير إسم الصفحة في صفحة المحتوى
        pageNameInput.value = document.querySelector(`.sidebar .page[pagename="${activePageName}"][copyNum="${activePageCopy}"] .name`).innerText;
    }
}