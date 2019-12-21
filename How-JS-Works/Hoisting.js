// functions
calculateAge(1965); // 51

function calculateAge(year) {
    console.log(2016 - year);
}


// retirement(1956);
var retirement = function (year) {
    console.log(65 - (2016 - year));
}


// variables
console.log(age); // Undefiened
var age = 23;

function foo() {
    console.log(age); // Udefined
    var age = 65;
    console.log(age); // 65
}


foo();
console.log(age); // 23