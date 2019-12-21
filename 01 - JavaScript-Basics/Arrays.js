// Initialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[2]); // Jane
console.log(names.length); // 3

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'designer', false];

john.push('blue'); // last input
john.unshift('Mr.'); // first input
console.log(john);

john.pop(); // last remove
john.pop();
john.shift(); // first remove
console.log(john);

console.log(john.indexOf(23)); // -1 [because there is no such index.]

// Ternary Operator
var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner); // John IS a designer