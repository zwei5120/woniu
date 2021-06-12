// 1. 读取属性
// 1.1  以.属性名的方式来读取属性
//       对象名.属性名的方式来读取
let obj = {
    // key：    value
    // 属性名： 属性值
    name: 'cgx',
    gf: [1,23,4,56,7], // 键值可以是任意类型的
    say: function() { // 属性的值是一个函数 我们把这个属性叫做方法
        console.log('sayhi');
    }
}
// console.log(obj.aaaaaa); // undefined  访问对象不存在的属性 它的值是undefined
// obj.aaaaaa(); // undefined()  // is not a function

// console.log(obj.name);
// console.log(obj.gf); // [ 1, 23, 4, 56, 7 ]
// console.log(obj.gf[1]); // [ 1, 23, 4, 56, 7 ][1]


// console.log(obj.say); // [Function: say]
// console.log(obj.say()); // [Function: say]()

// let res = obj.say();
// console.log(res);
// console.log(obj.say());

// console.log(obj.name);



// 1.2 以方括号的形式来读取属性值
//     对象名[属性名]
// let obj1 = {
//     // key：    value
//     // 属性名： 属性值
//     name: 'cgx',
//     gf: [1,23,4,56,7], // 键值可以是任意类型的
//     say: function() { // 属性的值是一个函数 我们把这个属性叫做方法
//         console.log('sayhi');
//     }
// }
// obj1[name]; // name未定义 因为它是去读取name这个变量
// console.log(obj1['name']); // cgx



//总结：  两者区别
// 1.如果以方括号运算符（中括号运算符）的形式来读取属性值，那么属性名必须要加上引号，不加引号的话会被当成变量
// 2.以.的形式来读取属性值的时候，永远不会当成变量来读取，只会当成对象的属性去访问
// 3.以.的形式来读取，不能加引号
// 4. 访问对象不存在的属性 它的值是undefined




// 2. 属性的赋值
// let obj2 = {
//     // key：    value
//     // 属性名： 属性值
//     name: 'cgx',
//     gf: [1,23,4,56,7], // 键值可以是任意类型的
//     say: function() { // 属性的值是一个函数 我们把这个属性叫做方法
//         console.log('sayhi');
//     }
// }
// console.log(obj2.name); // 读取属性
// console.log(obj2['name']); // 读取属性
// // obj2.name = 'xcgx'; // 对属性进行赋值
// obj2['name'] = 'xcgx'; // 对属性进行赋值
// console.log(obj2);


