// The reduce() method executes a reducer function (that we provide) on each element of the array, resulting in single output value.

const array = [1, 2, 3, 4, 5];
const reducerFunc = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4 + 5
console.log(array.reduce(reducerFunc));
// expected output: 15

// 5 + 1 + 2 + 3 + 4 + 5
console.log(array.reduce(reducerFunc, 5));
// expected output: 20
