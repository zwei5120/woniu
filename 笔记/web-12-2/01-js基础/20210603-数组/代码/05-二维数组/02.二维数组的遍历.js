let arr = [
    [1, 2, 3, 4, 56, 17, 8, 9, 9], // 第一个班级的成绩
    [1, 2, 3, 4, 56, 27, 8, 9, 9],// 第二个班级的成绩
    [1, 2, 3, 4, 56, 37, 8, 9, 9] // 第三个班级的成绩
]

for(let i = 0; i < arr.length; i++) {
    // arr[i]
    let childArr = arr[i]; // childArr是一个数组
    for(let j = 0; j < childArr.length; j++) {
        console.log(childArr[j]);
    }
}











