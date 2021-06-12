// 用于再数组中查询指定元素是否存在  如果存在，那么返回？？？（true）   如果不存在，返回？？？(false)
// 数组名.includes(要查询的数据)
let arr = [1,2,3,4,5,6,7,8,9,5,6];
// let index = arr.includes(0); //  如果数组中不存在要查询的这个数 那么就返回false
// let index = arr.includes(1); // 如果存在这个数 那么返回true
let index = arr.includes(5); // 如果存在这个数 即使存在多个  也返回true
console.log(index);








// 如果只是用于判断是否存在某个元素，那么就使用includes
// 如果想要使用某个数据再数组中的位置，那么就使用indexOf




