import * as allfunc from "../../../معادلات هامة.js";
// import * as allfunc from "Y:/تدرب على صنع المواقع/معادلات هامة.js";

// let str = "1234567890";
let arr = [1,2,3,4,5,4,6,7,10,9,8];

arr = allfunc.RemoveDuplicates(arr,1,1);
arr = allfunc.removeFromArr(arr,0,1);
arr = allfunc.RemoveDuplicates(arr,1,4);
arr = allfunc.removeFromArr(arr,0,4);
let n = allfunc.prst(arr);
arr.push(11);
arr.push(12);
arr.push(13);
// arr = allfunc.sort(arr);
// n = arr;
// n = allfunc.unsort(arr,n);

console.log(arr);
console.log(n);