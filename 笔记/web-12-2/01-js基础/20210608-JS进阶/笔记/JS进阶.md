# JS进阶知识-01

### 匿名函数

匿名函数顾名思义指的是没有名字的函数。

函数声明式声明一个普通函数语法是：

```
function fn(){}
```

把名字去掉，就变成了匿名函数了。

```
function (){}
```

但是由于不符合语法要求，会报错。解决方法只需要给匿名函数包裹一个括号即可。

```
(function (){})
```

如何调用呢，见下面的立即执行函数。

匿名函数的应用场景：

1. 函数表达式

   ```
   //将匿名函数赋值给变量fn。
   let fn= function(){
   	console.log('fn')
   }
   
   let obj = {
   	say: function() {
   		
   	}
   }
   ```

2. 返回值

   ```
   function fn() {
   	return function() {
   		return '嘿嘿嘿'
   	}
   }
   fn()// 拿到的是fn返回的匿名函数
   fn()() // 调用fn返回的匿名函数
   ```

作用： 不必为函数命名；减少全局变量；避免变量污染；内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量。





### 立即执行函数(IIFE)

立即执行函数是指声明一个匿名函数，并马上调用这个匿名函数就叫做立即执行函数；也可以说立即执行函数是一种语法，让你的函数在定义以后立即执行。

JS引擎规定，如果function出现在行首，一律解析成语句。因此JS引擎看到行首是function关键字以后，认为这一段都是函数定义，不应该以原括号结尾。

解决方法就是不要让function出现在行首，让JS引擎将其理解为一个表达式，最简单的处理就是将其放在一个圆括号里。

作用：

- 不必为函数命名，避免了污染全局变量
- 立即执行函数内部形成了一个单独的作用域，可以封装一些外部无法读取的私有变量

使用的场景

- 所有的这些工作只需要执行一次，比如只需要显示一个时间。
- 你的代码在页面加载完成之后，不得不执行一些设置工作。

语法：

```
// 1.
(function(){})()  // 用括号把函数包起来
// 2
(function(){}())  //用括号把整个表达式包起来
```



传参：

```
let result = (function(c){
  let a = 100,b=200;
  return a * b / c;
}(20));
console.log(result);
```



返回值：

像其他函数一样，立即执行函数也可以有返回值。

```
let result = (function(){
  let a = 100,b=200;
  return a * b;
}());
console.log(result);
```



### 执行上下文

执行上下文就是当前 JavaScript 代码被解析和执行时所在环境的抽象概念， JavaScript 中运行任何的代码都是在执行上下文中运行。执行上下文有三种，分别是全局执行上下文，函数执行上下文，与eval函数执行上下文（一般不用）。



###### 全局执行上下文

全局执行上下文只有一个，在客户端中一般由浏览器创建，也就是window对象。全局对象window上预定义了大量的方法和属性，我们在全局环境的任意处都能直接访问这些属性方法，同时window对象还是var声明的全局变量的载体。我们通过var创建的全局对象，都可以通过window直接访问。



###### 函数上下文

函数执行上下文可存在无数个，每当一个**函数被调用时**都会创建一个函数上下文。需要注意的是，同一个函数被多次调用，每次调用都会创建一个新的上下文。

上下文种类不同，而且创建的数量还这么多，它们之间的关系是怎么样的，又是谁来管理这些上下文呢？那就来说说执行上下文栈。



###### 执行上下文栈

执行上下文栈执行栈，在其他编程语言中也被叫做调用栈，具有 LIFO（Last In First Out后进先出，也就是**先进后出**）结构，用于存储在代码执行期间创建的所有执行上下文。

当 JavaScript 引擎首次读取你的脚本时，它会创建一个全局执行上下文并将其推入当前的执行栈。每当发生一个函数调用，引擎都会为该函数创建一个新的执行上下文并将其推到当前执行栈的顶端。

引擎会运行执行上下文在执行栈顶端的函数，当此函数运行完成后，其对应的执行上下文将会从执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文。

```
function first() {  
  console.log('1');  
  second();  
  console.log('2');  
}

function second() {  
  console.log('3');  
}

first();  
console.log('4');
```

当上述代码在浏览器中加载时，JavaScript 引擎会创建一个全局执行上下文并且将它推入当前的执行栈。当调用 `first()` 函数时，JavaScript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。

