/**
 * QUESTION 01
 * OUTPUT
 */

let obj = {
  a: 10,
  b: 20,
};

let obj2 = {
  a: 10,
  b: 20,
};

console.log(obj == obj2);
console.log(obj === obj2);

let obj3 = obj;

console.log(obj3 == obj);
console.log(obj3 === obj);

/**
 * QUESTION 02
 * OUTPUT
 */

var arr = [1, 2, 3, 4, 5];

for (var i = 0; i < arr.length; i++) {
  setTimeout(() => console.log(arr[i]), 500);
}

const arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  setTimeout(() => console.log(arr1[i]), 500);
}

/**
 * QUESTION 03
 * OUTPUT
 */

console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
Promise.resolve(console.log(4));

/**
 * QUESTION 04
 * How to compare two arrays
 */

let a1 = [1, 2, 3];
let a2 = [1, 2, 3];

console.log(a1 == a2);
console.log(JSON.stringify(a1) == JSON.stringify(a2));

/**
 * QUESTION 05
 * Calculate total point (using reduce) and avg result
 */

let EXAM = [
  {
    Subeject: "English",
    result: {
      point: 80,
      grade: "A+",
    },
  },
  {
    Subeject: "Physics",
    result: {
      point: 85,
      grade: "A+",
    },
  },
  {
    Subeject: "Math",
    result: {
      point: 89,
      grade: "A+",
    },
  },
];

let totalRes = 0;
EXAM.map((subject) => (totalRes += subject.result.point));

console.log(totalRes);
console.log((totalRes / EXAM.length).toFixed(2));

let res = EXAM.reduce(
  (accumulator, currentValue) => accumulator + currentValue.result.point,
  0
);
console.log(res);

/**
 * QUESTION 06
 *
 * Merge two objects in one object
 */

let obj1 = {
  a: 10,
  b: 20,
};

let obj2 = {
  c: 30,
  d: 20,
};

obj1 = { ...obj1, ...obj2 };
console.log(obj1);

// more test
const a = [1, 2, 5, 7, 9];
const b = [2, 5, 7, 12, 100];

// const c = [...a, ...b];

const c = a.concat(b).sort((a, b) => a > b);

console.log(c);

const obj = {
  x: 1,
  getX() {
    const inner = function () {
      console.log(this.x);
    };

    inner.bind(this)();
  },
};

obj.getX();

const arrayTotal = a.reduce((t, i) => t + i);

console.log(arrayTotal);

// OUTPUT
const arr = [1, 2, 3, 4, 5];

arr.push(arr.push(arr.push(arr.pop())));

console.log(arr);

// OUTPUT
const arrayOfOddNumbers = [1, 3, 5];
arrayOfOddNumbers[100] = 199;
console.log(arrayOfOddNumbers.length);

// OUTPUT
class MyClass extends (String, Array) {
  construct() {}
}

const a = new MyClass();

console.log(a instanceof Array); // true

// OUTPUT
["1101100000111110", "1101110100011111"]
  .map((s) => String.fromCharCode(parseInt(s, 2)))
  .reduce((acc, n) => acc + n, "");

// Preserve immutability of objects

const heroes = [
  { name: "Wolverine", family: "Marvel" },
  { name: "Batman", family: "DC Comics" },
];

const newHeroes = heroes.map((hero) => (hero.name = hero.name.toUpperCase()));

console.log(heroes);

// Right way
const newHeroes2 = heroes.map((hero) =>
  Object.assign({}, hero, { name: hero.name.toUpperCase() })
); // or return {...h, name: h.name.toUpperCase()};

console.log(heroes);

// What is the problem with sort() function? Why javascript introduced toSorted() function

/**
 * Ans: sort() function mutates the original array
 * toSorted() method takes an array and returns a new array with the elements sorted in ascending order. It does not mutate the original array. All undefined elements are sorted to the end of the array.
 * */

const arr = [1, 8, 6, 9, 7, 100, 400, 200];

const oldSortedArr = arr.sort((a, b) => a - b);

console.log(arr); // [1, 6, 7, 8, 9, 100, 200, 400] (mutated the original array)
console.log(oldSortedArr, arr); // [1, 6, 7, 8, 9, 100, 200, 400]

const newSortedArr = arr.toSorted((a, b) => a - b);

console.log(arr); // [1, 6, 7, 8, 9, 100, 200, 400] (does not mutated the original array)
console.log(newSortedArr); // [1, 6, 7, 8, 9, 100, 200, 400]

// Remove the duplicates item from an array without build in funcitons
const arr = [4, 1, 8, 5, 2, 1, 8, 4, 7, 5, 6, 9];

const removeDuplicates = (arrData) => {
  const obj = {};
  for (const item of arrData) {
    obj[item] = item;
  }

  return Object.values(obj);
};

console.log(removeDuplicates(arr));

// Write a program for array intersection (keep the only common items from two arrays) (without build in functions)

const arr = [1, 4, 5, 6, 9];
const arr1 = [2, 1, 7, 5, 9, 6];

const getCommonItems = (arrData, arrData1) => {
  const obj = {};
  const resArr = [];

  for (const item of arrData) {
    obj[item] = item;
  }

  for (const item1 of arrData1) {
    if (obj[item1]) resArr.push(item1);
  }

  return resArr;
};

console.log(getCommonItems(arr, arr1));

// Optional => using build in functions
const intersectedArr = arr.filter((item) => arr1.includes(item));
console.log(intersectedArr);
