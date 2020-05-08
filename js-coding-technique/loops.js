const mil = 1000000;
const arr = Array(mil);

console.time('⏲️');

for (let i = 0; i < mil; i++) {} // 1.6ms

for (const v of arr) {
} // 11.7ms

arr.forEach(v => v); // 2.1ms

for (let i = mil; i > 0; i--) {} // 1.5ms

console.timeEnd('⏲️');

const equine = { unicorn: '🦄', horse: '🐴', zebra: '🦓' };

for (const key in equine) {
  // Filters out properties inherited from prototype
  if (equine.hasOwnProperty(key)) {
    console.log(equine[key]);
  }
}

// Unwrap the the Values

for (const val of Object.values(equine)) {
  console.log(val);
}

// Create a Map
const equine = new Map(Object.entries(equine));

for (const v of equine.values()) {
  console.log(v);
}

const equine = [
  ['unicorn', '🦄'],
  ['horse', '🐴'],
  ['zebra', '🦓'],
];

// 😒 Meh Code
for (const arr of equine) {
  const type = arr[0];
  const face = arr[1];
  console.log(`${type} looks like ${face}`);
}

// 🤯 Destructured Code
for (const [type, face] of equine) {
  console.log(`${type} looks like ${face}`);
}

///////////////
arr[Symbol.iterator] = function () {
  let i = 0;
  let arr = this;
  return {
    next: function () {
      if (i >= arr.length) {
        return { done: true };
      } else {
        const value = arr[i] + '🙉';
        i++;
        return { value, done: false };
      }
    },
  };
};

////////////////////////////////

const faces = ['😀', '😍', '🤤', '🤯', '💩', '🤠', '🥳'];

// Transform values
const withIndex = faces.map((v, i) => `face ${i} is ${v}`);

// Test at least one value meets a condition
const isPoopy = faces.some(v => v === '💩');
// false

// Test all values meet a condition
const isEmoji = faces.every(v => v > 'ÿ');
// true

// Filter out values
const withoutPoo = faces.filter(v => v !== '💩');

// Reduce values to a single value
const pooCount = faces.reduce((acc, cur) => {
  return acc + (cur === '💩' ? 1 : 0);
}, 0);
console.log(pooCount);

// Sort the values
const sorted = faces.sort((a, b) => a < b);
