// 注意： 最终返回的是布尔值


// >
// let num1 = 30, num2 = 31;
// console.log(num1 > num2); // false


// <
// let num1 = 30, num2 = 31;
// console.log(num1 < num2); // true


// >=
// let num1 = 30, num2 = 31;
// console.log(num1 >= num2); // false


// <=
// let num1 = 30, num2 = 31;
// console.log(num1 <= num2); // true


// ==  只比较值的大小 不比较类型
// let num1 = 30, num2 = '30';
// console.log(num1 == num2); // true

// === 比较值的大小和类型
// let num1 = 30, num2 = '30'; // 类型不一致 也不是严格全等于
// console.log(num1 === num2); // false



// !  取反 ->  原来为false  取反就为true 


// !=   -> 理解：把==中的第一个=替换为取反的!运算符,所以它的结果就和==的相反
// let num1 = 30, num2 = '30';
// console.log(num1 != num2); // false

// !==  -> 理解：把===中的第一个=替换为取反的!运算符,所以它的结果就和===的相反
let num1 = 30, num2 = '30'; // 类型不一致 也不是严格全等于
console.log(num1 !== num2); // true



