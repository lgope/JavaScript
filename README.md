# JavaScript
*JavaScript, often abbreviated as JS, is a programming language that conforms to the ECMAScript specification. JavaScript is high-level, often just-in-time compiled, and multi-paradigm. It has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions. The of this repo is to save my js programs. Basics of JavaScript. Beginner level.*

## Table of Contents

  1. [Important Methods](#methods)
  
## Methods
>  Most important javascript build in methods

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