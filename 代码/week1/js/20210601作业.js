// // // for:输出h1到h6的标题
// // for (let i = 1; i <= 6; i++) {
// //     document.write('<h' + i + '>123</h' + i + '>');
// // }

// // // 输出从1乘到10的积
// // let product = 1;
// // for (let i = 1; i <= 10; i++) {
// //     product *= i;
// // }
// // console.log(product);

// // // 输出从100加到500的和
// // let sum = 0;
// // for (let i = 100; i <= 500; i++) {
// //     sum += i;
// // }
// // console.log(sum);

// // // 计算100内所有奇数的和
// // let sum = 0;
// // for (let i = 1; i <= 100; i = i + 2) {
// //     sum += i;
// // }
// // console.log(sum);

// // // 输出100内的所有能被5整除的数字
// // let num = 0;
// // for (let i = 1; num <= 100; i++) {
// //     num = i * 5;
// //     if (num <= 100)
// //         console.log(num);
// //     else
// //         break;
// // }

// // // 计算x的y次方,底数x和指数y由用户输入
// // let x = prompt('输入底数：'),
// //     y = prompt('输入指数：');
// // let product = 1;
// // for (let i = 0; i < y; i++) {
// //     product *= x;
// // }
// // console.log(product);
// // document.write(product);

// // // 输出100到999之间的所有位相同的数字
// // // (例如：111 222 333... 888 999)
// // for (let i = 100; i <= 999; i++) {

// //     // 将数字转化为字符串，用裁剪方法取出每一位进行比较
// //     // let tmpstr = i + '';
// //     // if (tmpstr.substr(0, 1) === tmpstr.substr(1, 1) && tmpstr.substr(1, 1) === tmpstr.substr(2, 1)) {
// //     //     console.log(i);
// //     // }

// //     // 分别取出 个位、十位、百位进行比较
// //     let theNum1 = Math.floor(i / 100);
// //     let theNum2 = Math.floor((i % 100) / 10);
// //     let theNum3 = i % 10;
// //     if (theNum1 == theNum2 && theNum2 == theNum3) {
// //         console.log(i);
// //     }
// // }

// // // for-if:找到并输出100~999内所有的水仙花树
// // // 水仙花数判断
// // function daffodils(n) {
// //     // 分别取出 个位、十位、百位进行比较
// //     let theNum1 = Math.floor(n / 100);
// //     let theNum2 = Math.floor((n % 100) / 10);
// //     let theNum3 = n % 10;
// //     let newNum = theNum1 ** 3 + theNum2 ** 3 + theNum3 ** 3;
// //     if (newNum != n) {
// //         return false;
// //     } else {
// //         return true;
// //     }
// // }
// // for (let i = 100; i <= 999; i++) {
// //     if (daffodils(i)) {
// //         console.log(i);
// //     }
// // }

// // // 鸡兔数量一共有15个，他们一共有34只脚，求出鸡兔的数量。
// // for (let chikens_num = 1; chikens_num < 15; chikens_num++) {
// //     let rabbit_num = 15 - chikens_num;
// //     if (chikens_num * 2 + rabbit_num * 4 == 34){
// //         console.log('鸡数量：'+ chikens_num + ', 兔数量：'+ rabbit_num);
// //     }
// // }

// // // 用户输入一个年份，判断是否是闰年
// // // （能被4整除不能被100整除，或者是400的倍数。）
// // let theYear = prompt('输入年份：');
// // if (theYear % 400 == 0) {
// //     document.write('闰年');
// // } else {
// //     if (theYear % 4 == 0 && theYear % 100 != 0) {
// //         document.write('闰年');
// //     } else {
// //         document.write('不是闰年');
// //     }
// // }

// // // 求出2000年-4000年之间哪些年是闰年。
// // // 判断闰年
// // function isLeapYear(year) {
// //     if (year % 400 == 0) {
// //         return true;
// //     } else {
// //         if (year % 4 == 0 && year % 100 != 0) {
// //             return true;
// //         } else {
// //             return false;
// //         }
// //     }
// // }
// // // 循环判断并输出闰年
// // for (let theYear = 2000; theYear <= 4000; theYear++) {
// //     if (isLeapYear(theYear)) {
// //         console.log(theYear);
// //     }
// // }

