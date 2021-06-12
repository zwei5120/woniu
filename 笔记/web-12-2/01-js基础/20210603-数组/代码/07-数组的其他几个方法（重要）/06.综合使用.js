let arr = [56,78,53,77,89,96,66];
// 先将每个同学的成绩，减去10分，
// 再筛选及格了的同学，
// 计算出及格了的同学的总分

// 1. 
// let newArr = arr.map(function(item) {
//     return item - 10
// });
// let newArr = arr.map(item => item - 10);
// console.log(newArr);

// 2. 筛选减去10分之后的数组 及格了的同学
// let newArr2 = newArr.filter(function(item) {
//     return item >= 60;
// })
// let newArr2 = newArr.filter(item => item >= 60)
// console.log(newArr2);


// 3.
// let scoreTotal = newArr2.reduce(function(acc, cur) {
//     return acc + cur
// }, 0);
// let scoreTotal = newArr2.reduce((acc, cur) => acc + cur, 0);
// console.log(scoreTotal);




// 链式调用
// let newArr = arr.map(item => item - 10);
// let newArr2 = arr.map(item => item - 10).filter(item => item >= 60);

let scoreTotal = arr.map(item => item - 10)
    .filter(item => item >= 60)
    .reduce((acc, cur) => acc + cur, 0);
console.log(scoreTotal);

// 链式调用，一定需要注意，如果一个方法返回一个数组，我们又对这个数组做操作，我们就可以使用链式调用
// 如果一个方法 返回的不是数组，注意 就不能链式调用

// arr.push(100).sort((a,b) => a - b)

// let res = arr.push(100);
// res.sort((a,b) => a - b)