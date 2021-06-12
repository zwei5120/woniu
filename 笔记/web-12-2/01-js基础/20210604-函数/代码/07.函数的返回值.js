// let arr1 = [1, 4, 6, 742, 23, 6, 7, 72, 13];
// let arr2 = [1,4,6,742,23,998,7,72,13];
// let arr3 = [1,4,6,742,23,6,71,72,13];
// let arr4 = [1,4,6,72,23,6,79,72,13];
// let arr5 = [1,4,6,742,23,6,71,72,13];

// function getArrMax(arr) {
//     // 在函数体中 理解为定义了一个arr变量 在函数体中 就来操作这个变量
//     // console.log(arr);
//     let num = arr[0]
//     arr.forEach(function (item, index) {
//         if (num < item) {
//             num = item
//         }
//     });
//     console.log(num);
// }

// // 实参的语法：  函数名(实参1，实参2，实参3，...)
// getArrMax(arr1); // 调用函数
// getArrMax(arr2); // 调用函数

// arr1中的最大值有没有超过1000,如果有就输出 ’嘿嘿嘿‘
// arr2中的最大值有没有超过10000,如果有，就输出它和20的和


// 返回值
// 返回值就是调用函数的时候 得到的结果
//  1. 在函数体中 写：  return 返回值   (函数有返回值 就需要写return)
// function getArrMax(arr) {
//     let num = arr[0]
//     arr.forEach(function (item, index) {
//         if (num < item) {
//             num = item
//         }
//     });
//    return num;
// }

// 2. 接收返回值
// 在调用函数的时候 函数就会把返回值给我们  这个时候我们就用一个变量取接收它 这个变量接收到的数据 就是函数的返回值
// let max = getArrMax(arr1); // 调用函数
// console.log(max);
// if(max > 1000) {  // 做其他操作
//     console.log('xxxxxxx');
// }


// let max2 = getArrMax(arr2); // 调用函数
// console.log(max2);





// function sum(a, b) {
//     //    return a + b;
//     a + b
// }
// let res = sum(1, 8); // 当函数没有返回值的时候 我们接收到的返回值默认是undefined
// console.log(res);

// function sum(a, b) {
//     return a + b;// return之后的代码都不会执行
//     return a; // return 也只会执行一次
//     let num = a * 10 + b;
//     console.log(num);
// }
// let res = sum(1, 8); // 当函数没有返回值的时候 我们接收到的返回值默认是undefined
// console.log(res);


function sum(a, b) {
    console.log(a + b);
}
let res = sum(1, 8); // 当函数没有返回值的时候 我们接收到的返回值默认是undefined
console.log(res);
console.log(sum(1,8)); // 函数的调用 + 函数的返回值  一次打印 计算之后的结果9 和返回的返回值undefined


/*

总结： 1. 当我需要函数的返回值来做其他的操作或者运算的时候 ，这个时候就需要返回值
        2. 返回值的步骤1 在函数体中写  return +返回值
        3. 步骤2：调用函数的时候，就接受到了返回值，用一个变量来接收它
        4. 当函数没有返回值的时候 我们接收到的返回值默认是undefined
        5. return 也只会执行一次，之后的代码都不会再执行

*/



