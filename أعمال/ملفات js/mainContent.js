function checkIconAndCover() {// تغيير الأيقونة والصورة
    for(i = 0; i < allData.length; i++) {
        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
            if(allData[i].cover == "") {
                root.setProperty("--main-cover-height", "0px");
                coverAdd.style.display = "inline-block";
                coverAdd.style.position = "relative";

                if(allData[i].icon == "") {
                    root.setProperty("--main-content-padding", "70px");
                    icon.style.top = "-1000px";
                    iconAdd.style.display = "inline-block";
                    iconAdd.style.position = "relative";
                } else if(allData[i].icon != "") {
                    root.setProperty("--main-content-padding", "170px");
                    icon.style.top = "20px";
                    iconAdd.style.display = "none";
                    iconAdd.style.position = "absolute";
                }
                
            } else if(allData[i].cover != "") {
                root.setProperty("--main-cover-height", "200px");
                coverImg.style.top = allData[i].coverTop;
                coverImg.src = allData[i].cover;
                coverAdd.style.display = "none";
                coverAdd.style.position = "absolute";
                
                if(allData[i].icon == "") {
                    root.setProperty("--main-content-padding", "30px");
                    icon.style.top = "-1000px";
                    iconAdd.style.display = "inline-block";
                    iconAdd.style.position = "relative";
                } else if(allData[i].icon != "") {
                    root.setProperty("--main-content-padding", "100px");
                    icon.style.top = "-64px";
                    iconAdd.style.display = "none";
                    iconAdd.style.position = "absolute";
                }
            }

            if(JSON.stringify(allData[i].pathName) == "[]") {
                if(allData[i].icon == "") {
                    pageIcon.src = "صور/صفحة فارغة.png";
                    activePage.querySelector(".icon-btn img").src = "صور/صفحة فارغة.png";
                } else if(allData[i].icon != "") {
                    pageIcon.src = allData[i].icon;
                    activePage.querySelector(".icon-btn img").src = allData[i].icon;
                }
            }

            allData[i].icon == ""? iconImg.src = "" : iconImg.src = allData[i].icon;
        }
    }
}

function changeIconAndTitle(pageName = "", pageIcon = "") {// تفيير العنوان وأيقونة الموقع
    if(pageName == "") {
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                document.querySelector("head title").innerHTML = allData[i].name;
                allData[i].icon == ""? document.querySelector("link").setAttribute("href", "صور/صفحة فارغة.png") : document.querySelector("link").setAttribute("href", allData[i].icon);
            }
        }
    } else {
        document.querySelector("head title").innerHTML = pageName;
        document.querySelector("link").setAttribute("href", pageIcon);
    }
}

function addCommandBlock() {// إضافة لبنة الأوامر
    let commandBlockMain = document.createElement("div");
    content.append(commandBlockMain);
    commandBlockMain.classList.add("block-main", "add-main");
    
    let newCommandBlock = document.createElement("textarea");
    commandBlockMain.append(newCommandBlock);
    newCommandBlock.classList.add("add-block", "block");
    newCommandBlock.setAttribute("type", "text");
    newCommandBlock.setAttribute("placeholder", "أكتب علامة / لإضافة قطعة");

    commandBlock = commandBlockMain;
    commandBlock.querySelector("textarea").setAttribute("placeholder", "أكتب علامة / لإضافة قطعة");
    commandBlock.querySelector("textarea").focus();
}

function addBlock(blockName, blockClassName) {// إضافة أمر في قائمة اللبنات
    let block = document.createElement("div");
    document.querySelector(".all-blocks.list-box").append(block);
    block.classList.add("block-in-list", blockClassName);
    
    let newBlockName = document.createElement("h1");
    block.append(newBlockName);
    newBlockName.innerText = blockName;
}

function addAllBlocks(innerBlock) {// إضافة قائمة اللبنات
    let newAllBlocks = document.createElement("div");
    innerBlock.append(newAllBlocks);
    newAllBlocks.classList.add("all-blocks", "list-box");

    addBlock("عنوان 1", "h1");
    addBlock("عنوان 2", "h2");
    addBlock("عنوان 3", "h3");
    addBlock("نص", "text");
    addBlock("فاصل", "br");

    addBlockMenu = document.querySelector(".all-blocks.list-box");
}

function resetBlocksNumber() {// ترقيم اللبنات
    let theBlockNum = 0;
    
    content.querySelectorAll(".block").forEach((block) => {
        block.parentNode.setAttribute("blockNum", theBlockNum);
        theBlockNum++;
    })
}

