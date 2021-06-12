/* 
语法：
    switch(变量/值){
        case 值1:
            当数据全等于值1的时候，要执行的代码; 根据 === 严格全等于去匹配
            xxxx
            break; // 结束，跳出
            // 如果不写break，那么匹配上了之后。不会结束并跳出，后面的都会执行
        case 值2: 
            当数据全等于值2的时候，要执行的代码;
            break;
        case 值3: 
            当数据全等于值N的时候，要执行的代码;
            break;
        default:
            当以上都不等于时，要执行的代码;（备胎，和if里的else作用一样，同样也可以省略）
            break;
    }
*/

let num = '4'; // === 严格去匹配
switch (num) {
    case 1:
        console.log('春天到了');
        break;
    case 2:
        console.log('夏天到了');
        break;
    case 3:
        console.log('秋天到了');
        break;
    case 4:
        console.log('冬天到了');
        break;
    default:
        console.log('无效季节');
}

