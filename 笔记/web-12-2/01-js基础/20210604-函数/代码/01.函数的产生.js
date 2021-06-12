
let arr = [1,4,6,742,23,6,7,72,13];
let arr1 = [1,4,6,742,23,6666,7,72,13];
let arr2 = [1,4,6,742,23,998,7,72,13];
let arr3 = [1,4,6,742,23,6,71,72,13];
let arr4 = [1,4,6,72,23,6,79,72,13];
let arr5 = [1,4,6,742,23,6,71,72,13];

let num = arr[0]
arr.forEach(function(item, index) {
    if(num < item) {
        num = item
    }
});
console.log(num);



let num1 = arr1[0]
arr1.forEach(function(item, index) {
    if(num1 < item) {
        num1 = item
    }
});
console.log(num1);









