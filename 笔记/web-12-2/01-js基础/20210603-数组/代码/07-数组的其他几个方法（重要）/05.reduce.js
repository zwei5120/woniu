// 常用来做累加

// 语法：const result = arr.reduce(callback(acc,cur,index),initialValue) 
// acc: 上一次操作完了之后的累加值
// cur：当前数字元素
// initialValue: 第一次执行callback的时候 acc的初始值

let arr = [1,3,5,6,788,25,242,34,244];
// 求所有数组元素的总和


// let sum = 0;
// arr.forEach(item => sum += item);
// console.log(sum); // 1348


let res = arr.reduce(function(acc, cur) {
    // console.log(acc);
    return acc + cur
}, 0);
console.log(res); // 1348
