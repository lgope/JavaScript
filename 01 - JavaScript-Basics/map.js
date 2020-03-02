let sayings = new Map();
sayings.set('dog', 'woof');
sayings.set('cat', 'meow');
sayings.set('elephant', 'toot');
sayings.size; // 3
sayings.get('fox'); // undefined
sayings.has('bird'); // false
sayings.delete('dog');
sayings.has('dog'); // false

for (let [key, value] of sayings) {
  console.log(key + ' goes ' + value);
}
// "cat goes meow"
// "elephant goes toot"

sayings.clear();
sayings.size; // 0

let numbers = [4, 9, 20, 25, 29, 44, 88, 99];
let num = numbers.map(Math.sqrt);

console.log(num);

let nums = [4, 9, 20, 25, 29, 44, 88, 99];
let newarray = numbers.map(myFunction);

function myFunction(num) {
  return num * 10;
}

console.log(newarray);