function whatDeleted(lastValue, newValue) {// الحرف الممسوح
    let newVal = newValue.split(" ");
    let result = lastValue;
    let isEqualSpace = true;

    for (let i = 0; i < newVal.length; i++) {
        result = result.split(newVal[i]).join("");
    }

    for(let i = 0; i < result.split("").length; i++) {
        result.split("")[i] != " "? isEqualSpace = false : "";
    }
    
    return isEqualSpace == false? result.split("").filter((value) => {return value != " "}).join("") : result;
}

function addNewBlock(block, thePageNum, theBlockNum) {// إضافة لبنة
    let BlockMain = document.createElement("div");
    content.append(BlockMain);
    BlockMain.classList.add("block-main");
    
    if(block == "h1" || block == "h2" || block == "h3" || block == "text" || block == "addBlock") {
        let newBlock = document.createElement("textarea");
        BlockMain.append(newBlock);
        newBlock.classList.add("block");
        newBlock.setAttribute("type", "text");
        BlockMain.classList.add(block);

        switch(block) {
            case "h1":
                newBlock.setAttribute("placeholder", "عنوان 1");
                break;
            
            case "h2":
                newBlock.setAttribute("placeholder", "عنوان 2");
                break;
            
            case "h3":
                newBlock.setAttribute("placeholder", "عنوان 3");
                break;

            case "text":
                newBlock.setAttribute("placeholder", "نص");
                break;

            case "addBlock":
                BlockMain.classList.add("add-main");
                newBlock.classList.add("add-block");
                break;
    
        }

        if(allData[thePageNum].items.itemName[theBlockNum] == "h1" || allData[thePageNum].items.itemName[theBlockNum] == "h2" ||
           allData[thePageNum].items.itemName[theBlockNum] == "h3" || allData[thePageNum].items.itemName[theBlockNum] == "text" || allData[thePageNum].items.itemName[theBlockNum] == "addBlock") {
            newBlock.value = allData[thePageNum].items.itemValue[theBlockNum];
        }

        activeBlock = BlockMain;
    }

}

function loadBlocks() {// وضع اللبنات داخل الصفحة
    for (let i = 0; i < allData.length; i++) {
        if (allData[i].name == activePageName && allData[i].copy == activePageCopy) {
            content.querySelectorAll(".block-main").forEach((block) => {block.remove();});

            for(let n = 0; n < allData[i].items.itemName.length; n++) {
                addNewBlock(allData[i].items.itemName[n], i, n);
            }
        }
    }

    resetBlocksNumber();
}

window.onload = () => {// تغيير الأيقونة والصورة والعنوان
    loadData();
}

coverChangeInput.addEventListener("change", function() {// تغيير الصورة
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        coverImg.src = uploaded_image;
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].cover = coverImg.src;
            }
        }

        checkIconAndCover();
        changeIconAndTitle();
    });
    
    reader.readAsDataURL(this.files[0]);
});

iconChangeInput.addEventListener("change", function() {// تغيير الأيقونة
    const reader = new FileReader();
    
    reader.addEventListener("load", function() {
        const uploaded_image = reader.result;
        iconImg.src = uploaded_image;
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].icon = iconImg.src;
            }
        }

        checkIconAndCover();
        changeIconAndTitle();
    });
    
    reader.readAsDataURL(this.files[0]);
});

mainContent.onclick = (eo) => {// إخفاء إعدادات الصفحة
    pageMenu.style.display = "none";
    deleteIconMenu.style.display = "none";
    addBlockMenu == null? "" : addBlockMenu.remove();

    if(commandBlock == null && eo.target.classList.contains("content") && !(selectBox.clientWidth > 0 || selectBox.clientHeight > 0)) {// إضافة لبنة الأوامر
        addCommandBlock();
        
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].items.itemName.push("addBlock");
                allData[i].items.itemValue.push("");
            }
        }

        activeBlock = commandBlock;
    } else if(eo.target.classList.contains("content") && selectBox.style.width == 0 && selectBox.style.height == 0) {
        commandBlock.querySelector("textarea").getAttribute("placeholder") == ""? commandBlock.querySelector("textarea").setAttribute("placeholder", "أكتب علامة / لإضافة قطعة") : commandBlock.querySelector("textarea").setAttribute("placeholder", "");
        commandBlock.querySelector("textarea").getAttribute("placeholder") != ""? commandBlock.querySelector("textarea").focus() : commandBlock.querySelector("textarea").blur();
        selectBox.clientWidth = 0;
        selectBox.clientHeight = 0;
    }

    if(commandBlock != null) {
        document.activeElement == commandBlock.querySelector("textarea")? commandBlock.querySelector("textarea").setAttribute("placeholder", "أكتب علامة / لإضافة قطعة") : "";
    }

    ii == 0? ii = 1 : "";
    resetBlocksNumber();
}

