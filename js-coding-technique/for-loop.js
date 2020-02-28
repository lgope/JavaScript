// Longhand:

const fruits = ['banana', 'mango', 'avocado', 'apple'];
for (let i = 0; i < fruits.length; i++) {
  // something
}

// Shorthand:

for (let fruit of fruits) {
  // something
}

// to access just the index
// for (let index in fruits)

// example 1
const obj = { continent: 'Asia', country: 'Bangladesh', city: 'Dhaka' };
for (let key in obj) console.log(key); // output: continent, country, city

// Shorthand for Array.forEach:
function consoleArrayElements(element, index, array) {
  console.log(`arr[ ${index} ] = ${element}`);
}

let arr = [2, 4, 5, 8, 9];
arr.forEach(consoleArrayElements);
// arr[0] = 2
// arr[0] = 4
// arr[1] = 5
// arr[1] = 8
// arr[2] = 9

// Bad:
var i;
for (i = 0; i < arr.length; i++) {
  // something....
}

// Better Code:
var i;
var len = arr.length;
for (i = 0; i < len; i++) {
  // something....
}
