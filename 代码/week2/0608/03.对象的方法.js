// let obj = {
//     // key：    value
//     // 属性名： 属性值
//     name: 'cgx',
//     age: 17,
//     sex: 'man',
//     desc: '还是帅',
//     gf: [1,23,4,56,7], // 键值可以是任意类型的
//     say: function() { // 属性的值是一个函数 我们把这个属性叫做方法
//         console.log('sayhi');
//     }
// }

// 1. 我想知道这个对象的所有属性
// 2. 我想知道对象所有属性和属性对应的属性值

// 1. 拿取对象的所有属性
// let 变量名= Object.keys(要读取的对象)
// Object.keys会将对象的所有属性全部给我们 并且是以数组的形式
// let keysArr = Object.keys(obj);
// console.log(keysArr); // [ 'name', 'age', 'sex', 'desc', 'gf', 'say' ]

// console.log(obj.keysArr[0]);
// let item = keysArr[0];
// console.log(obj.item);
// console.log(obj[keysArr[0]]);

// 2. 对象所有属性和属性对应的属性值
// keysArr.forEach(item => {
//     // item: 属性名
//     console.log(item);
//     console.log(obj.item); // .的形式是会去从obj里面去读取item这个属性
//     console.log(obj[item]); 
// });





// for in方法
// 循环遍历对象的全部属性
// 语法: for(let 变量 in 对象名){}
let obj = {
    // key：    value
    // 属性名： 属性值
    age: 17,
    name: 'cgx',
    sex: 'man',
    desc: '还是帅',
    gf: [1,23,4,56,7], // 键值可以是任意类型的
    
    say: function() { // 属性的值是一个函数 我们把这个属性叫做方法
        console.log('sayhi');
    }
}
console.log(obj.name);

// for(let key in obj) {
//     console.log(key);
//     console.log(obj[key]);
// }

