/* 

语法：
    if(条件a) {
        代码块b
    } else { // else： 备胎
        代码块c
    }
    如果条件a成立 那么就执行代码块b  否则就执行else，执行代码块c
    注意： 因为条件a要么成立 要么不成立 成立就执行代码块b 不成立就执行代码块c
           所以 代码块b和代码块c  ，只会执行一个
*/

// let score = 69;
// if(score > 60) {
//     console.log('好看');
// } else {
//     console.log('还行');
// }


// 三目运算符：  (简易版本的if else)
// 语法：     a?b:c
// 如果条件a成立 就执行b，否则就执行c
let score = 59;
score>60?console.log('好看'):console.log('还行');
