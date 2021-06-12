// 创建一个对象
let person = new Object();
// 动态的给对象添加属性，即属性可以随时添加
person.name = '张文建';
person.age = 24;
console.log(person.name);
console.log(person.age);
// 在
let person1 = person;
console.log(person1.name);
// 使用instanceof方法可以判断当前对象是否为指定类型
// 是返回true，否返回false。
console.log(()=>{
    person instanceof Object
},5000);
