var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
} else {
    console.log(firstName + ' will hopefully marry soon :)'); // will execute
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!'); // execute
} else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var massMark = 78; // kg
var heightMark = 1.69; // meters
var massJohn = 92;
var heightJohn = 1.95;

var BMIMark = massMark / (heightMark * heightMark); // 27.309968138370508
var BMIJohn = massJohn / (heightJohn * heightJohn); // 24.194608809993426

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s.'); // true
} else {
    console.log('John\'s BMI is higher than Marks\'s.'); // false
}