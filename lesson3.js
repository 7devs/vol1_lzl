var str = 'hello node js';
var arr = [1, 2, 3, 4];

var log = console.log;

log(arr); // [1, 2, 3, 4]
log('concat:', arr.concat(arr)); // [1, 2, 3, 4, 1, 2, 3, 4] new
log(arr); // [1, 2, 3, 4]
log('join:', arr.join()); // '1,2,3,4' new
log(arr); // [1, 2, 3, 4]
log('pop:', arr.pop()); // 4 changed
log(arr); // [1, 2, 3]
log('push:', arr.push(str)); // 4 changed
log(arr); // [1, 2, 3, "hello node js"]
log('reverse:', arr.reverse()); // ["hello node js", 3, 2, 1] changed
log(arr); // ["hello node js", 3, 2, 1]
log('shift:', arr.shift()); // 'hello node js' changed
log(arr); // [3, 2, 1]
log('slice:', arr.slice(1)); // [2, 1] new
log(arr); // [3, 2, 1]
log('sort:', arr.sort()); // [1, 2, 3] changed
log(arr); // [1, 2, 3]
log('splice:', arr.splice(2, 1, 4)); // [1, 2, 4] new
log(arr); [1, 2, 4]

// new = [concat, join, slice, splice]; 使用这四个方法返回的是新的数组，对原数组不做改变。
// changed = [pop, push, reverse, shift, sort]; 而这五个则直接对原数组进行操作。
