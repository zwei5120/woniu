// 用来截取数组的一部分数组元素
// arr.slice(截取的起始索引，截取的终止索引)
// 包含起始索引 但是 不包含终止索引
// 返回截取的元素组成的新数组    不修改原数组
let arr = [1,2,3,4,5,6,7,8,9];
let newArr = arr.slice(2,5)
console.log(newArr); // [ 3, 4, 5 ]
console.log(arr); // [1,2,3,4,5,6,7,8,9]

