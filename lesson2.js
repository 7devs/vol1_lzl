// demo javascript
var a = 123;
var b = '123';
console.log(a, b);

if (a === 0) {
  console.log(b);
} else {
  console.log(a);
  // alert(a);
}

for (var i = 0; i < 10; i++) {
  if (i === 8) {
    break;
  }

  if (i === 2) {
    continue;
  }

  console.log('Yeah!', i);
}

var i = 3;
while (i > 0) {
  i--;
  console.log(i);
}


var animal = 'cat';
switch (animal) {
  case 'cat':
    console.log('I am a cat 🐱');
    break;
  case 'dog':
    console.log('I am a dog 🐶');
    break;
  case 'person':
  default:
    console.log('I am not an animal ');
    break;
}


function func1() {
  console.log('...');
}

function func2(str) {
  console.log('str is', str);
}

var func3 = function (...args) {
  console.log(args, func5());
  console.log('args.length ===', args.length);
}

var func4 = new Function('return 3;');

function func5() {
  return 4;
}

func1();
func2('some texts');
func3(1, 2, func4());
// alert(func4());
// alert(func5);

function Cat(name) {
  this.name = name;

  this.getMyName = function () {
    return this.name;
  }

  this.say = function () {
    return 'Miao~';
  }
}

var cat1 = new Cat('lucy');
console.log(cat1.getMyName());
console.log(cat1.say());