{// المحتوى الأساسي

{// الصورة

{// إلغاء الصورة

coverDelete.onclick = () => {
    for(i = 0; i < allData.length; i++) {
        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
            allData[i].cover = "";
            allData[i].coverTop = "0px";
        }
    }

    checkIconAndCover();
}

}

{// تحريك الصورة

coverPosition.onclick = () => {// تفعيل وإلغاء تفعيل تحريك الصورة
    if(coverPosition.innerText == "غير مكان الصورة") {
        coverPosition.innerText = "حفظ المكان";
        cover.style.cursor = "grab";
        coverDragable = true;
    } else {
        coverPosition.innerText = "غير مكان الصورة";
        cover.style.cursor = "";
        coverDragable = false;
    }
}

cover.addEventListener("mousedown", (e) => {
    if(coverDragable == true) {    
        coverDragging = true;
        starty = e.offsetY - coverImg.offsetTop;
        cover.style.cursor = "grabbing";
    }
});

cover.addEventListener("mouseenter", (e) => {
    if(coverDragable == true) {
        cover.style.cursor = "grab";
    }
});

document.addEventListener("mouseup", (e) => {
    if(coverDragable == true) {
        cover.style.cursor = "grab";
        coverDragging = false;
    }
});

cover.addEventListener("mousemove", (e) => {// تحريك الصورة
    if(coverDragable == true) {
        if((parseInt(coverImg.style.top.split("px")[0]) <= 0 || coverImg.style.top == "" || parseInt(coverImg.style.top.split("px")[0]) == null) && (parseInt(coverImg.style.top.split("px")[0]) >= cover.clientHeight - coverImg.clientHeight || coverImg.style.top == "" || parseInt(coverImg.style.top.split("px")[0]) == null)) {
            if(coverDragging != true) return;
            e.preventDefault();

            y = e.offsetY;
            coverImg.style.top = `${y - starty}px`;
        }

        parseInt(coverImg.style.top.split("px")[0]) > 0? coverImg.style.top = "0px" : "";
        parseInt(coverImg.style.top.split("px")[0]) < cover.clientHeight - coverImg.clientHeight? coverImg.style.top = `${cover.clientHeight - coverImg.clientHeight}px` : "";

        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].coverTop = coverImg.style.top;
            }
        }
    }
});

}

{// إضافة صورة

coverAddInput.addEventListener("change", function() {// تغيير الصورة
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        coverImg.src = uploaded_image;
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].cover = coverImg.src;
            }
        }

        checkIconAndCover();
        changeIconAndTitle();
    });
    
    reader.readAsDataURL(this.files[0]);
});

}

}

{// مربع التحديد

content.addEventListener("mousedown", (e) => {// إظهار مربع التحديد
    isMouseDown = true;
    mx = e.pageX;
    my = e.pageY;
    
    // تغيير مكان مربع التحديد
    selectBox.style.top = JSON.stringify(e.pageY) + "px";
    selectBox.style.left = JSON.stringify(e.pageX) + "px";
    
    document.addEventListener("mousemove", (e) => {// عندما تتحرك الفأرة
        if(isMouseDown == true) {
            document.querySelector("*").style.userSelect = "none";
            if(e.pageX >= mx) {// التحكم في العرض
                selectBox.style.width = JSON.stringify(Math.abs(e.pageX - mx)) + "px";
            } else {
                selectBox.style.left = JSON.stringify(e.pageX) + "px";
                selectBox.style.width = JSON.stringify(Math.abs(e.pageX - mx)) + "px";
            }
            
            if(e.pageY >= my) {// التحكم في الإرتفاع
                selectBox.style.height = JSON.stringify(Math.abs(e.pageY - my)) + "px";
            } else {
                selectBox.style.top = JSON.stringify(e.pageY) + "px";
                selectBox.style.height = JSON.stringify(Math.abs(e.pageY - my)) + "px";
            }
            
            // إظهار مربع التحديد
            selectBox.style.display == "block"? "" : selectBox.style.display = "block";
        }
    });
});

document.addEventListener("mouseup", (e) => {// إخفاء مربع التحديد
    document.querySelector("*").style.userSelect = "none";
    selectBox.style.display = "none";
    isMouseDown = false;
});

}

