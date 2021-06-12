/* 

ES5定义函数的方式：

function 函数名(){}

let 函数名 = function() {}



ES6： 箭头函数
let 函数名 = () => {}

*/

// function sum(a,b) {
//     return a + b;
// }


// let sum = (a,b) =>{
//     return a + b;
// }
// console.log(sum(1,9));


// 特点1： 如果函数体内的代码 只有return的时候 可以省略{}和return  注意： 两个一起省略

// let sum = (a,b) => a + b;
// console.log(sum(1,9));

// 特点2： 如果函数有且只有一个参数的时候  可以省略()

let sum = a => a + 10;
console.log(sum(9));





// function getArrMax(arr) {
//     let num = arr[0]
//     arr.forEach(function (item, index) {
//         if (num < item) {
//             num = item
//         }
//     });
//     return num;
// }
let getArrMax = arr => {
    let num = arr[0]
    arr.forEach(function (item, index) {
        if (num < item) {
            num = item
        }
    });
    return num;
}