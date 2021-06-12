// 数组对象
let arr = [
    { id: 11, name: 'pyy1', age: 17, desc: '帅' },
    { id: 2, name: 'pyy2', age: 27, desc: '帅' },
    { id: 32, name: 'pyy3', age: 16, desc: '帅' },
    { id: 4, name: 'pyy4', age: 35, desc: '帅' }
];
// 根据某个具体的属性来排序 -》  就是在callback中使用这个属性值来做计算 -》 具体的数值
arr.sort((a, b) => b.id - a.id);
console.log(arr);