{// إسم الصفحة

pageNameInput.oninput = () => {// تغيير إسم الصفحة في (الشريط الجانبي - شريط المعلومات)
    let activePageNum = 0;

    for(i = 0; i < allData.length; i++) {
        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
            document.querySelector(`.sidebar .page[pagename="${activePageName}"][copyNum="${activePageCopy}"] .name`).innerText = pageNameInput.value;
            allData[i].pathName == []? pageName.querySelector("span").innerText = pageNameInput.value : "";
            document.querySelector(`.sidebar .page[pagename="${activePageName}"][copyNum="${activePageCopy}"]`).setAttribute("pagename", pageNameInput.value);
            allData[i].name = pageNameInput.value;
            resetDuplicatePages(pageNameInput.value);
            resetDuplicatePages(activePageName);
            activePageName = pageNameInput.value;
            activePageCopy = activePage.getAttribute("copynum");
            activePageNum = i;
            changeIconAndTitle();
            changeInfoPageName();
        }
        
    }

    activePageNum--;
    
    if(pageNameInput.value == "") {
        activePage.querySelector("label").innerText = pageNameInput.getAttribute("placeholder");
        allData[activePageNum].pathName == []? pageName.querySelector("span").textContent = pageNameInput.getAttribute("placeholder") : "";
    }
}

}

{// الأيقونة

{// إضافة أيقونة

iconAddInput.addEventListener("change", function() {// تغيير الصورة
    const reader = new FileReader();
    
    reader.addEventListener("load", () => {
        const uploaded_image = reader.result;
        iconImg.src = uploaded_image;
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].icon = iconImg.src;
            }
        }
        
        checkIconAndCover();
        changeIconAndTitle();
    });
    
    reader.readAsDataURL(this.files[0]);

});

}

{// إلغاء الأيقونة

{// إظهار قائمة إلغاء الأيقونة

icon.addEventListener("contextmenu", function(eo) {
    eo.preventDefault();
    
    deleteIconMenu.style.top = JSON.stringify(eo.pageY + 20) + "px";
    deleteIconMenu.style.right = "auto";
    deleteIconMenu.style.left = JSON.stringify(eo.pageX - 220) + "px";
    deleteIconMenu.style.display = "block";
});

}

{// زر إلغاء الأيقونة

deleteIconMenu.onclick = (eo) => {
    if(eo.target.classList.contains("delete")) {
        for(i = 0; i < allData.length; i++) {
            if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                allData[i].icon = "";
            }
        }

        deleteIconMenu.style.display = "none";

        checkIconAndCover();
        changeIconAndTitle();
    }
}

}

{// إخفاء قائمة إلغاء الأيقونة

infobar.onclick = () => {
    deleteIconMenu.style.display = "none";
}

}

}

}

}

