/* 
语法： if(条件a) {
        代码块b
    }
    如果条件a成立 就执行代码块b
    一定注意 ()内是条件(最终会转变为布尔值)   {}内是条件满足我们要执行代码
*/

/* 
    if(单身) {
        给个微信吧
    } 
*/
// let money = 100000001;
// if(money > 100000000) {
//     console.log('小目标完成！');
// }

let a = 1;
// if(a == 1) {
//     console.log('现在是春天');
// }
// 反面1
// if(a = 1):  ()内不是条件 而是赋值  所以就有问题
// 反面2 
if(a) { // 只有 '' 0 undefined null NaN false会得到false
    console.log('现在是春天');
}


