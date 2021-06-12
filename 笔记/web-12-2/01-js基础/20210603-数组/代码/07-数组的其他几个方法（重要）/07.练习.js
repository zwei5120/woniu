/* 
假设有个学生的数组arr，用来保存同学的年龄(每小题独立)
    1. 选出未成年的同学(小于18岁)
    2. 拿到每个同学的年龄 * 2  + 3 之后的结果来筛选出大于50岁的
    3. 是否有30岁及以上的同学。
    4. 计算出平均年龄

假设有个数组保存学生成绩（大于10人）。完成以下题目：
    a)输出所有成绩，每个成绩以空格隔开
    b)找到第一个及格的分数
    c)获取所有不及格的成绩
    d)获取数组中第5-10个人的分数
    e)获取及格的人数
    f)获取不及格的人数
    g)删除数组第9个并添加23和45到第9个，10个
    h)判断是否有满分的存在，如果没有，就添加100分到数组最后并倒序输出。
    i)删除最高分和最低分
*/

let arr = [15,23,36,22,28,30,44,31,32,22,21];
// 1. 选出未成年的同学(小于18岁)
let newArr1 = arr.filter(item => item < 18)

// 2. 拿到每个同学的年龄 * 2  + 3 之后的结果来筛选出大于50岁的
let newArr2 = arr.map(item => item * 2 + 3).filter(item => item > 50)

// 3.是否有30岁及以上的同学。
let isHave = arr.some(item => item > 30)

// 4. 计算出平均年龄
let res = arr.reduce((acc, cur) => acc + cur) / arr.length;

// a. 输出所有成绩，每个成绩以空格隔开
arr.join(' ')

// b. 找到第一个及格的分数
arr.filter(item => item >= 60)[0]

// c. 获取所有不及格的成绩
arr.filter(item => item < 60)

// d. 获取数组中第5-10个人的分数
arr.slice(4,10)

// e.获取及格的人数
arr.filter(item => item >= 60).length

// f.获取不及格的人数
arr.filter(item => item < 60).length

// g. 删除数组第9个并添加23和45到第9个，10个
arr.splice(8,1,23,45)

// h. 判断是否有满分的存在，如果没有，就添加100分到数组最后并倒序输出。
if(!arr.includes(100)) {
    arr.push(100);
    arr.reverse();
}

// i. 删除最高分和最低分
arr.sort((a, b) => a - b);

arr.shift();
arr.pop();

