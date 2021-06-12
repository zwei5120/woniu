// 1. parseInt() 
// 语法: parseInt(变量名/值)
// 对于字符串: 首字符是数字的才可以得到值,否则就得到NaN
// console.log(parseInt('200px')); // 200
// console.log(parseInt('200.10px')); // 200
// console.log(parseInt('AK47')); // NaN
// // 除去字符串其他类型 都得到NaN
// console.log(parseInt(null));  // NaN
// console.log(parseInt(undefined)); 
// console.log(parseInt(true)); 

// 2. parseFloat() 
// 语法: parseFloat(变量名/值)
// 对于字符串: 首字符是数字的才可以得到值,否则就得到NaN
// console.log(parseFloat('200px')); // 200
// console.log(parseFloat('200.0001px')); // 200.0001
// console.log(parseFloat('AK47')); // NaN
// // 除去字符串其他类型 都得到NaN
// console.log(parseFloat(null));  // NaN
// console.log(parseFloat(undefined)); 
// console.log(parseFloat(true)); 



// 3. Number()
// 语法: Number(变量名/值)
// 对于字符串: 只有纯数字的才会得到值,否则得到NaN
console.log(Number('200px')); // NaN
console.log(Number('200')); // 200
// boolean类型: true: 1   false: 0
console.log(Number(true)); // 1
console.log(Number(false)); // 0
// 对于特殊值: undefined ->  NaN   null ->  0
console.log(Number(undefined)); // NaN
console.log(Number(null)); // 0
