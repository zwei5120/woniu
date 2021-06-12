//  将一个或多个元素添加到数组的开头   返回新长度: 修改原数组

let arr = [1,2,3,4];
// let newLength =arr.push(5);
// let newLength =arr.unshift(5,6,7);
// console.log(arr, newLength);



// 一次调用传入多个参数 和多次调用传入一个参数  结果是不一样的  所以需要注意顺序
// arr.unshift(5,6,7) [5,6,7,1,2,3,4]

// arr.unshift(5) [5,1,2,3,4]
// arr.unshift(6) [6,5,1,2,3,4]
// arr.unshift(7) [7,6,5,1,2,3,4]




