# JavaScript
*JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. The of this repo is to save my js programs. Basics of JavaScript. Beginner level.*

## Table of Contents

  1. [Important Methods](#methods)
  
## Methods
>  Hello Javascript

<a name="typeof"></a><a name="1.1"></a>
- [1.1](#typeof) **typeof**: Returns the type.
 
 ```javascript
 console.log(typeof 44); // number

 console.log(typeof 'something'); // string 
 
 console.log(typeof true); // boolean
 
 let num = 12;
 console.log(typeof(num)); // number
 
 ```

<a name="toString"></a><a name="1.2"></a>
- [1.2](#toString) **toString**: Returns the string representation of the number's value.
 
 ```javascript
 let num = 10;
 let n = num.toString();
 
 console.log(typeof(num)); // number
 
 console.log(typeof(n)); // string
 ```

<a name="indexOf"></a><a name="1.3"></a>
- [1.3](#indexOf) **indexOf**: Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 
 ```javascript
 let str = "Hello world, welcome to the JS Universe.";
 console.log(str.indexOf("welcome")); // 13
 console.log(str.indexOf("wall")); // -1
 
 const fruits = ['Orange', 'Pineapple', 'Apple', 'Melon'];
 console.log(fruits.indexOf('Melon')); // 3
 
 console.log(fruits.indexOf('klkljkh')); // -1
 ```
 
<a name="lastIndexOf"></a><a name="1.4"></a>
- [1.4](#lastIndexOf) **lastIndexOf**: Returns the last index at which a given element can be found in the array, or -1 if it is not present.
 
 ```javascript 
 const fruits = ['Orange', 'Pineapple', 'Apple', 'Melon'];
 console.log(fruits.lastIndexOf('Melon')); // 3
 
 console.log(fruits.lastIndexOf('klkljkh')); // -1
 ```
 
 <a name="length"></a><a name="1.5"></a>
- [1.5](#length) **length**: Returns the number of characters or size in a string or array.
 
 ```javascript 
 const fruits = ['Orange', 'Pineapple', 'Apple', 'Melon'];
 console.log(fruits.length); // 4
 
 let str = "Hello world, welcome to the JS Universe.";
 console.log(str.length); // 40
 ```

  <a name="interview"></a><a name="1.6"></a>
- [1.6](#length) **Interview Qus**: Tricky JavaScript Interview Questions and Answers
 
 ```javascript 
// remove duplicates form and array
let arr = [1, 2, 2, 3, 4];

console.log([...new Set(arr)]);

// output test 1
console.log(5 < 6 < 7); // true // 5 < 6 => true => true < 7 => true = 1 => 1 < 7 => true

console.log(7 > 6 > 5); // false // 7 > 6 => true => true > 5 => true = 1 => 1 > 5 = false

console.log(Math.max()); // -Infinity lowest min number in js
console.log(Math.max(1, 2, 3, 4)); // 4


// obj
let profile = {
    name: 'Lakshman'
};

// Object.freeze(profile); // freeze don't allow insert and update
Object.seal(profile); // freeze don't allow insert, remove but allow update

profile.name = 'Gope';

console.log(profile);

// obj
let user = {
    name: 'Gope'
};

// age not allow any update but name does
Object.defineProperty(user, 'age', {
    value: 4,
    writable: false
})

user.name = 'Lakshman'
user.age = 5;

console.log(user); // TypeError: Cannot assign to read only property 'age' of object '#<Object>'
 ```
 
  <a name="rename"></a><a name="1.7"></a>
- [1.7](#rename) **rename**: Rename multiple files extentions at once by a command (Just for Win).
 
 ```javascript 
  Get-ChildItem *.css | Rename-Item -NewName { $_.name -Replace '\.css','.scss' }
 ```

  <a name="majority"></a><a name="1.8"></a>
- [1.8](#majority) **majority**: Find Majority Element.
  
```javascript
function majorityElement(arr) {
    let count = 0, candidate = null;

    for (let num of arr) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }

    return candidate;
}

// Time complexity: O(n)
// Space complexity: O(1)

const arr = [3, 2, 3, 4, 3, 1, 6, 6, 7, 8, 6, 9, 6];
console.log(majorityElement(arr)); // Output: 6
```
