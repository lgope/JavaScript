// for loop
for (var i = 1; i <= 20; i += 2) {
  console.log(i);
}

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
  console.log(john[i]);
}

// For In Loop (The JavaScript for/in statement loops through the properties of an object:)
console.log('\nFor In Loop');

const object = { name: 'Lakshman', age: 22, eye: 'blue' };
console.log('For In Loop');
for (const x in object) {
  console.log(`${x}: ${object[x]}`);
}

// The For/Of Loop (The for...of statement creates a loop iterating over iterable objects)
console.log('\nFor of Loop');

for (const person of john) {
  console.log(person);
}

// forEach()
console.log('\nforEach');
john.forEach(el => console.log(el));

// While loop
console.log('\nWhile Loop');

var i = 0;
while (i < john.length) {
  console.log(john[i]);
  i++;
}
