// 1. 定义函数
// 1.1 函数声明式
/* 
语法：  function 函数名() {}
*/


//  1.2 函数表达式
/* 
语法：  let 变量名 = function(){}
*/



// 2. 函数的调用
//  函数名();




// 求取数组的最大值
// 定义了函数  函数不会自己执行
// function getArrMax() {
//     let arr = [1, 4, 6, 742, 23, 6, 7, 72, 13];
//     let num = arr[0]
//     arr.forEach(function (item, index) {
//         if (num < item) {
//             num = item
//         }
//     });
//     console.log(num);
// }
// 需要在适当的地方 手动去调用函数
// getArrMax(); // 调用函数


demo();

let demo = function() {
    console.log('hi');
}

