// 为数组中的每个元素执行一次callback  将callback的返回值 给添加到新数组中去
let arr = [1,3,5,6,788,25,242,34,244];
// let newArr = arr.map(function(item, index) {
//     return item + 10; // 将返回值添加到新数组中去
// });
// console.log(newArr);
// console.log(arr); // 没有修改原数组


// let newArr = arr.map(function(item, index) {
//     item + 10; // 将返回值添加到新数组中去 如果没有写return 那么就返回undefined
// });
// console.log(newArr); // 装着undefined的新数组



let newArr = arr.map(item => item + 10);
console.log(newArr);





