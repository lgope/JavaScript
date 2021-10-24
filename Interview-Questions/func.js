// what is output?
const foo = () => {
  let a = b = 10;
  a++;
  return a
}

foo();

console.log(a);
console.log(b);


// output
function createIncrement() {
	let count = 0;

	function increment() {
		count++;
	}

	let message = `Count is ${count}`;
	function log() {
		console.log(message);
	}

	return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();

log();

// Console sequence output?
function run () {
  const promise = new Promise((resolve) => {
    resolve('promise');
  })

  setTimeout(() => {
   console.log('setTimeout'); 
  });

  promise.then(res => console.log(res))

  console.log('log');
}

run();

// How does the Javascript interprets the following code?
console.log(x);
var x = 100;
