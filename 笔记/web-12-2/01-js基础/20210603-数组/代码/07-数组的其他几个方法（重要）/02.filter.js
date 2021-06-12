// filter是用来过滤的
// let 变量名（新数组名字） = 数组名字.filter(callback(item,index,array){})
// 返回true或隐式得到为true的元素添加到一个新数组

/* 
let newArr = arr.filter(function(item) {
    return item是否满足xxx的条件;
});
 */

let arr = [1,3,5,6,788,25,242,34,244];
// 筛选出数组中大于100的数

// 方式1以前的方法 
// let newArr = []
// arr.forEach(item => {
//     if(item >= 100) {
//         newArr.push(item);
//     }
// })
// console.log(newArr);




// 方式2
// 返回true的元素添加到一个新数组
// let newArr = arr.filter(function(item) {
//     return true;
// });
// console.log(newArr);// 原数组

// let newArr = arr.filter(function(item) {
//     return false; 
// });
// // 如果没有任何元素通过测试 那么会返回空数组
// console.log(newArr); // ??     [] 

// 隐式得到为true的元素 添加到一个新数组
// let newArr = arr.filter(function(item) {
//     return item >= 100;
// });
let newArr = arr.filter(item => item >= 100);
console.log(newArr);





