let arr = [12, 34, 32, 56, 787, 342, 3242, 21, 34, 1, 2, 45, 56];

// 查找
/* for (let i = 0; i < arr.length - 1; i++) {
    let tmp;
    for (let j = i + 1; j < arr.length  ; j++) {
        if (arr[i] < arr[j]) {
            tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
        }
    }
}
console.log(arr); */















// 冒泡
/* console.time('flag')
for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
        let tmp;
        if (arr[j] > arr[j + 1]) {
            tmp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = tmp;
        }
    }
}
console.timeEnd('flag')
console.log(arr); */