// Lexical scoping
function init() {
  let name = 'Google Chrome'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();

// Closure
function makeFunc() {
  let name = 'Google Chrome';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

let myFunc = makeFunc();
myFunc();

/** Closure Scope Chain
 * Local Scope (Own scope)
 * Outer Functions Scope
 * Global Scope
 */

// global scope
let e = 10;
function sum(a) {
  return function(b) {
    return function(c) {
      // outer functions scope
      return function(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

console.log(sum(1)(2)(3)(4)); // 20

// We can also write without anonymous functions:

// global scope
let e = 10;
function sum(a) {
  return function sum2(b) {
    return function sum3(c) {
      // outer functions scope
      return function sum4(d) {
        // local scope
        return a + b + c + d + e;
      };
    };
  };
}

let s = sum(1);
let s1 = s(2);
let s2 = s1(3);
let s3 = s2(4);
console.log(s3); // 20
