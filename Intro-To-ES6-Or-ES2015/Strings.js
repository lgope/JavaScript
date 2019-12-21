let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;


function calcAge(year) {
    return 2016 - year;
}


// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');


// ES6
// `` string template
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}. Today, he is ${calcAge(yearOfBirth)} years old.`); 


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('j')); // false
console.log(n.endsWith('Sm')); // false
console.log(n.includes('oh')); // true
console.log(`${firstName} `.repeat(5)); // John John John John John 