/* 
    if(条件a) {
        代码块1
    } else if(条件b) {
        代码块2
    } else if(条件c) {
        代码块3
    } 
    ......
    else { // else： 备胎
        代码块c
    }
 
    注意：   1.只会最多执行一个分支，执行完了之后 分支语句就结束了 不会再往后面执行
             2. 分支语句  最多只会执行一个分支语句，所以条件越苛刻，就越要放前面
             3. else是可以省略的
*/


let a = 3;
// 如果为1： 就输出春天  2： 夏天  3： 秋天  4：冬天   大于2：西天   其他：季节无效   
if(a == 1) {
    console.log('春天');
} else if(a > 2) {
    console.log('西天');
} else if( a == 2) {
    console.log('夏天');
} else if( a == 3) {
    console.log('秋天');
} else if( a == 4) {
    console.log('冬天');
}else {
    console.log('季节无效');
}



