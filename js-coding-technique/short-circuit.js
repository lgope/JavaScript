// Longhand:

// if (
//   variable1 !== null ||
//   variable1 !== undefined ||
//   variable1 !== 'something'
// ) {
//   let variable2 = variable1;
// }

// Shorthand:
// const variable2 = variable1 || 'new';

// example

let variable1;
let variable2 = variable1 || 'love js';
console.log(variable2 === 'love js'); // prints true

variable1 = 'foo';
variable2 = variable1 || 'love js';
console.log(variable2); // prints foo
