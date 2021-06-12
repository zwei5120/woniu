// 类型不一致的时候
// function addItemInArrLast(array,num) {
//     if(参数1是数组) {
//         array.forEach()
//     } else if(参数1是特数值的时候) {
//     } 
   
//     // array[array.length] = num;
//     // console.log(array);
// }
// // 想arr添加10， arr1添加100
// // addItemInArrLast(arr,10); 
// // addItemInArrLast(arr1,100);
// addItemInArrLast(1,1)



// 实参和形参个数不一致的时候
// function sum(a, b) {
//     console.log(a);
//     console.log(b);
//     console.log(a+b);
// }
// // sum(1,6);
// sum(1,61);


function sum(a, b) {
    console.log(a);
    console.log(b); 
    console.log(a+b);
}
sum(1,61,100); // 实参多于形参  多余的实参 只是没有接收它而已 形参也是位置上一一对应去取实参的数据
// sum(1); // 实参少于形参  前面的形参还是去取对应位置的实参的值   多于的形参 它的值是undefined









