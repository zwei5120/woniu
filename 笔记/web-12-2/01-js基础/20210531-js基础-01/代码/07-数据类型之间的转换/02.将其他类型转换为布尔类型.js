// Boolean()
// 语法: Boolean(变量名/值)
// 只有6个值会得到false: '' 0 undefined null NaN false
console.log(Boolean(''));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(false));

console.log(Boolean(' ')); // true  字符串:只有空的字符串才得到false
console.log(Boolean('undefined')); // true

