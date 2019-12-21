var firstName = 'John';
var age = 14;

// Ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.') : console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// Alternative way of Ternary operator
if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}