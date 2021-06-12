//  语法： 数组名.sort(fn)
let arr = [1,3,5,6,788,25,242,34,244];
// arr.sort(function(a, b) {
//     // b - a // 位置不变
//     // return b - a // 降序
//     return a - b // 升序
// });
// console.log(arr);


arr.sort((a, b) => a - b);
console.log(arr);




