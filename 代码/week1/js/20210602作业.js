// // 求1-100 能被3整除或者能被5整除的数字的总和
// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//         sum += i;
//     }
// }
// console.log(sum);

// // 计算1-1000之间能被5整除的偶数的个数
// let count = 0;
// for (let i = 0; i <= 1000; i++) {
//     if (i % 5 == 0) {
//         count += i;
//     }
// }
// console.log(count);

// /* 小红为了方便拨号，给家人的电话号码设置了快捷键，小红输入一个数字，判断并输出拨打谁的电话。
// 1 妈妈的电话 2 爸爸的电话 3 奶奶的电话 4 爷爷的电话 其他数字： 无效电话。（switch和if两种） */
// let phoneNum = prompt('输入快捷键数字：');
// let phoneNum = 0;
// switch(phoneNum){
//     case 1:
//         console.log('妈妈的电话');
//         break;
//     case 2:
//         console.log('爸爸的电话');
//         break;
//     case 3:
//         console.log('奶奶的电话');
//         break;
//     case 4:
//         console.log('爷爷的电话');
//         break;
//     default:
//         console.log('无效电话');
//         break;
// }
// if (phoneNum == 1) {
//     console.log('妈妈的电话');
// } else if (phoneNum == 2) {
//     console.log('爸爸的电话');
// } else if (phoneNum == 3) {
//     console.log('奶奶的电话');
// } else if (phoneNum == 4) {
//     console.log('爷爷的电话');
// } else {
//     console.log('无效电话');
// }

// // 抓球问题：有红球5个，黑球7个，白球9个，现取12个，一共有多少种取法。
// let count = 0;
// for (let red_balls = 0; red_balls <= 5; red_balls++) {
//     for (let black_balls = 0; black_balls <= 7; black_balls++) {
//         for (let white_balls = 0; white_balls <= 9; white_balls++) {
//             if (red_balls + black_balls + white_balls == 12) {
//                 count++;
//             }
//         }
//     }
// }
// console.log(count);


// 根据用户输入的行数打印一个三角形。
// let num = prompt('输入行数:');
// for (let i = 0; i < num; i++) {
//     let tmpNum = 0;
//     while ((tmpNum + i) < num) {
//         document.write('&nbsp');
//         tmpNum++;
//     }
//     for (let j = 0; j <= i; j++) {
//         document.write(' *');
//         // document.write('&nbsp&nbsp*&nbsp&nbsp');
//     }
//     document.write('<br/>');
// }
// 方案二根据用户输入的行数打印一个三角形。
// let num = prompt('输入行数:');
// // let num = 6;
// for (let i = 0; i < num; i++) {
//     // 定义一个接收字符串
//     let tmpStr = '';
//     for (let j = 0; j <= i; j++) {
//         tmpStr += '&nbsp*&nbsp';
//     }
//     let id = "span_" + i;
//     document.write(`<span id="span_${i}">${tmpStr}</span>`);
//     document.getElementById(id).style.display = "block";
//     document.getElementById(id).style.textAlign = "center";
// }

// // 倒三角方案二
// let num = prompt('输入行数:');
// // let num = 6;
// for (let i = 0; i < num; i++) {
//     // 定义一个接收字符串
//     let tmpStr = '';
//     for (let j = num; j > i; j--) {
//         tmpStr += '&nbsp*&nbsp';
//     }
//     let id = "span_" + i;
//     document.write(`<span id="span_${i}">${tmpStr}</span>`);
//     document.getElementById(id).style.display = "block";
//     document.getElementById(id).style.textAlign = "center";
// }

// // 根据用户输入的行数打印一个菱形。
// //  定义正三角函数
// function triangle_1(num) {
//     for (let i = 0; i < num; i++) {
//         // 定义一个接收字符串
//         let tmpStr = '';
//         for (let j = 0; j <= i; j++) {
//             tmpStr += '&nbsp&nbsp*&nbsp&nbsp';
//         }
//         let id = "span_" + i;
//         document.write(`<span id="span_${i}">${tmpStr}</span>`);
//         document.getElementById(id).style.display = "block";
//         document.getElementById(id).style.textAlign = "center";
//     }
// }
// // 定义倒三角形函数
// function invert_triangle_1(num) {
//     for (let i = 0; i < num; i++) {
//         // 定义一个接收字符串
//         let tmpStr = '';
//         for (let j = num; j > i; j--) {
//             tmpStr += '&nbsp&nbsp*&nbsp&nbsp';
//         }
//         let id = "spanx_" + i;
//         document.write(`<span id="spanx_${i}">${tmpStr}</span>`);
//         document.getElementById(id).style.display = "block";
//         document.getElementById(id).style.textAlign = "center";
//     }
// }
// // 绘制菱形
// let theNum = prompt('输入行数:');
// let theNum1 = Math.floor(theNum / 2);
// triangle_1(theNum1);
// invert_triangle_1(theNum - theNum1);





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

// // 打印99乘法表
// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= i; j++) {
//         document.write(` <span id="span_${i}${j}">${i}×${j}=${i*j}</span>  `);
//         let id = 'span_' + i + j;
//         // 定义背景色彩
//         let color1_1 = parseInt(Math.random()*256);
//         let color1_2 = parseInt(Math.random()*256);
//         let color1_3 = parseInt(Math.random()*256);
//         let color2_1 = parseInt(Math.random()*256);
//         let color2_2 = parseInt(Math.random()*256);
//         let color2_3 = parseInt(Math.random()*256);
//         let color3_1 = parseInt(Math.random()*256);
//         let color3_2 = parseInt(Math.random()*256);
//         let color3_3 = parseInt(Math.random()*256);
//         // 定义文字色彩
//         let text_color1 = parseInt(Math.random()*256);
//         let text_color2 = parseInt(Math.random()*256);
//         let text_color3 = parseInt(Math.random()*256);
//         document.getElementById(id).style.color = `rgb(${text_color1}, ${text_color2}, ${text_color3})`;
//         document.getElementById(id).style.background = `linear-gradient(to bottom, rgba(${color1_1}, ${color1_2}, ${color1_3}, 0.2) 0%,rgba(${color2_1}, ${color2_2}, ${color2_3}, 0.2) 50%,rgba(${color3_1}, ${color3_2}, ${color3_3}, 0.2) 100%)`;
//         document.getElementById(id).style.width = "80px";
//         document.getElementById(id).style.height = "40px";
//         document.getElementById(id).style.lineHeight = "40px";
//         document.getElementById(id).style.textAlign= "center";
//         document.getElementById(id).style.display= "inline-block";
//     }
//     document.write('<br />')
// }