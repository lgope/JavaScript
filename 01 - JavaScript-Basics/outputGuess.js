'use strict';
function logThis() {
  this.desc = 'logger';
  console.log(this); // { desc: 'logger' }
}

new logThis();

// '''''''''''''''''''''''''''''
var Storm = function () {};
Storm.prototype.precip = 'rain';
var WinterStorm = function () {};
WinterStorm.prototype = new Storm();
WinterStorm.prototype.precip = 'snow';
var bob = new WinterStorm();
console.log(bob.precip); // snow

// lllllllllllllllllllllllllllllll
const obj = {
    a: 1,
    b: 2,
    c: 3,
};

const obj2 = {
    ...obj,
    a: 0,
};

console.log(obj2.a, obj2.b); // 0 2

// llllllllllllllllllllllllllll
console.log(sum(10, 20));  // 30 ReferenceError
// console.log(diff(10, 20));
    function sum(x, y) {
        return x + y;
    }
    let diff = function(x, y) {
        return x - y;
    }



// lllllllllllllllllllllll
function sayHello() {
    console.log("hello");
}

var func = sayHello;
func.answer = 42;

console.log(sayHello.answer); // 42


var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';

console.log(a.length);

var a;
var b = (a=3) ? true: false

let arr = [];

console.log(arr);
console.log([] ==[]);

class X {
    get Y() {return 42;}
}


var x = new X();

console.log(x.Y);



var v = 1;
var f1 = function () {
    console.log(v);   
}

var f2 = function () {
   var v = 2;
   f1();
}

f2();
