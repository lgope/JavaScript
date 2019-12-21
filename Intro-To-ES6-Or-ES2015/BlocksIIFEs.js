// ES6
{
    const a = 1;
    let b = 2;
    var c = 4;
}

// console.log(a + b);

// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined

console.log(c); // 4



// ES5
(function () {
    var c = 4;
})();

console.log(c); // 4