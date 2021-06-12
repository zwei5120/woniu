// 快速排序
// let tmpArr1 = [12, 23, 21, 78, 12, 56, 32, 56, 90, 12, 45];
// console.log(tmpArr1);
// 实现从小到大的排序
// for (let i = 0; i < tmpArr1.length; i++) {
//     let j = i - 1;
//     let tmpBit;
//     while (j >= 0 && tmpArr1[j] > tmpArr1[j + 1]) {
//         tmpBit = tmpArr1[j];
//         tmpArr1[j] = tmpArr1[j + 1];
//         tmpArr1[j + 1] = tmpBit;
//         j--;
//     }
// }
// console.log(tmpArr1);
// 实现从大到小的排序
// for (let i = 0; i < tmpArr1.length; i++) {
//     let j = i - 1;
//     let tmpBit;
//     while (j >= 0 && tmpArr1[j] < tmpArr1[j + 1]) {
//         tmpBit = tmpArr1[j];
//         tmpArr1[j] = tmpArr1[j + 1];
//         tmpArr1[j + 1] = tmpBit;
//         j--;
//     }
// }
// console.log(tmpArr1);
// 折中插入排序，总体理念仍然是插入排序
// 只是对插入位置的判断
// 从小到大
// let tmpArr1 = [12, 23, 21, 78, 12, 56, 32, 56, 90, 12, 45];
// for (let i = 0; i < tmpArr1.length; i++) {
//     let low, high, mid, tmpbit;
//     low = 0;
//     high = i - 1;
//     while (low <= high) {
//         mid = parseInt((low + high) / 2);
//         if (tmpArr1[mid] > tmpArr1[i]) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     // 最后的low值就是要插入的位置
//     // 将low到i-1的值往后移动，然后将i处的值放在low处
//     tmpbit = tmpArr1[i];
//     // 移动位置
//     for (let j = i; j > low; j--) {
//         tmpArr1[j] = tmpArr1[j - 1];
//     }
//     tmpArr1[low] = tmpbit;
// }
// console.log(tmpArr1);
// 降序
// let tmpArr1 = [12, 23, 21, 78, 12, 56, 32, 56, 90, 12, 45];
// for (let i = 0; i < tmpArr1.length; i++) {
//     let low = 0,
//         high = i - 1,
//         mid, tmpbit;
//     while (low <= high) {
//         // 记住一定要取整
//         mid = Math.ceil((low + high) / 2);
//         if (tmpArr1[mid] < tmpArr1[i]) {
//             high = mid - 1;
//         } else {
//             low = mid + 1;
//         }
//     }
//     tmpbit = tmpArr1[i];
//     for (let j = i; j > low; j--) {
//         tmpArr1[j] = tmpArr1[j - 1];
//     }
//     tmpArr1[low] = tmpbit;
//     // console.log(tmpArr1);
// }
// console.log(tmpArr1);
// let tmpArr1 = [12, 23, 21, 78, 12, 56, 32, 56, 90, 12, 45];
// tmpArr1.push(4);
// 冒泡排序
// 升序
let arr = [23, 45, 12, 89, 45, 21, 34, 11];
// for (let j = 0; j < arr.length; j++) {
//     for (let i = 0; i < arr.length - j; i++) {
//         let tmp;
//         if (arr[i] > arr[i + 1]) {
//             tmp = arr[i + 1];
//             arr[i + 1] = arr[i];
//             arr[i] = tmp;
//         }
//     }
// }
// 降序
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i; j++) {
//         let tmp;
//         if (arr[j] < arr[j + 1]) {
//             tmp = arr[j + 1];
//             arr[j + 1] = arr[j];
//             arr[j] = tmp;
//         }
//     }
// }
console.log(arr);