let arr = [1,3,5,7,9,2,4,6,8,0];
// for(let i = 0; i < arr.length; i++) {
//     // i:  0 - arr.length - 1   -> 我们需要的索引
//     // console.log(i); // 索引
//     console.log(arr[i]); // 访问的数组元素
// }

/* 
语法： 
    数组名字.forEach(function(item,index) {
        item: 数组元素
        index： 这个数组元素对应的索引
    })
*/

arr.forEach(function(item, index) {
    console.log(item);
    // console.log(index);
    // console.log(arr[index]);
});











