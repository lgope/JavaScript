// Longhand

// joining arrays
const odd = [1, 5, 9];
const nums = [2, 4, 6].concat(odd);

// cloning arrays
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = arr.slice();

// Shorthand:

// joining arrays
const odd = [1, 5, 9];
const nums = [2, 4, 6, ...odd];
console.log(nums); // [ 2, 4, 6, 1, 3, 5 ]

// cloning arrays
const arr = [1, 2, 3, 4, 5, 6];
const arr2 = [...arr];

// cloning arrays 1
const odd = [1, 5, 9];
const nums = [2, ...odd, 4, 6, 11, 17];

// combine the spread operator with ES6 destructuring notation:
const { a, b, ...z } = { a: 1, b: 2, c: 5, d: 6 };
console.log(a); // 1
console.log(b); // 2
console.log(z); // { c: 5, d: 6 }