当在 `first()` 函数中调用 `second()` 函数时，Javascript 引擎为该函数创建了一个新的执行上下文并将其推到当前执行栈的顶端。当 `second()` 函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到当前执行栈的下一个执行上下文，即 `first()` 函数的执行上下文。

当 `first()` 函数执行完成后，它的执行上下文从当前执行栈中弹出，上下文控制权将移到全局执行上下文。一旦所有代码执行完毕，Javascript 引擎把全局执行上下文从执行栈中移除。



### 字符串的方法

字符串也具备数组的部分特性

1. length

   ```
   str.length 可以获取字符串的长度。需要注意的是，空格也算是一个字符。
   'ddh dhek'.length  => 8
   ```

2. 通过“[]”可以获得字符串中的某个字符

   ```
   let str = 'sadbnsdasd';
   str[1] => a
   ```

   

###### split()

split()方法使用指定的分隔符字符串将一个string分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

语法：

```
let result = str.split(sep,limit)
```

参数sep：从该参数指定的地方分割。如果在str中查询不到或不写分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。

参数limit：可选。该参数可指定返回的数组的最大长度。如果设置了该参数，返回的子串不会多于这个参数指定的数组。如果没有设置该参数，整个字符串都会被分割，不考虑它的长度。

返回值result： 返回源字符串以分隔符出现位置分隔而成的一个数组。

```
let str = "a b c d e f g";
console.log(str.split());
console.log(str.split(" "));
console.log(str.split(" ", 3));
```

```
let str = "bacadae";
console.log(str.split('a'))
```

```
let str = "abacadae";
console.log(str.split('a'))
```

```
let str = "bacadaea";
console.log(str.split('a'))
```

```
let str = "a";
console.log(str.split('a'))
```

```
let str = "bacadae";
console.log(str.split('af'))
```

描述：

- 找到分隔符后，将其从字符串中删除，并将子字符串的数组返回。
- 如果没有找到或者省略了分隔符，则该数组包含一个由整个字符串组成的元素。
- 如果分隔符为空字符串，则将str转换为字符数组。
- 如果分隔符出现在字符串的开始，则以空字符串开头。
- 如果分隔符出现在字符串的末尾，则以空字符串结尾。
- 如果分隔符出现在字符串的开始和结尾，则以空字符串开头和结尾。因此，如果字符串仅由一个分隔符实例组成，则该数组由两个空字符串组成。



###### indexOf()

`indexOf()` 方法返回调用它的string中第一次出现的指定值的索引，从 `fromIndex` 处进行搜索。如果未找到该值，则返回 -1。

语法：

```
let result = str.indexOf(searchValue,fromIndex);
```

参数searchValue： 要被查找的字符串值。注意： 如果没有提供确切地提供字符串，searchValue 会被强制设置为 `"undefined"`， 然后在当前字符串中查找这个值。例如：`'undefined'.indexOf()` 将会返回0，因为 `undefined` 在位置0处被找到，但是 `'undefine'.indexOf()` 将会返回 -1 ，因为字符串 `'undefined'` 未被找到。

参数fromIndex：数字表示开始查找的位置。可以是任意整数，默认值为 0。注意：  `fromIndex` 的值小于 0，那么查找从 0开始； `fromIndex` 的值大于或等于 `str.length` ，那么结果会直接返回 `-1` 。

返回值： 查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 `-1`。



###### includes()

`includes()` 方法用于判断一个字符串是否包含在另一个字符串中，返回 true 或 false。

注意：

- 参数和indexOf()方法一致
- 返回值是true(包含)和false(不包含)
- 区分大小写。

 



###### trim()

`trim()` 方法会从一个字符串的两端删除空白字符。

语法：

```
let result = str.trim()
```

返回值result： 一个代表调用字符串两端去掉空白的新字符串。

注意： `trim()` 方法返回一个从两头去掉空白字符的字符串，并不影响原字符串本身。

```
let str = '   foo  ';
console.log(str.trim()); // 'foo'
```





###### substring()

`substring() `方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。

语法：

```
let result = str.substring(indexStart,indexEnd)
```

参数indexStart： 需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。

参数indexEnd：可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

返回值result：包含给定字符串的指定部分的新字符串。

注意： 

- 如果任一参数小于 0 或为NaN,则被当作 0。

- 如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数调换了一样。

  ```
  let str = 'abcdefg';
  console.log(str.substring(0,3));
  console.log(str.substring(3,0));
  console.log(str.substring(3,NaN));
  console.log(str.substring(-2,NaN));
  console.log(str.substring(-2,3));
  ```



