function right(str, chr) {
    return str.slice(str.length-chr,str.length);
}

function left(str, chr) {
    let turn = "";
    chr < str.length? turn = str.slice(0, chr - str.length) : "";
    chr == str.length? turn = str : "";
    
    return turn;
}

function int(txt) {
    return parseInt(txt);
}

function sumArr(arr, fromNum = null, toNum = null) {
    let i = 0;
    
    toNum == null && fromNum == null? arr.forEach((e) => {
        i += e;
    }) : "";
    
    if(toNum != null && toNum > -1 && toNum < arr.length && fromNum == null) {
        for(let e=0; e<=toNum; e++) {
            i += arr[e];
        }
    }
    
    if(toNum != null && toNum > -1 && toNum < arr.length && fromNum != null && fromNum > -1 && fromNum < arr.length) {
        for(let e=fromNum; e<=toNum; e++) {
            i += arr[e];
        }
    }
    
    if(fromNum == null && toNum != null) {
        i = null;
    }
    
    return i;
}

function strf(txt) {
    return JSON.stringify(txt);
}

function floor(num) {
    return Math.floor(num);
}

function removeFromArr(arr,index,item = null) {
    arr = JSON.stringify(arr);
    arr = JSON.parse(arr);
    
    let turn;
    
    if(item != null) {
        index = arr.indexOf(item);
    }
    
    if(index <= arr.length-1 && index > -1) {
        arr.splice(index, 1);
        turn = arr;
    } else {
        turn = arr;
    }
    
    return turn;
}

function unsort(unsorted, sorted) {
    unsorted = JSON.stringify(unsorted);
    unsorted = JSON.parse(unsorted);
    sorted = JSON.stringify(sorted);
    sorted = JSON.parse(sorted);
    
    let newArr = [];
    for(let i=0; i<unsorted.length; i++) {
       let index = sorted.indexOf(unsorted[i]);
       if(index > -1) {
           newArr.push(sorted[index]);
           sorted = removeFromArr(sorted,index);
       }
    }
    
    return newArr;
}

function RemoveDuplicates(arr, wantDelete = 0, who = null) {
    arr = JSON.stringify(arr);
    arr = JSON.parse(arr);
    
    let unsorted = arr;
    arr = sort(arr);
    
    for(let i=0; i<arr.length-1; i++) {
        if(arr[i] == arr[i+1]) {
            if(who == null) {
                if(wantDelete == 1) {
                    arr = removeFromArr(arr,i+1);
                    arr = removeFromArr(arr,i);
                } else {
                    arr = removeFromArr(arr,i+1);
                }
                i--;
            } else {
                if(arr[i] == who) {
                    if(wantDelete == 1) {
                        arr = removeFromArr(arr,i+1);
                        arr = removeFromArr(arr,i);
                    } else {
                        arr = removeFromArr(arr,i+1);
                    }
                    i--;
                }
            }
        }
    }
    
    return unsort(unsorted,arr);
}

function sort(ArrayOrString) {
    ArrayOrString = JSON.stringify(ArrayOrString);
    ArrayOrString = JSON.parse(ArrayOrString);
    
    let typeofInput = typeof ArrayOrString;
    
    if(typeofInput == "object") {
        ArrayOrString.sort();
        ArrayOrString.sort((a,b)=> {
            return a - b;
        });
    } else if(typeofInput == "string") {
        ArrayOrString.split("").sort().join("");
        ArrayOrString.split("").sort((a,b) => {
            return a - b;
        }).join("");
    }
    
    return ArrayOrString;
}

function offset(str, miss, length, leftn = 0) {
    if(miss+length <= str.length) {
        if(leftn == 0) {
            return left(right(str,miss+length),length);
        } else {
            return right(left(str,miss+length),length);
        }
    }
}


