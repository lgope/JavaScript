// The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

const array = [1, 4, 9, 16, 15, 48];

// pass a function to map
const map1 = array.map(ar => ar * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

function myFunction(num) {
  return num * 10;
}

let newArray = array.map(myFunction);
console.log(newArray);