###### slice()

`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

同数组的slice()方法



###### toLowerCase()

`toLowerCase()` 会将调用该方法的字符串值转为小写形式，并返回.

语法： 

```
let result = str.toLowerCase()
```

返回值result： 一个新的字符串，表示转换为小写的调用字符串。

```
console.log('ABCDefFHG'.toLowerCase())
```



###### toUpperCase()

`toUpperCase()` 方法将调用该方法的字符串转为大写形式并返回

语法： 

```
let result = str.toUpperCase()
```

返回值result： 一个新的字符串，表示转换为大写的调用字符串。

```
console.log('ABCDefFHG'.toUpperCase())
```



###### substr()

未来将可能会被移除掉,使用 `substring()` 替代它。



###### concat()

`concat()` 方法将一个或多个字符串与原字符串连接合并，形成一个新的字符串并返回,如果参数不是字符串类型，它们在连接之前将会被转换成字符串。

语法：

```
let result = str.concat(str1,str2,str3,...);
```

```
let str = '大家好, '
console.log(str.concat('我是','渣渣辉'))
```

由于性能方面的问题，使用 + 和 +=来替代它。



### 对象

对象（object）是 JavaScript 语言的核心概念，也是最重要的数据类型。

什么是对象？简单说，对象就是一组“**键值对**”（key-value）的集合，是一种**无序**的复合数据集合。

```
let obj = {
  foo: 'Hello',
  bar: 'World'
};
```

上面代码中，大括号就定义了一个对象，它被赋值给变量`obj`，所以变量`obj`就指向一个对象。该对象内部包含两个键值对（又称为两个“成员”），第一个键值对是`foo: 'Hello'`，其中`foo`是“键名”（成员的名称），字符串`Hello`是“键值”（成员的值）。键名与键值之间用**冒号分隔**。第二个键值对是`bar: 'World'`，`bar`是键名，`World`是键值。两个键值对之间用**逗号分隔**。



###### 键名

对象的所有键名都是**字符串**，所以加不加引号都可以。上面的代码也可以写成下面这样。

```
let obj = {
  'foo': 'Hello',
  'bar': 'World'
};
```

如果键名是数值，会被自动转为字符串。

```
let obj = {
  1: 'a',
  3.2: 'b',
  1e2: true,
  1e-2: true,
  .234: true,
  0xFF: true
};

// obj中键名自动转换等效于
// Object {
//   1: "a",
//   3.2: "b",
//   100: true,
//   0.01: true,
//   0.234: true,
//   255: true
// }
// 所有键名虽然看上去像数值，实际上都被自动转成了字符串。
```

如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

```
// 报错
let obj = {
  1p: 'Hello World'
};