/* معادلات خاصة بالمشروع */
function mainUnits(num) {
    if(num <= 999 && num >= 0) {
    num = strf(num);
    
    
    let one = [0,1,2,3,4,5,6,7,8,9];
    let oneTxt = ["","واحد","إثنين","ثلاثة","أربعة","خمسة","ستة","سبعة","ثمانية","تسعة"];
    
    let ten = [10,20,30,40,50,60,70,80,90];
    let tenTxt = ["عشر","عشرون","ثلاثون","أربعون","خمسون","ستون","سبعون","ثمانون","تسعون"];
    
    let hundred = [100,200,300,400,500,600,700,800,900];
    let hundredTxt = ["مائة","مائتان","ثلاثمائة","أربعمائة","خمسمائة","ستمائة","سبعمائة","ثمانمائة","تسعمائة"];
   
   let collection = [];
   let collectTxt = [];
   
   
    if(right(num,2) == "10") {
        oneTxt[0] = "ة";
    }
    
    int(num) >= 100? collection.push({type: "مائة", number: left(right(num,3),1)}) : "";
    collection.push({type: "واحد", number: right(num,1)});
    
    int(num) >= 10? collection.push({type: "عشرة", number: left(right(num,2),1)}) : "";
    
    int(num) == 0? collection = [{type: "واحد", number: "0"}] : "";
    
    
    
    
    
    
    
    collection.forEach((e)=> {
        if(e.type == "مائة" && e.number != "0") {
            collectTxt.push(hundredTxt[hundred.indexOf(int(e.number)*100)]);
        } else if(e.type == "واحد" && e.number != "0") {
            collectTxt.push(oneTxt[one.indexOf(int(e.number))]);
        } else if(e.type == "عشرة" && e.number != "0") {
            collectTxt.push(tenTxt[ten.indexOf(int(e.number)*10)]);
        }
    });
    
    
    
    
    
    collectTxt = RemoveDuplicates(collectTxt,1,"");
    collectTxt = removeFromArr(collectTxt,0,"");
    
    
    for(let i=0; i<collection.length-1; i++) {
        if(collection[i].type == "واحد" && collection[i].number == "0" && collection[i+1].type == "عشرة" && collection[i+1].number == "1") {
            collectTxt.indexOf("عشر") > -1? collectTxt[collectTxt.indexOf("عشر")] = "عشرة" : "";
        }
    }
    
    for(let i=0; i<collectTxt.length-1; i++) {
        if(collectTxt[i] == "عشر" && collectTxt[i+1] == "ة") {
            collectTxt[i] = collectTxt[i+1] + collectTxt[i];
            collectTxt = removeFromArr(collectTxt,i+1);
        }
    }
    
    collectTxt.length == 0? collectTxt = ["صفر"] : "";
    
    
    // من إحدى عشر الى تسعة عشر
    let final = collectTxt.join(" و");
    
    if(final.includes("وعشر") && !final.includes("وعشرة")) {
        final = final.split("وعشر").join("عشر");
        
        if(final.includes("واحد عشر")) {
            final = final.split("واحد عشر").join("أحد عشر");
        }
        console.log(strf(final));
        if(final.includes("إثنين عشر") && !final.includes("إثنين عشرون")) {
            final = final.split("إثنين عشر").join("إثنا عشر");
        }
    }
    
    return final;
    }
}

