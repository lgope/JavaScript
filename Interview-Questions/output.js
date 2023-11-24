// 1) What is the output of 10+20+"30" in JavaScript?
//Ans: 3030 because 10+20 will be 30. If there is numeric value before and after +, it treats as binary + (arithmetic operator).

// 2) What is the output of "10"+20+30 in JavaScript?
// Ans: 102030 because after a string all the + will be treated as string concatenation operator (not binary +).

// 3) Output?
// Syncronous
[1, 2, 3, 4].forEach((i) => {
  console.log(i);
});

// Asynchronous
function asyncForEach(array, cb) {
  array.forEach(() => {
    setTimeout(cb, 0);
  });
}

asyncForEach([1, 2, 3, 4], (i) => {
  console.log(i);
});

// 4) Output? And explain (hint: Octal)
console.log(016);

console.log(017);

console.log(026);

console.log(027);

// 5) Output?
console.log([..."Hello"]);

// OUTPUT
function sum(a, b) {
  a = 10;
  return [a + b, arguments[0] + arguments[1]];
}

// in "use strict" => [12, 3]
// in normal mood => [12, 12]
console.log(sum(1, 2));

// Event Propagation
// event.currentTaget.tagName
// this.tagName

//  sameValuZero algorithm
const sameValueZero = (a, b) => {
  if (a === b || (Number.isNaN(a) && Number.isNaN(b))) {
    return true;
  }

  return false;
};

// Output
// ==, ===, object.is, sameValuZero algorithm
const array = [NaN];

const result = array.includes(NaN);
console.log(result); // True: why? => array.includes follows sameValueZero algorithm
