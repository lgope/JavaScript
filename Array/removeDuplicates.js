const fruits = ['🥑', '🍊', '🍇', '🍏', '🍎', '🍑', '🍑'];

// way 1
console.log('way 1 ', fruits.reduce((uniqueArray, fruit) => {
  uniqueArray.indexOf(fruit) === -1 && uniqueArray.push(fruit);
  return uniqueArray;
}, []))

// way 2
console.log('way 2 ', fruits.filter((fruit, index) => fruits.indexOf(fruit) === index))

// way 3
console.log('way 3 ', [...new Set(fruits)])
