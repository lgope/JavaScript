/**
 * QUESTION 01
 * OUTPUT
 */

let obj = {
  a: 10,
  b: 20
};

let obj2 = {
  a: 10,
  b: 20
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
      grade: "A+"
    }
  },
  {
    Subeject: "Physics",
    result: {
      point: 85,
      grade: "A+"
    }
  },
  {
    Subeject: "Math",
    result: {
      point: 89,
      grade: "A+"
    }
  }
];

let totalRes = 0;
EXAM.map(subject => (totalRes += subject.result.point));

console.log(totalRes);
console.log((totalRes / EXAM.length).toFixed(2));

let res = EXAM.reduce((accumulator, currentValue) => accumulator + currentValue.result.point, 0);
console.log(res);

/**
 * QUESTION 06
 *
 * Merge two objects in one object
 */

let obj1 = {
  a: 10,
  b: 20
};

let obj2 = {
  c: 30,
  d: 20
};

obj1 = { ...obj1, ...obj2 };
console.log(obj1);


// more test
const a = [1, 2, 5, 7, 9];
const b = [2, 5, 7, 12, 100];

// const c = [...a, ...b];

const c = a.concat(b).sort((a, b) => a > b)

console.log(c)


const obj = {
  x: 1,
  getX() {
    const inner = function() {
        console.log(this.x); 
      }

      inner.bind(this)();
  }
}

obj.getX();

const arrayTotal = a.reduce((t, i) => t+i);

console.log(arrayTotal)


// OUTPUT
const arr = [1, 2, 3, 4, 5];

arr.push(arr.push(arr.push(arr.pop())))

console.log(arr);
