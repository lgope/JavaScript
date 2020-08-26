// 1
function countFuction(num) {
  console.log(num);
  if (num <= 0) {
    return;
  }

  countFuction(num - 1);
}

countFuction(8);

// 2
function anotherAountFuction(num) {
  console.log(num);
  if (num > 0) {
    anotherAountFuction(num - 1);
  }
}

anotherAountFuction(8);

//   sum of digits
function sumOfDigits(num) {
  if (num == 0) {
    return 0;
  }
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}

let sum = sumOfDigits(324);
console.log(`res = ${sum}`);

// factorial
var factorial = function (number) {
    // break condition
  if (number <= 0) {
    return 1;
  }
   
  // block to execute
  return number * factorial(number - 1);
};

console.log(`Factorial = ${factorial(9)}`);
