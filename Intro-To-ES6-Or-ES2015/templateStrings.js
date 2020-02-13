console.log(`string text line 1
string text line 2`);

let a = 9;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);

let person = 'Lakshman';
let age = 28;

function myTag(strings, personExp, ageExp) {
  let str0 = strings[0]; // "That "
  let str1 = strings[1]; // " is a "

  let ageStr;
  if (ageExp > 99) {
    ageStr = 'centenarian';
  } else {
    ageStr = 'youngster';
  }

  return `${str0}${personExp}${str1}${ageStr}`;
}

let output = myTag`That ${person} is a ${age}`;

console.log(output);
