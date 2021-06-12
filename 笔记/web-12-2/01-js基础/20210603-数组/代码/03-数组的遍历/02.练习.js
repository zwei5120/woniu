/* 
let arr = [56, 71, 57, 88, 91, 66];
1. 输出arr中最后一个数组元素
2. 获取数组中，学生及格的分数
3. 有多少个人及格了
4. 倒序输出数组中的元素
5. 获取数组中的最大值
6. 在数组的末尾添加一个指定值
*/

// 数组名[索引]
// 最后一个数组元素  ->  最后一个数组元素的索引
// 数组名.length - 1 = 最大索引
// 最后一个数组元素的索引:   数组名.length - 1
// let arr = [56, 71, 57, 88, 91, 66];
// 1
// console.log(arr[arr.length - 1]); 

//2. 获取数组中，学生及格的分数
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 60) {
//         console.log(arr[i]);
//     }
// }

// 3. 有多少个人及格了
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 60) {
//         sum++;
//     }
// }
// console.log(sum);


//4. 倒序输出数组中的元素
// 0 1 2 3 ... arr.length-1
// arr.length-1 arr.length-2 ... 3 2 1 0
// 
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(let i = arr.length - 1; i >= 0; i--) {
//     // i:  arr.length - 1 - 0
//     // console.log(i);
//     console.log(arr[i]);
// }



// 5. 获取数组中的最大值
// 获取最大值/最小值  -》  先遍历数组，拿到数组的每一项
let arr = [56, 71, 57, 88, 91, 66];
// 方法1：  思路：在循环外面，定义一个变量，循环的时候，把数字的每一个数组元素都和这个变量来做比较，如果大于了这个数，就把这个数组元素赋值给这个变量
// let max = arr[0]; // 如果为0 ，那么数组里全是负数的时候 就会有问题
// for(let i = 1; i < arr.length; i++) {
//     // console.log(arr[i]);
//     if(arr[i] > max) {
//         max = arr[i]
//     }
// }
// console.log(max);

// 方式2： 循环的时候，依次拿后面的值，和数组的第一项做比较，如果大于了第一项，就赋值给第一项(会修改原数组 所以不推荐 只是练习)
// for(let i = 1; i < arr.length; i++) {
//     if(arr[i] > arr[0]) {
//         arr[0] = arr[i]
//     }
// }
// console.log(arr);
// console.log(arr[0]);


// 6. 在数组的末尾添加一个指定值
// 赋值数组元素:   数组名称[索引] =  新的值
// arr[arr.length - 1]  ->  数组的最后一个数组元素
arr[arr.length] = 100;
console.log(arr);