// // // 用户输入一个数字，判断是否是质数（只能被自身和1整除）
// // // （思路： 循环2-本身（不包括）之间的数字，如果中间的数字都不能被他整除，那么这个数就是质数。）
// // // 判断是否为质数
// // let theNum = prompt('输入需判断的数字：');
// // let flag = 1;
// // for (let i = 2; i < theNum; i++) {
// //     if (theNum % i == 0) {
// //         flag = 0;
// //     }
// // }
// // if (flag) {
// //     document.write('质数');
// // } else {
// //     document.write('不是质数');
// // }

// // // 求出1-300之间的质数。
// // // 判断是否为质数
// // function isPrimeNumber(theNum) {
// //     let flag = 1;
// //     for (let i = 2; i < theNum; i++) {
// //         if (theNum % i == 0) {
// //             flag = 0;
// //         }
// //     }
// //     return flag;
// // }
// // 循环判断并输出质数
// // for (let i = 1; i <= 300; i++) {
// //     if (isPrimeNumber(i)) {
// //         console.log(i);
// //     }
// // }

// // // 根据用户输入的行数打印一个三角形。
// // let num = prompt('输入行数:');
// // for (let i = 0; i < num; i++) {
// //     let tmpNum = 0;
// //     while ((tmpNum + i) < num) {
// //         document.write('&nbsp');
// //         tmpNum++;
// //     }
// //     for (let j = 0; j <= i; j++) {
// //         document.write(' *');
// //     }
// //     document.write('<br/>');
// // }

// // // 打印倒三角
// // let num = prompt('输入行数:');
// // for (let i = 0; i < num; i++) {
// //     for (let tmpNum = 0; tmpNum <= i; tmpNum++) {
// //         document.write('&nbsp');
// //     }
// //     for (let j = num - i; j > 0; j--) {
// //         document.write(' *');
// //     }
// //     document.write('<br/>');
// // }

// // // 根据用户输入的行数打印一个菱形。
// // // 定义正三角形函数
// // function triangle(num) {

// //     for (let i = 0; i < num; i++) {
// //         document.write('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
// //         let tmpNum = 0;
// //         while ((tmpNum + i) < num - 1) {
// //             document.write('&nbsp');
// //             tmpNum++;
// //         }
// //         for (let j = 0; j <= i; j++) {
// //             document.write('* ');
// //         }
// //         document.write('<br/>');
// //     }
// // }
// // // 定义总和为奇数时的正三角形函数
// // function triangle_fab(num) {
// //     for (let i = 0; i < num; i++) {
// //         document.write('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
// //         let tmpNum = 0;
// //         while ((tmpNum + i) < num) {
// //             document.write('&nbsp');
// //             tmpNum++;
// //         }
// //         for (let j = 0; j <= i; j++) {
// //             document.write('* ');
// //         }
// //         document.write('<br/>');
// //     }
// // }
// // // 定义倒三角形函数
// // function invert_triangle(num) {
// //     for (let i = 0; i < num; i++) {
// //         document.write('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
// //         for (let tmpNum = 0; tmpNum < i; tmpNum++) {
// //             document.write('&nbsp');
// //         }
// //         for (let j = num - i; j > 0; j--) {
// //             document.write('* ');
// //         }
// //         document.write('<br/>');
// //     }
// // }
// // // 针对输入数字进行菱形打印
// // let theNum = prompt('输入行数:');
// // let theNum1 = Math.floor(theNum / 2);
// // if (theNum % 2 == 0) {
// //     triangle(theNum1);
// //     invert_triangle(theNum - theNum1)
// // } else {
// //     triangle_fab(theNum1);
// //     invert_triangle(theNum - theNum1)
// // }


