// Longhand:
const a = 25;
let answer;

if (a > 11) {
  answer = 'greater than 10';
} else {
  answer = 'less than 10';
}

// Shorthand:
const answer = a > 10 ? 'greater than 10' : 'less than 10';
console.log(answer);

// We can also try this
const answer =
  a > 10 ? 'greater than 10' : a < 5 ? 'less than 5' : 'between 5 and 10';
console.log(answer);