{// المحتوى المتغير

setInterval(() => {
    addBlockMenu != null ? addBlockMenu.querySelectorAll(".block-in-list").forEach((block) => {
        block.onclick = () => {
            for(i = 0; i < allData.length; i++) {
                if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                    allData[i].items.itemName.splice(activeBlock.getAttribute("blockNum"), 1);
                    allData[i].items.itemValue.splice(activeBlock.getAttribute("blockNum"), 1);
                }
            }

            activeBlock.style.height = "";

            let blockCmderContainer = block.parentNode.parentNode; // لبنة الأوامر المكتوب فيها الأمر
            let blockCmder = blockCmderContainer.querySelector("textarea");
            
            blockCmderContainer.classList.remove("add-main");
            blockCmderContainer.classList.add(block.classList[1]);
            blockCmder.classList.remove("add-block");
            blockCmder.value = "";
            
            addBlockMenu.remove();
            commandBlock = null;
            addBlockMenu = null;
            
            if (block.classList.contains("h1")) {
                blockCmder.placeholder = "عنوان 1";
            } else if (block.classList.contains("h2")) {
                blockCmder.placeholder = "عنوان 2";
            } else if (block.classList.contains("h3")) {
                blockCmder.placeholder = "عنوان 3";
            }
   
            for (let i = 0; i < allData.length; i++) {
                if (allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                    allData[i].items.itemName.push(block.classList[1]);
                    allData[i].items.itemValue.push("");
                }
            }
        }
    }) : "";

    if(content.querySelectorAll(".block-main.add-main").length > 0) {
        content.querySelectorAll(".block-main.add-main").forEach((command) => {
            let cmi = command.querySelector("textarea"); // cmi ==> command input
            let lastVal = cmi.value;
            cmi.onkeydown = (keyinput) => {
                let key = keyinput.key;
                if(key == "Backspace" && cmi.value == "") {
                    command.remove();
                    commandBlock = null;
                    content.querySelectorAll(".block-main.add-main").length == 0? commandBlock = null : commandBlock = content.querySelector(".block-main.add-main");
                    addBlockMenu != null? addBlockMenu.remove() : "";
                    addBlockMenu = null;
                    
                    for(i = 0; i < allData.length; i++) {
                        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                            allData[i].items.itemName.splice(activeBlock.getAttribute("blockNum"), 1);
                            allData[i].items.itemValue.splice(activeBlock.getAttribute("blockNum"), 1);
                            content.querySelectorAll("block")[activeBlock.getAttribute("blockNum")-1] != null? activeBlock = content.querySelectorAll("block")[activeBlock.getAttribute("blockNum")-1] : activeBlock = null;
                        }
                    }
                }
                
                if(key == "Backspace" && cmi.value != "") {
                    setTimeout(() => {
                        let newVal = cmi.value;
                        if(addBlockMenu != null) {
                            whatDeleted(lastVal, newVal) == "/"? addBlockMenu.remove() : "";
                        }
                    }, 10);

                }
                
                if(key == "/") {
                    addBlockMenu = document.querySelector(".all-blocks.list-box");
                    addBlockMenu == null || addBlockMenu == ""? addAllBlocks(command) : "";
                }

                command.classList.contains("add-main")? command.style.height = "20px" : command.style.height = "50px";
                let scHeight = keyinput.target.scrollHeight;
                command.style.height = `${scHeight}px`;
                resetBlocksNumber();
                console.log(keyinput);

                for(let i = 0; i < allData.length; i++) {
                    if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                        allData[i].items.itemScroll = scHeight;
                    }
                }
            }
            
            cmi.onkeyup = (keyinput) => {
                let key = keyinput.key;
                
                if(!(key == "Backspace" && cmi.value == "")) {
                    for(i = 0; i < allData.length; i++) {
                        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                            allData[i].items.itemValue[activeBlock.getAttribute("blockNum")] = activeBlock.querySelector("textarea").value;
                        }
                    }
                }
                
                command.classList.contains("add-main")? command.style.height = "20px" : command.style.height = "50px";
                let scHeight = keyinput.target.scrollHeight;
                command.style.height = `${scHeight}px`;
                resetBlocksNumber();
            }
        });
    } else if(content.querySelectorAll(".block-main").length > 0) {
        content.querySelectorAll(".block-main").forEach((command) => {
            let txi = command.querySelector("textarea"); // txi ==> text input

            txi.onkeydown = (keyinput) => {
                let key = keyinput.key;

                if(key == "Backspace" && txi.value == "") {
                    for(i = 0; i < allData.length; i++) {
                        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                            allData[i].items.itemName.splice(activeBlock.getAttribute("blockNum"), 1);
                            allData[i].items.itemValue.splice(activeBlock.getAttribute("blockNum"), 1);
                            activeBlock.remove();
                            content.querySelectorAll("block")[activeBlock.getAttribute("blockNum")-1] != null? activeBlock = content.querySelectorAll("block")[activeBlock.getAttribute("blockNum")-1] : activeBlock = null;
                        }
                    }
                }
            }

            txi.onkeyup = (keyinput) => {
                let key = keyinput.key;
                
                if(!(key == "Backspace" && txi.value == "")) {// change allData.items.itemValue
                    for(i = 0; i < allData.length; i++) {
                        if(allData[i].name == activePageName && allData[i].copy == activePageCopy) {
                            allData[i].items.itemValue[activeBlock.getAttribute("blockNum")] = activeBlock.querySelector("textarea").value;
                        }
                    }
                }
            }

            command.classList.contains("add-main")? command.style.height = "20px" : command.style.height = "50px";
            let scHeight = keyinput.target.scrollHeight;
            command.style.height = `${scHeight}px`;
            resetBlocksNumber();
        });
    }

    document.activeElement.tagName.toLowerCase() == "textarea"? activeBlock = document.activeElement.parentNode : "";
});

}