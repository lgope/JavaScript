// 1) What is the output of 10+20+"30" in JavaScript?
//Ans: 3030 because 10+20 will be 30. If there is numeric value before and after +, it treats as binary + (arithmetic operator).
  
// 2) What is the output of "10"+20+30 in JavaScript?
// Ans: 102030 because after a string all the + will be treated as string concatenation operator (not binary +).

// 3) Output?
// Syncronous
[1, 2, 3, 4].forEach((i) => {
  console.log(i)
})

// Asynchronous
function asyncForEach(array, cb) {
  array.forEach(() => {
    setTimeout(cb, 0);
  })
}

asyncForEach([1, 2, 3, 4], (i) => {
  console.log(i);
})
