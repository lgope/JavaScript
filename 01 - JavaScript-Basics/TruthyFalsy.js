/*
 * Truthy and Falsy values and equality operators
 */


// falsy values: undefined, null, 0, '', NaN (Not a Number)
// truthy values: NOT falsy values

var height; // declare the height variable
height = 23; // initialise the height variable

if (height || height === 0) { // '===' no change
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
}

// Equality operators
if (height === '23') {
    console.log('The == operator does type coercion!');
}