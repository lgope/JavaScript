// what is output?
const foo = () => {
  let a = b = 10;
  a++;
  return a
}

foo();

console.log(a);
console.log(b);
