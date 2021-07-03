// let arr = [2, 3, 1, 34, 23, 32, 56, 43, 87, 23, 89, 43, 12, 43];
let arr = [
    {id:1, num: 34, name: '照烧鸡腿堡'},
    {id:2, num: 23, name: '肥牛饭'},
    {id:3, num: 54, name: '腊排骨'},
    {id:4, num: 12, name: '酱牛肉'},
    {id:5, num: 98, name: '灌汤包'},
    {id:6, num: 43, name: '鱼香茄子'},
    {id:7, num: 65, name: '煲仔饭'}
];
arr.sort((a, b) => {
    return b.num - a.num;
});
console.log(arr);