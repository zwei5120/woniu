// let menuArr = [];
// menuArr[0] = '干锅鸡';
// menuArr[1] = '干锅排骨';
// menuArr[2] = '清蒸鱼';
// menuArr[3] = '红烧肉';
// menuArr[4] = '酱排骨';
// menuArr[5] = '香肠';
// menuArr[6] = '腊肉';
// menuArr[7] = '鱼香肉丝';
// menuArr[8] = '炖猪蹄';
// menuArr[9] = '油泼面';
// let menuArr = new Array('干锅鸡', '干锅排骨', '清蒸鱼', '红烧肉', '酱排骨', '香肠', '腊肉', '鱼香肉丝', '炖猪蹄', '油泼面');
// for (let i = 0; i < 3; i++) {
//     let theNum = parseInt(Math.random() * 10);
//     console.log(menuArr[theNum]);
// }
// console.log(menuArr.length);
// menuArr[menuArr.length] = 12;
// console.log(menuArr.length);
// console.log(menuArr);
// menuArr[15] = '15';
// console.log(menuArr[15]);
// console.log(menuArr);
// console.log(menuArr[12]);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [12, 23, 12, 12, 45, 32];
// let newArr = arr1.concat('happy everyday', 'focus on every moments');
// console.log(newArr);
// let str = arr1.join('  ');
// console.log(str);
// console.log(arr1.push(arr2));
// console.log(arr1);
// console.log(arr1[5][1]);
// console.log(arr1.unshift(99, 98, 97));
// arr1.unshift(99);
// arr1.unshift(98);
// arr1.unshift(97);
// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.pop());
// console.log(arr1);
// console.log(arr1.reverse());
// console.log(arr1.slice(2,3));
// arr1.splice(3,0,34);
// console.log(arr1);
// console.log(arr1.indexOf(33));
// console.log(arr1.includes(33));
// 0603作业
// let arr = [
//     [80, 92, 97],
//     [61, 65, 71],
//     [59, 63, 70],
//     [85, 87, 99],
//     [76, 77, 85]
// ];
// // 最大值
// let theMax = arr[0][0];
// let theMin = arr[0][0];
// let theCount = 0;
// let theSum = 0;
// let theAve = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         if (arr[i][j] > theMax) {
//             theMax = arr[i][j];
//         }
//         if (arr[i][j] < theMin) {
//             theMin = arr[i][j];
//         }
//         theCount++;
//         theSum += arr[i][j];
//     }
// }
// theAve = theSum / theCount;
// console.log(theMax);
// console.log(theMin);
// console.log(theCount);
// console.log(theSum);
// console.log(theAve);

/* 定义一个数组，数组中包含了一些数据，完成下列题目(用户输入接收到的是字符串，不考虑字符串和数字问题)

        1.1 用户输入一个数据，输出该数据在数组中的位置，没有则输出-1

        1.2 用户输入一个下标(索引)，输出数组中对应的数据，没有则输出下标不合法

        1.3 用户输入一个数据，判断数组中是否有该数据，有输出true，没有输出false

        1.4 获取一个随机数，输出数组中对应的数据 */
// 定义一个长度为10的一维数组
// let arr = [
//     '干锅鸡', '干锅排骨', '清蒸鱼', '红烧肉', '酱排骨', '香肠', '腊肉', '鱼香肉丝', '炖猪蹄', '油泼面'
// ];
// let str = prompt('请输入一个菜名：');
// console.log('数组中位置为:'+arr.indexOf(str));
// let theIndex = prompt('输入一个索引值:');
// console.log(arr[theIndex]);
// let str1 = prompt('请输入一个菜名：');
// console.log(arr.includes(str1));
// let the_random_num = parseInt(Math.random() * 10);
// console.log(arr[the_random_num]);

// 3. 随机生成一个成都车牌号(川A AE86A)(5个字符，只能是数字或大写字母)
// let theSet = [
//     'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9
// ];
// // console.log(theSet.length);
// let theLicense = '川A ';
// for (let i = 0; i < 5; i++) {
//     let tmp = parseInt(Math.random() * 36);
//     theLicense += theSet[tmp];
// }
// console.log(theLicense);

