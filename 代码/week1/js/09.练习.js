/* 
    1. 现有两个数组，用来存放两个班级学生的成绩，比较这两个班级学生平均分谁更高一些。
        要求：定义一个函数来获取班级学生的平均分，函数的返回值就是学生的平均分。拿取到平均分再做比较
    2. 定义一个函数，用来求两个数的积，如果用户传递的参数不等于2个，在函数外部打印提示信息，否则在外部打印积。

    3. 将以下优化为函数：
    a)传入一个数字，完成从0加到该数
    b)传入两个数字，完成x的y次方
    c)传入一个数字，判断是否是质数
    d)传入一个数组、和一个数字(下标)，完成删除数组指定位置数据。
    e)传入两个数字，求出并返回这两个数字之间（范围）的所有质数
*/
// 定义两个班级分数的数组
// let theClass1 = [56, 78, 43, 87, 65, 87, 99, 72];
// let theClass2 = [45, 67, 43, 89, 67, 95, 73, 96];
// // 定义取平均值的函数
// let theAve = arr => {
//     // 定义总和，除以数组长度得到平均值
//     let theSum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         theSum += arr[i];
//     }
//     return (theSum / arr.length)
// }
// if (theAve(theClass1) > theAve(theClass2)){
//     console.log('第一个班级平均分高');
// }else{
//     console.log('第二个班级平均分高');
// }

// 先定义求积函数
// let theProduct = function (num1, num2) {
//     if (arguments.length != 2) {
//         return false;
//     } else {
//         return num1 * num2;
//     }
// }
// // 定义两个数
// let n1 = 2,
//     n2 = 9,
//     n3;
// let res = theProduct(n1, n2, n3);
// if (!res) {
//     console.log('输入参数有误');
// } else {
//     console.log(res);
// }

/* 3. 将以下优化为函数：
    a)传入一个数字，完成从0加到该数
    b)传入两个数字，完成x的y次方
    c)传入一个数字，判断是否是质数
    d)传入一个数组、和一个数字(下标)，完成删除数组指定位置数据。
    e)传入两个数字，求出并返回这两个数字之间（范围）的所有质数 */
// let theSum = num => {
//     let num_ab = Math.abs(num);
//     let i = 0,
//         sum = 0;
//     while (i < num_ab) {
//         sum += i++;
//     }
//     return ((num / num_ab) * sum);
// }
// console.log(theSum(-10));
// let theProduct = (x, y) => {
//     return (x ** y);
// }
// console.log(theProduct(2, 3));
let isPrimeNumber = num => {
    // 先进行开方
    let theMidNum = parseInt(Math.sqrt(num));
    let flag = 1;
    for (let i = 2; i <= theMidNum; i++) {
        if (num % i == 0) {
            flag = 0;
            break;
        }
    }
    if (flag) {
        // console.log('是质数');
        return true;
    } else {
        // console.log('非质数');
        return false;
    }
}
// isPrimeNumber(19);
// 删除数组指定位置
// let deleteTheItem = (arr, index_num) => {
//     arr.splice(index_num, 1);
//     return arr;
// }
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(deleteTheItem(arr, 4));
// 返回两数间所有质数
let backPrimeNumber = (num1, num2) => {
    for (let i = num1; i <= num2; i++) {
        if (isPrimeNumber(i)) {
            console.log(i);
        }
    }
}
backPrimeNumber(14, 24);