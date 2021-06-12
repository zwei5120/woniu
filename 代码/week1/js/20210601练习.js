// 1. if:用户输入一个成绩，判断是优秀、及格、还是不及格。
// 输出判定级别：(>90)优  (90~70) 良  (70~60)中  <60 不及格。

// let score = prompt('输入成绩：') - 0;
// if (score > 90) {
//     document.write('优');
// } else if (score > 70) {
//     document.write('良');
// } else if (score > 60) {
//     document.write('中');
// } else {
//     document.write('不及格');
// }

// 2. if:用户输入一个数，判定并输出是否是一个三位数。
// let num = prompt('输入数字：') - 0;
// if (num >= 100 && num <= 999) {
//     document.write('是三位数');
// } else {
//     document.write('不是三位数');
// }

// 3. 用户登录：用户输入用户名和密码并用两个变量保存，
// 判断是否登录成功并输出登录结果( 正确账号：用户名: admin 密码：ad123) 
// let acount = prompt('账户:'),
//     password = prompt('密码：');

// if (acount === 'admin') {
//     if (password === 'ad123') {
//         document.write('登录成功');
//     } else {
//         document.write('登录失败');
//     }
// } else {
//     document.write('登录失败');
// }

// 4. 用户输入一个三位数，判断是否是水仙花树（水仙花树：每位数的立方和等于三位数本身。
// 比如：`153 = 1*1*1 +5*5*5 +3*3*3`）

// let num = prompt('输入一个三位数：');
// let theNum1 = Number(num.slice(0, 1));
// console.log(theNum1);
// let theNum2 = Number(num.slice(1, 2));
// console.log(theNum2);
// let theNum3 = Number(num.slice(2, 3));
// console.log(theNum3);
// if ((theNum1 ** 3 + theNum2 ** 3 + theNum3 ** 3) == num) {
//     document.write('该数为水仙花数');
// } else {
//     document.write('该数不是水仙花数');
// }