/* 4. 单次登录验证： 定义两个数组，保持长度一致，
用于存放一批用户名和密码。然后验证用户输入的用户名和密码是否正确，
正确的前提是用户名和密码在位置上是一一对应的。 */
// let userName = [
//         'admin', 'zwj', 'pyy'
//     ],
//     passWord = [
//         '123123', 'qweqwe', 'qazwsx'
//     ];
// let theName = prompt('输入用户名:'),
//     thePsd = prompt('输入密码：');
// // 默认登录失败
// let flag = 0;
// for (let i = 0; i < userName.length; i++) {
//     if (theName === userName[i] && thePsd === passWord[i]) {
//         flag = 1;
//     }
// }
// if (flag) {
//     console.log('登录成功');
// } else {
//     console.log('登录失败');
// }

// 5.判断两个数组是否完全一致
// let arr1 = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// let arr2 = [12, 23, 34, 45, 56, 67, 78, 89, 90];
// let arr3 = [90, 89, 78, 67, 56, 45, 34, 23, 12];
// // 首先比较长度,长度不同直接判定不一致
// if (arr1.length !== arr3.length) {
//     console.log('两个数组不完全一致');
// } else {
//     // 长度一致时比较每一个元素
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr3[i]) {
//             console.log('两个数组不完全一致');
//             break;
//         } else if (i == arr1.length - 1) { //当到达最后一个元素，两个元素一致，就输出一致
//             console.log('两个数组完全一致');
//         }
//     }
// }

// 6.随机点名：定义一批学生姓名，随机抽取其中的5名学生来回答问题。
// 5个随机数不能出现相同的数字
// let nameSet = [
//     '李薇薇', '王微微', '赵薇薇', '孙维维', '钱伟伟',
//     '周维维', '吴薇薇', '郑薇薇', '冯薇薇', '陈薇薇',
//     '楚薇薇', '蒋薇薇', '沈薇薇', '韩薇薇', '杨薇薇'
// ];
// // 定义一个包含随即数的数组，避免重复
// let numSet = [];
// for (let i = 0; numSet.length < 5; i++) {
//     let thenum = parseInt(Math.random() * 15);
//     if (!numSet.includes(thenum)) {
//         numSet.push(thenum);
//     }
// }
// for (let i = 0; i < numSet.length; i++) {
//     console.log(nameSet[numSet[i]]);
// }

/* 7.单次登录验证的基础上： 3次用户登录验证：用户有3次机会输入用户名。
用户名都输入错误，程序结束，用户名输入正确，则输入密码进行验证。
用户名输入错误，那么继续输入，最多3次，程序结束。但中间某一次输入正确，
那么剩余的用户名输入次数做废。 */
// 定义用户名数组和密码数组
let acount = [
        'zwj', 'grl', 'yl'
    ],
    psw = [
        '123123', 'qweqwe', 'asdasd'
    ];
// 定义计数为3次的变量count
let count = 0;
while (count < 3) {
    let username = prompt('请输入用户名：')
    // 用户名输入正确，进入密码验证环节
    if (acount.includes(username)) {
        count = 0;
        console.log('用户名输入正确');
    } else {
        // 用户名输入错误则进入三次循环
        count++;
        if (count == 3) {
            console.log('已输入三次账户，登录失败');
        }
    }
}

// 8.上一题的基础上，用户名输入成功后，密码也有3次验证。
// 定义用户名数组和密码数组
// let acount = [
//         'zwj', 'grl', 'yl'
//     ],
//     psw = [
//         '123123', 'qweqwe', 'asdasd'
//     ];
// // 定义计数为3次的变量count
// let count = 0;
// while (count < 3) {
//     let username = prompt('请输入用户名：')
//     // 用户名输入正确，进入密码验证环节
//     if (acount.includes(username)) {
//         count = 0;
//         let thenum = acount.indexOf(username);
//         // console.log(thenum);
//         let count2 = 0;
//         while (count2 < 3) {
//             let password = prompt('请输入密码：');
//             if (password === psw[thenum]) {
//                 console.log('登录成功');
//                 count = 3;
//                 break;
//             } else {
//                 count2++;
//                 if (count2 == 3) {
//                     count = 3;
//                     console.log('已输入三次密码，登录失败');
//                 }
//             }
//         }

//     } else {
//         // 用户名输入错误则进入三次循环
//         count++;
//         if (count == 3) {
//             console.log('已输入三次账户，登录失败');
//         }
//     }
// }