// 不报错
let obj = { // 三个键名都不符合标识名的条件，所以必须加上引号。
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```

对象的每一个键名又称为“**属性**”（property），它的“键值”可以是**任何数据类型**。

如果一个属性的值为**函数**，通常把这个属性称为“**方法**”，它可以像函数那样调用。

```
let obj = {
  a: function (x) {
    return 2 * x;
  }
};

obj.a(1) // 2
```

属性可以动态创建，不必在对象声明时就指定。

```
let obj = {};
obj.foo = 123;
console.log(obj.foo) // 123
```

上面代码中，直接对`obj`对象的`foo`属性赋值，结果就在运行时创建了`foo`属性。





###### 属性的操作

读取属性：

读取对象的属性，有两种方法，一种是使用点运算符，还有一种是使用中括号运算符(也叫方括号运算符)。

```
let obj = {
  p: '嘿嘿嘿'
};

obj.p // "嘿嘿嘿"
obj['p'] // "嘿嘿嘿"
```

注意，

- 如果使用中括号，键名必须放在引号里面，否则会被当作**变量**处理。

```
let foo = 'bar';

let obj = {
  foo: 1,
  bar: 2
};

obj.foo  // 1
obj[foo]  // 2
```

- 中括号内部还可以使用表达式。

  ```
  let obj = {
    foo: 1,
    bar: 2
  };
  console.log(obj['fo' + 'o']); // 1
  ```



###### 属性的赋值

点运算符和方括号运算符，不仅可以用来读取值，还可以用来赋值。

```
let obj = {};

obj.foo = '1';
obj['bar'] = '2';
```



###### 对象的方法

Object.keys()

获取对象所有的属性，返回一个数组

```
let obj = {
  foo: 1,
  bar: 2
};
Object.keys(obj);  // ['foo', 'bar']
Object.keys(obj).forEach(item => {
    // console.log(item);   
    console.log(obj[item]);
    console.log(obj.item); //  undefined undefined 
})
```



for...in循环:

`for...in`循环用来遍历一个对象的全部属性。

```
var obj = {a: 1, b: 2, c: 3};

for (let i in obj) {
  console.log(i);
}
```









### 扩展

###### typeof

typeof可以检测基本类型包括 undefined, string, number, boolean，但是对于检测对象就不靠谱了。不只是Array,javascript中的对象,包括 Date, String, Boolean, Number, Object, Function, Array, RegExp, Error 使用typof只会返回 “object”。但是typeof却可以用来检测一个值是否是函数。

```
typeof function () {}   =>   'function'
typeof null  => object
typeof []    => object
typeof {}    => object
```

原则上说,instanceof Function也可以进行这种需求的检测。貌似写法还更加优雅，但是,浏览器有一个怪癖:每一个框架和窗口都有它自己的全局变量。因此,如果你将某个框架中的对象传到另一个框架中,instanceof就不能正常工作了,因为这两个框架有着不同的构造函数。这就是为什么ES6中会有Array.isArray()方法的原因。

更有趣的是：

```
typeof new Number(123); //'object'
typeof Number(123); // 'number'

typeof new Boolean(true); //'object'
typeof Boolean(true); // 'boolean'

typeof new String(123); // 'object'
typeof String(123); // 'string'
```

当数据使用了new关键字和包装对象以后，数据都会变成`Object`类型，而不使用new关键字时，Number()、Boolean()和String()被当做普通函数，把任何类型的数据转换为number、boolean和string类型







###### IIFE

除了使用()运算符之外，！，+，-，=等运算符都能起到立即执行的作用,这些运算符的作用就是将匿名函数或函数声明转换为函数表达式。

```
!function(i){
  console.log(100);
}();
-function(i){
  console.log(100);
}();
+function(i){
  console.log(100);
}();
let fn = function(i){
  console.log(100);
}();
```



###### 对象

1. delete 命令

   `delete`命令用于删除对象的属性，删除成功后返回`true`。

   ```
   let obj = { foo: 1 };
   Object.keys(obj) // ["foo"]
   
   delete obj.foo // true
   obj.foo // undefined
   Object.keys(obj) // []
   ```

   上面代码中，`delete`命令删除对象`obj`的`foo`属性。删除后，再读取`foo`属性就会返回`undefined`，而且`Object.keys`方法的返回值也不再包括该属性。

   注意，删除一个不存在的属性，`delete`不报错，而且返回`true`。

   ```
   let obj = { foo: 1 };
   delete obj.bar // true
   ```

   上面代码中，对象`obj`并没有`bar`属性，但是`delete`命令照样返回`true`。因此，不能根据`delete`命令的结果，认定某个属性是存在的。

   只有一种情况，`delete`命令会返回`false`，那就是该属性存在，且不得删除。

   ```
   let obj = Object.defineProperty({}, 'foo', {
     value: 123,
     configurable: false
   });
   
   obj.foo // 123
   delete obj.foo // false
   ```

   上面代码之中，对象`obj`的`p`属性是不能删除的，所以`delete`命令返回`false`。

2. in 运算符

   `in`运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回`true`，否则返回`false`。

   ```
   let obj = { foo: 1 };
   'foo' in obj // true
   ```

3. `with`语句

   ```
   with语句的语法如下：
   ```

   ```
   with (对象) {
     语句;
   }
   ```

   它的作用是操作同一个对象的多个属性时，提供一些书写的方便。

   ```
   let obj = {
     foo: 1,
     bar: 2,
   };
   with (obj) {
     foo = 4;
     bar = 5;
   }
   // 等同于
   obj.foo = 4;
   obj.p2 = 5;
   // obj 为 { p1: 4, p2: 5 }
   ```

   注意，如果`with`区块内部有变量的赋值操作，必须是当前对象已经存在的属性，否则会创造一个当前作用域的全局变量。

   ```
   let obj = {};
   with (obj) {
     foo = 4;
     bar = 5;
   }
   
   obj.foo // undefined
   foo // 4
   ```

   上面代码中，对象`obj`并没有`foo`属性，对`foo`赋值等于创造了一个全局变量`foo`。正确的写法应该是，先定义对象`obj`的属性`foo`，然后在`with`区块内操作它。







