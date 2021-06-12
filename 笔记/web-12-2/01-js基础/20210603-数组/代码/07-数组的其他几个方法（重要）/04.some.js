let arr = [1,3,5,6,788,25,242,34,244];

// 判断arr中是否存在大于300的数字
// let flag = true;
// arr.forEach(item => {
//     if(item > 300) {
//         flag = false;
//         console.log('有');
//     }
// })
// if(flag) {
//     console.log('没有');
// }



let res = arr.some(function(item, index) {
    console.log(item);
    // item > 300
    return item > 300
});
console.log(res);



