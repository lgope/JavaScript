/**
 * Garbage collection algorithms
 * - Reference counting algorithm
 * - Mark and sweep algorithm
 */

let obj = { a: 10 };
obj = null;

function test() {
  let testObj = {};
  let testObj2 = {};

  //   Circular dependency
  testObj.key = testObj2;
  testObj2.key = testObj;

  return "blah";
}

test();