// // // 输出99乘法表  输出彩色版的99乘法表
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         // document.write('&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp');
//         // document.write('<span id=' + 'span_row' + i + j + '>' + i + '*' + j + '=' + j * i + '</span>');
//         document.write(`<span id = span_row${i}${j}>${i}×${j}=${i*j}</span>`);
//     }
//     document.write('<br/>');
// }
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         let id = 'span_row' + i + j;
//         console.log(id);
//         // if (j == 1) {
//         //     document.getElementById(id).style.color = "pink";
//         //     document.getElementById(id).style.backgroundColor = "purple";
//         // }
//         document.getElementById(id).style.display = "inline-block";
//         document.getElementById(id).style.width = "80px";
//         document.getElementById(id).style.height = "40px";
//         document.getElementById(id).style.lineHeight = "40px";
//         document.getElementById(id).style.textAlign = "center";
//         // document.getElementById(id).style.padding = "0px 10px";
//         // document.getElementById(id).style.boxSizing = "border-box";
//         document.getElementById(id).style.border = "1px solid transparent";
//         // 生产色彩
//         let color1_1 = parseInt(Math.random()*256);
//         let color1_2 = parseInt(Math.random()*256);
//         let color1_3 = parseInt(Math.random()*256);
//         let color2_1 = parseInt(Math.random()*256);
//         let color2_2 = parseInt(Math.random()*256);
//         let color2_3 = parseInt(Math.random()*256);
//         let color3_1 = parseInt(Math.random()*256);
//         let color3_2 = parseInt(Math.random()*256);
//         let color3_3 = parseInt(Math.random()*256);
//         document.getElementById(id).style.background = `linear-gradient(to bottom right, rgba(${color1_1}, ${color1_2}, ${color1_3}, 0.3) 0%, rgba(${color2_1}, ${color2_2}, ${color2_3}, 0.3) 50%, rgba(${color3_1}, ${color3_2}, ${color3_3}, 0.3) 100%)`;        
//         switch (j) {
//             case 1:
//                 document.getElementById(id).style.color = "tomato";
//                 break;
//             case 2:
//                 document.getElementById(id).style.color = "black";
//                 break;
//             case 3:
//                 document.getElementById(id).style.color = "yellowgreen";
//                 // document.getElementById(id).style.backgroundColor = "orange";
//                 break;
//             case 4:
//                 document.getElementById(id).style.color = "orange";
//                 // document.getElementById(id).style.backgroundColor = "purple";
//                 break;
//             case 5:
//                 document.getElementById(id).style.color = "tomato";
//                 // document.getElementById(id).style.backgroundColor = "black";
//                 break;
//             case 6:
//                 document.getElementById(id).style.color = "black";
//                 // document.getElementById(id).style.backgroundColor = "purple";
//                 break;
//             case 7:
//                 document.getElementById(id).style.color = "yellowgreen";
//                 // document.getElementById(id).style.backgroundColor = "purple";
//                 break;
//             case 8:
//                 document.getElementById(id).style.color = "orange";
//                 // document.getElementById(id).style.backgroundColor = "purple";
//                 break;
//             case 9:
//                 document.getElementById(id).style.color = "tomato";
//                 // document.getElementById(id).style.backgroundColor = "#999999";
//                 break;
//         }


//     }
//     // document.write('<br/>');
// }


// 重做练习题
// if:用户输入一个成绩，判断是优秀、及格、还是不及格。
// 输出判定级别：(>90)优  (90~70) 良  (70~60)中  <60 不及格。
// let score = prompt('输入判定成绩：');
// if (score > 90) {
//     document.write('优');
// } else if (score > 70) {
//     document.write('良');
// } else if (score > 60) {
//     document.write('中');
// } else {
//     document.write('不及格');
// }

// if:用户输入一个数，判定并输出是否是一个三位数。
// let num = prompt('输入一个数字：');
// if (num >= 100 && num <= 999) {
//     document.write('三位数');
// } else {
//     document.write('非三位数');
// }

// if: 用户输入一个三位数，判断是否是水仙花树
// （水仙花树：每位数的立方和等于三位数本身。比如：`153 = 1*1*1 +5*5*5 +3*3*3`）
// let num = prompt('输入一个数字：');
// // 分别获取三个位数
// // 个位
// let theNUm1 = num % 10;
// // 十位
// let theNum2 = parseInt((num % 100) / 10);
// // 百位
// let theNum3 = parseInt(num / 100);
// let theNewNum = theNUm1 ** 3 + theNum2 ** 3 + theNum3 ** 3;
// if (theNewNum == num) {
//     document.write('水仙花数');
// } else {
//     document.write('非水仙花数');
// }

// if:用户登录：用户输入用户名和密码并用两个变量保存，
// 判断是否登录成功并输出登录结果( 正确账号：用户名: admin 密码：ad123) 
// let name = prompt('输入用户名：'),
//     password = prompt('输入密码：');
// if (name === 'admin' && password === 'ad123') {
//     document.write('登录成功');
// } else {
//     document.write('登录失败');
// }