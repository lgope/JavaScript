// The slice() method returns a shallow copy of a portion of an array into a new array object selected from begin to end (end not included) where begin and end represent the index of items in that array. The original array will not be modified.

const array = [1, 2, 3, 4, 5];

const anotherArr = array.slice(1, 4);

console.log(anotherArr);

console.log(array.slice(2, 5));
