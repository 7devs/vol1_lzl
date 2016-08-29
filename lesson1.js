var a = 'This is a string';
var b = 0;
var c = true;
var d = {name: 'LZL', age: 28};
var e = undefined;
var f = null;

a + b // "This is a string0"
b++ // 0
b // 1
++b // 2
b // 2
d.age % b // 0
e == f // true
e === f // false
c && b // 2
c && (b < d.age) // true
e || f ? a : b // 2
