let obj = {
    // key: value,
    // 键和值之间 以：间隔
    name: "pyy", // 键值对之间以，号间隔
    age: 17,
};


// 对象的键名都是引号 我们不写引号 js也会自动帮我们加上引号的



// 键名也叫属性名
// 键值也称为属性值


let obj1 = {
    name: 'cgx',
    gf: [1,23,4,56,7], // 键值可以是任意类型的
    say: function() { // 属性的值是一个函数 我们把这个属性叫做方法
        console.log('sayhi');
    }
}



// 动态添加属性
let obj2 = {};
obj2.desc = '帅'
console.log(obj2);

