const fixNum = (num, n = 2) => Number.parseFloat(num).toFixed(n);

console.log(fixNum(123.456));
// expected output: "123.46"

console.log(fixNum(0.004));
// expected output: "0.00"

console.log(fixNum('1.23e+5', 4));
// expected output: "123000.0000"
