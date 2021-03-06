// 1. 定义函数
// 1.1 函数声明式
/* 
语法：  function 函数名(形参1，形参2，形参3，...) {}
    注意：在定义函数的时候，形参写在()内的 形参之间以,间隔
*/

let arr1 = [1, 4, 6, 742, 23, 6, 7, 72, 13];
let arr2 = [1,4,6,742,23,998,7,72,13];
let arr3 = [1,4,6,742,23,6,71,72,13];
let arr4 = [1,4,6,72,23,6,79,72,13];
let arr5 = [1,4,6,742,23,6,71,72,13];

function getArrMax(arr) {
    // 在函数体中 理解为定义了一个arr变量 在函数体中 就来操作这个变量
    // console.log(arr);

    let num = arr[0]
    arr.forEach(function (item, index) {
        if (num < item) {
            num = item
        }
    });
    console.log(num);
}

// 实参的语法：  函数名(实参1，实参2，实参3，...)
getArrMax(arr1); // 调用函数
getArrMax(arr2); // 调用函数

/* 
总结： 1. 函数体中，做操作的是形参： 形参是形式参数，是一个形式的，所以可以任意命名
       2. 调用函数的时候，传递进去的实参：是实实在在的数据
       3. 实参和形参： 一一对应（我传什么，接收到的就是什么，做操作的也就是什么）
       4. 函数内部 不要直接引用外部的数据，而应该使用的是形参
       5. 函数内部  如果需要动态的数据  不要直接引用外部的数据，而应该再定义一个形参，调用函数的时候，传递实参
       6. 形参和实参：一一对应：   位置上一一对应 （实参1对应形参1，实参2对应形参2）    类型也要一一对应(形参是什么类型，实参传递的时候 也要是什么类型，否则就会出现问题)
*/

