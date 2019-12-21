const numbers = [1, 3, 6];
const addTwo = async (num) => num + 2;
const numbersPlusTwo = numbers.map(addTwo);
console.log(numbersPlusTwo);