function numToTxt(num) {
    num = strf(num);
    console.log(num);
    let otherUnit = ["كوادريليون","ترليون","مليار","مليون","ألف",""];
    let towUnit = ["كوادريليونان","ترليونان","ملياران","مليونان","ألفان",""];
    let lotUnit = ["كوادريليونات","ترليونات","مليارات","ملايين","آلاف",""];
    let cells = []; // 1000000 - 1,3,3
    let cellsNum = []; // 1428 - 1,428
    let cellsTxt = []; // 1045,30 - واحد،خمسة وأربعون،ثلاثون
    let cellsTxtWithUnits = []; // 38000 - ثمانية وثلاثون ألف
    let numlen = num.length; // 1859 - 4
    
    
    {// تحويل الأرقام لخانات (12345678 - 2,3,3)
        numlen%3 != 0? cells.push(numlen%3) : "";
        numlen%3 != 0? numlen -= numlen%3 : "";
    
        for(let i=0; i<numlen/3; i++) {
            cells.push(3);
        }
    }
    
    
    
    {// تحويل الخانات لأسماء الخانات (1,3 - ألف)
        if(cells.length < otherUnit.length) {
            let delNum = otherUnit.length - cells.length;
            for(let i=0; i<delNum; i++) {
                otherUnit = removeFromArr(otherUnit,0);
                towUnit = removeFromArr(towUnit,0);
                lotUnit = removeFromArr(lotUnit,0);
            }
        }
    }
    
    
    
    {// تحويل الخانات لأرقام منفصلة (1234567 - 1,234,567)
        let numArr = num.split("");
        for(let i=0; i<cells.length; i++) {
            if(i > 0) {
                cellsNum.push(offset(numArr,sumArr(cells,0,i-1),cells[i],1).join(""));
            } else {                
                cellsNum.push(offset(numArr,0,cells[0],1).join(""));
            }
        }
    }
    
    
    
    {// تحويل الأرقام المنفصلة لكتابة (1,234 - ألف،مائتان وأربعة وثلاثون)
        for(let i=0; i<cellsNum.length; i++) {
            let cellsNumItem = cellsNum[i];
            if(RemoveDuplicates(cellsNumItem.split("")) != "0") {
                cellsTxt.push(mainUnits(int(cellsNumItem)));
            } else {
                cellsTxt.push("");
            }
        }
    }
    
    
    
    {// وضع الكتابة مع الوحدة (ثلاثون - ثلاثون ألف)
        {// وضع الوحدات وأسماء الأرقام
            for(let i=0; i<otherUnit.length; i++) {
                cellsTxtWithUnits.push({numText: cellsTxt[i], unit: otherUnit[i]});
            }
        }
        
        {// دمج الوحدات والأرقام
            for(let i=0; i<cellsTxtWithUnits.length; i++) {
               let Item = cellsTxtWithUnits[i];
                if(Item.numText != "") {
                    if(Item.unit != "") {
                        cellsTxtWithUnits[i] = `${Item.numText} ${Item.unit}`;
                    } else {
                        cellsTxtWithUnits[i] = Item.numText;
                    }
                } else {
                    cellsTxtWithUnits = removeFromArr(cellsTxtWithUnits, i);
                    i--;
                }
            }
        }
    }
    
    
    {// تعديل الأخطاء (خمسة مليون - خمسة ملايين)
       let newCellsNum = cellsNum;
       newCellsNum = RemoveDuplicates(newCellsNum,1,"000");
       newCellsNum = removeFromArr(newCellsNum,0,"000");
       
        for(let i=0; i<newCellsNum.length; i++) {
        
            
        
           // 002 - 2
            if((newCellsNum[i] == "2" || newCellsNum[i] == "02" || newCellsNum[i] == "002") && num != "2") {
                cellsTxtWithUnits[i] = towUnit[i];
            }
            console.log(strf(newCellsNum));
            if(int(newCellsNum[i]) >= 3 && int(newCellsNum[i]) <= 10) {
                cellsTxtWithUnits[i] = `${cellsTxt[i]} ${lotUnit[i]}`;
            }
        }
        
        // واحد ألف - ألف
        for(let i=0; i<cellsTxtWithUnits.length; i++) {
            let Item = cellsTxtWithUnits[i];
            
            if(Item.split(" ").length == 2 && Item.split(" ")[0] == "واحد") {
                cellsTxtWithUnits[i] = Item.split(" ")[1];
            }
        }
        
        // إثنان عشرون - إثنان وعشرون
        for(let i=0; i<cellsTxtWithUnits.length; i++) {
            let Item = cellsTxtWithUnits[i];
            
            if(Item.includes(" عشرون")) {
                cellsTxtWithUnits[i] = Item.split(" عشرون").join(" وعشرون");
            }
        }
    }
    
    return RemoveDuplicates(num.split("")) == "0"? "صفر" : cellsTxtWithUnits.join(" و");
}














let inpt = document.querySelector("input");

inpt.onkeyup = () => {
    inpt.value != "" && !inpt.value.includes(" ") && !inpt.value.includes("-")? document.querySelector("h1").innerText = numToTxt(int(inpt.value)) : "";
}