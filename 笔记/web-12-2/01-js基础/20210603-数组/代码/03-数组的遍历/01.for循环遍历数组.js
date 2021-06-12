let arr = [1,3,5,7,9,2,4,6,8,0];
// 访问数组元素： 数组名[索引]
// 最大索引= 数组名.length - 1
/* 
访问数组的每个元素：
    arr[0]
    arr[1]
    arr[2]
    ...
    arr[数组名.length - 1]


通过上面得出 我们需要获取的是：
    0
    1
    2
    ...
    数组名.length - 1




要获取的范围是： 0 - 数组长度-1
要获取的范围是： 0 - 数组名.length-1
 */

// for(let i = 0; i <= arr.length - 1; i++) {
//     // i:  0 - arr.length - 1   -> 我们需要的索引
//     // console.log(i); // 索引
//     console.log(arr[i]); // 访问的数组元素
// }

for(let i = 0; i < arr.length; i++) {
    // i:  0 - arr.length - 1   -> 我们需要的索引
    // console.log(i); // 索引
    console.log(arr[i]); // 访问的数组元素
}









