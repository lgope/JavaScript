// 1) What is the output of 10+20+"30" in JavaScript?
//Ans: 3030 because 10+20 will be 30. If there is numeric value before and after +, it treats as binary + (arithmetic operator).

// 2) What is the output of "10"+20+30 in JavaScript?
// Ans: 102030 because after a string all the + will be treated as string concatenation operator (not binary +).

// 3) Output?
// Syncronous
[1, 2, 3, 4].forEach((i) => {
  console.log(i);
});

// Asynchronous
function asyncForEach(array, cb) {
  array.forEach(() => {
    setTimeout(cb, 0);
  });
}

asyncForEach([1, 2, 3, 4], (i) => {
  console.log(i);
});

// 4) Output? And explain (hint: Octal)
console.log(016);

console.log(017);

console.log(026);

console.log(027);

// 5) Output?
console.log([..."Hello"]);

// OUTPUT
function sum(a, b) {
  a = 10;
  return [a + b, arguments[0] + arguments[1]];
}

// in "use strict" => [12, 3]
// in normal mood => [12, 12]
console.log(sum(1, 2));

// Event Propagation
// event.currentTaget.tagName
// this.tagName

//  sameValuZero algorithm
const sameValueZero = (a, b) => {
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
    return true;
  }

  return false;
};

// Output
// ==, ===, object.is, sameValuZero algorithm
const array = [NaN];

const result = array.includes(NaN);
console.log(result); // True: why? => array.includes follows sameValueZero algorithm

// Output
const p = Promise.resolve("Hello");
p.then((val) => {
  console.log(val);
  return `${val} world`;
}).then((newVal) => {
  console.log("new ", newVal);
});

// Output => level => easy
function* counter() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const gen = counter();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Output
var y = 1;
if (function f() {}) {
  y += typeof f;
}

console.log(y);

// Output
var k = 1;
if (1) {
  eval(function foo() {});
  k += typeof foo;
}

console.log(k);

// Output
var k = 1;
if (1) {
  function foo() {}
  k += typeof foo;
}
console.log(k);

// Write a function that would allow you to do this 👉🏻 multiply(5)(6)

// Ans:
function multiply(a) {
  return function (b) {
    return a * b;
  };
}

multiply(5)(6);

// Explain what is callback function is and provide a simple example

function modifyArray(arr, callback) {
  arr.push(100);

  callback();
}

let arr = [1, 2, 3, 4, 5];

modifyArray(arr, () => {
  console.log("Array has been modified ", arr);
});

// Given a string, reverse each word in the sentence
const reverseBySeparator = (str, separator) =>
  str.split(separator).reverse().join(separator);

const str = "Welcome to this Javascript Guide!";
const reverseEntireSentence = reverseBySeparator(str, "");

const reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

console.log(reverseEntireSentence, reverseEachWord);

// Output
function foo(func) {
  return func.name;
}

console.log(foo(function myName() {}));

// Output
console.log((1 + 2, 3, 4));

console.log((2, 9 / 3, function () {}));

console.log((3, true ? 2 + 2 : 1 + 1));

// Output
function foo() {
  return 1, 2, 3, 4;
}
foo();

// Event Loop output test

function main() {
  console.log("A");
  setTimeout(function exec() {
    console.log("B");
  }, 0);
  runWhileLoopForNSeconds(3);
  console.log("C");
}
main();
function runWhileLoopForNSeconds(sec) {
  let start = Date.now(),
    now = start;
  while (now - start < sec * 1000) {
    now = Date.now();
  }
}
