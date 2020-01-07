// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

console.log(dragons.includes('John')); // false

// #2) Checking if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const Minidragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

Minidragons.filter(name => name.includes('John')); // ['Johnathan']

// #3) Function that calulates the power of 2 of a number entered as a parameter
const power = num => num ** 2;

console.log(power(2)); // 4
