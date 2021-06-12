// 字面量
// let 变量名 = [];
// 声明的时候直接赋值添加元素
// let arr = [30, 27, 22, 20];



// 访问数组元素：  数组名称[索引]
// 赋值数组元素:   数组名称[索引] =  新的值

// let arr = [];
// arr[0] = 30;
// // console.log(arr); // [ 30 ]
// arr[1] = 20;
// console.log(arr); // [ 30, 20 ]


// let arr = [30, 27, 22, 20];
// arr[2] = 40;
// console.log(arr); // [ 30, 27, 40, 20 ]


// 数组访问数组元素时，要是访问的索引不存在，值是undefined。
// let arr = [30, 27, 22, 20];
// console.log(arr[5]); // undefined


let arr = [30, 27, 22, 20];
arr[6] = 40
console.log(arr.length); // 7
console.log(arr); //  [30, 27, 22, 20,,,40];
// 数组访问数组元素时，要是访问的索引不存在值，默认用undefined占位。
console.log(arr[5]); //  undefined


