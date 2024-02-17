let XO = [
["O","O","X"],
["X","X","O"],
["O","O","X"]
];

document.querySelector("h1").innerText = JSON.stringify(XO);


console.log(strf(checkWin(XO,3))); // 3 => ٣X جنب بعض عشان تكسب


/* معادلات عامة */

function splitArrWithNum(arr,num) {
    let final = [];
    for(let n=0; n<arr.length; n++) {
        if(arr[n].length > num) {
            for(let start=0; start<arr[n].length-num+1; start++) {
                let newArr = [];
                for(let plus=0; plus<num; plus++) {
                    newArr.push(arr[n][start+plus]);
                }
                final.push(newArr);
            }
        } else {
            final.push(arr[n]);
        }
    }
    
    return final;
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

function reverse(ArrayOrString) {
    ArrayOrString = JSON.stringify(ArrayOrString);
    ArrayOrString = JSON.parse(ArrayOrString);
    
    let typeofInput = typeof ArrayOrString;
    
    if(typeofInput == "object") {
        return ArrayOrString.reverse();
    } else if(typeofInput == "string") {
        return ArrayOrString.split("").reverse().join("");
    }
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

function checkInArr2D(arr,item) {
    let turn = false;
    for(let y=0; y<arr.length; y++) {
        for(let x=0; x<arr[y].length; x++) {
            if(arr[y][x] == item) {
                turn = true;
            }
        }
    }
    
    return turn;
}

function upper(txt) {
    return txt.toUpperCase() == txt? true : false;
}

function lower(txt) {
    return txt.toLowerCase() == txt? true : false;
}

function strf(toTxt) {
    return JSON.stringify(toTxt);
}




/* معادلات خاصة بالمشروع */
function checkArrToWhoWin(checkArr,winArr,toWin,array) {
    if(checkArr.length >= toWin-1) {
            let Index = "";
            for(let i=0; i<checkArr.length-1; i++) {
                Index += checkArr[i].index + ":";
            }
            
            Index += checkArr[checkArr.length-1].index;
            
            let theIndex = Index.split(":")[0];
            
            let x = theIndex.split(",")[0].split("(")[1];
                
            let y = theIndex.split(",")[1].split(")")[0];
            //console.log(`X: ${x}, Y: ${y}`);
                winArr.index.push(RemoveDuplicates(Index.split(":")));
            
            let who = winArr.index[0][0].split(",");
            
            winArr.whoWin = array[who[1].split(")").join("")][who[0].split("(").join("")];
    }
        return winArr;
}

function checkWin(array,toWin) {
    let rows = array[0].length;
    let columns = array.length;
    let finalWhoWin = [];
    let finalNumOfWin = 0;
    let finalIndex = [];
    
    if(toWin > 1 && (toWin <= rows || toWin <= columns)) {
    // جنب بعض
    let win = {numOfWins: 1, whoWin: "", index: []};
    let numOfWin = 0;
    
    for(let y=0; y<columns; y++) {
        let checkArr = [];
        for(let x=0; x<rows-toWin+1; x++) {
            for(let iWin=1; iWin<toWin; iWin++) {
                array[y][x] == array[y][x+iWin] && array[y][x] != ""? checkArr.push({checker: array[y][x] == array[y][x+iWin], index: `(${x+iWin-1},${y}):(${x+iWin},${y})`, turn: array[y][x]}) : "";
            }
        }
        win = checkArrToWhoWin(checkArr,win,toWin,array);
            }
        
        let indexArr = win.index;
        indexArr = splitArrWithNum(indexArr,toWin);
        
        win.numOfWins = win.index.length;





    // فوق بعض
    let winUp = {numOfWins: 1, whoWin: "", index: []};
    let numOfWinUp = 0;



    for(let x=0; x<rows; x++) {
        let checkArr = [];
        for(let y=0; y<columns-toWin+1; y++) {
            for(let iWin=1; iWin<toWin; iWin++) {
            array[y][x] == array[y+iWin][x] && array[y][x] != ""? checkArr.push({checker: array[y][x] == array[y+iWin][x], index: `(${x},${y+iWin-1}):(${x},${y+iWin})`, turn: array[y][x]}) : "";
            }
        }
        
        winUp = checkArrToWhoWin(checkArr,winUp,toWin,array);
    }
        let indexArrUp = winUp.index;
        indexArrUp = splitArrWithNum(indexArrUp,toWin);

        winUp.numOfWins = winUp.index.length;
    
    
    
    // زحليقة من فوق على الشمال
    let winSlide1 = {numOfWins: 1, whoWin: "", index: []};
    let numOfWinSlide1 = 0;



    for(let y=0; y<columns-toWin+1; y++) {
        let checkArr = [];
        for(let x=0; x<rows-toWin+1; x++) {
            for(let iWin=1; iWin<toWin; iWin++) {
            array[y][x] == array[y+iWin][x+iWin] && array[y][x] != ""? checkArr.push({checker: array[y][x] == array[y+iWin][x+iWin], index: `(${x+iWin-1},${y+iWin-1}):(${x+iWin},${y+iWin})`, turn: array[y][x]}) : "";
            }
        }
        winSlide1 = checkArrToWhoWin(checkArr,winSlide1,toWin,array);
    }
        let indexArrSlide1 = winSlide1.index;
        
        indexArrSlide1 = splitArrWithNum(indexArrSlide1,toWin);
        
        winSlide1.numOfWins = winSlide1.index.length;

        



        // زحليقة من فوق على اليمين
    let winSlide2 = {numOfWins: 1, whoWin: "", index: []};
    let numOfWinSlide2 = 0;



    for(let x=rows-1; x>toWin-2; x--) {
        let checkArr = [];
        for(let y=0; y<columns-toWin+1; y++) {
            for(let iWin=1; iWin<toWin; iWin++) {
                array[y+iWin-1][x-iWin+1] == array[y+iWin][x-iWin] && array[y][x] != ""? checkArr.push({checker: array[y+iWin-1][x-iWin+1] == array[y+iWin][x-iWin],
index: `(${x-iWin+1},${y+iWin-1}):(${x-iWin},${y+iWin})`, turn: array[y][x]}) : "";
            }
        }
        winSlide2 = checkArrToWhoWin(checkArr,winSlide2,toWin,array);
    }
        let indexArrSlide2 = winSlide2.index;
        
        indexArrSlide2 = splitArrWithNum(indexArrSlide2,toWin);
        
        winSlide2.numOfWins = winSlide2.index.length;




        let turn = "";

        finalNumOfWin += win.numOfWins;
        finalNumOfWin += winUp.numOfWins;
        finalNumOfWin += winSlide1.numOfWins;
        finalNumOfWin += winSlide2.numOfWins;
        
        
        
        
        
        
        
        
        
        
        
        
        finalWhoWin.push(win.whoWin);
        finalWhoWin.push(winUp.whoWin);
        finalWhoWin.push(winSlide1.whoWin);
        finalWhoWin.push(winSlide2.whoWin);
        
        finalWhoWin = RemoveDuplicates(finalWhoWin,1,"");
        
        finalWhoWin = removeFromArr(finalWhoWin,0,"");
        
        finalWhoWin = RemoveDuplicates(finalWhoWin);
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        indexArr.length>0? indexArr.forEach((e)=> {
            finalIndex.push(e);
        }) : "";
        
        indexArrUp.length>0? indexArrUp.forEach((e)=> {
            finalIndex.push(e);
        }) : "";
        
        indexArrSlide1.length>0? indexArrSlide1.forEach((e)=> {
            finalIndex.push(e);
        }) : "";
        
        indexArrSlide2.length>0? indexArrSlide2.forEach((e)=> {
            finalIndex.push(e);
        }) : "";
        
        
        
        
        
        
        
        
        
        
        
        
        let finalCheck = [];
        
        for(let i=0; i<finalIndex.length-1; i++) {
            let x1 = finalIndex[i][0].split(",")[0].split("(")[1];
                
            let y1 = finalIndex[i][0].split(",")[1].split(")")[0];
            
            let x2 = finalIndex[i+1][0].split(",")[0].split("(")[1];
                
            let y2 = finalIndex[i+1][0].split(",")[1].split(")")[0];
            
            finalCheck.push(array[y1][x1] == array[y2][x2])
        }
        
        finalCheck = RemoveDuplicates(finalCheck);
        
        
        
        
        
        
        
        
        
        // return
        if(finalWhoWin.length <= 1 && finalCheck.length <= 1) {
        let conti = false;
        
        if(finalCheck.length == 1) {
            if(finalCheck[0] == true) {
                conti = true;
            }
        } else {
            conti = true;
        }
        
        if(conti) {
            finalWhoWin = finalWhoWin.join("");
            
            if(checkInArr2D(array,"")) {
                if(finalNumOfWin == 0) {
                    turn = "لا فوز حتى الآن";
                } else {
                    turn = {whoWin: finalWhoWin,numOfWin: finalNumOfWin, index: finalIndex};
                }
            } else {
                if(finalWhoWin.length == 0) {
                    turn = "تعادل";
                } else {
                    turn = {whoWin: finalWhoWin,numOfWin: finalNumOfWin, index: finalIndex};
                }
            }
        } else {
            turn = "خطأ";
        }
        
        
        
        return turn;
        } else {
            return "خطأ";
        }
        } else {
            return "عدِّل هدف الفوز";
        }
}