// 将数组按照指定分隔符拼接成字符串
// 数组不会改变  会将分割之后的字符串返回给我们 我们就用一个变量来接收它
let arr = [1,3,5,7,9];

// let str = arr.join('/');
// console.log(str,arr); // 1/3/5/7/9   [ 1, 3, 5, 7, 9 ]

// let str = arr.join();
// console.log(str); // 1,3,5,7,9   如果没有参数 那么就以,连接（理解：将[]去掉）


// let str = arr.join('');
// console.log(str); // 13579  

// let str = arr.join(' ');
// console.log(str); // 1 3 5 7 9 

let str = arr.join('                ');
console.log(str); // 1                3                5                7                9