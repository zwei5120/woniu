// arguments会获取所有的实参
// 它是一个类数组：具备数组的部分特性:  .length  []
let arr = [1,4]
function sum(a, b) {
    // console.log(arguments);
    // console.log(arguments.length); // 实参的个数
    // console.log(arguments[1]);

    // arguments.forEach(): 类数组 不是一个真数组  不能使用数组的方法
    for(let i = 0; i < arguments.length; i++) {
        // i: 0 - arguments.length - 1
        console.log(arguments[i]);
    }

    // console.log(a);
    // console.log(b); 
    // console.log(a+b);
}
sum(1,61,arr); // 实参多于形参  多余的实参 只是没有接收它而已 形参也是位置上一一对应去取实参的数据