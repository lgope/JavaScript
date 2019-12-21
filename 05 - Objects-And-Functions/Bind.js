// Bind, call and apply




var lakshman = {
    name: 'Lakshman',
    age: 21,
    job: 'Student',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old.');
        } else if (style === 'friendly') {
            console.log('Hey! What\'s up? I\'m ' + this.name + ', I\'m a ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

lakshman.presentation('formal', 'morning'); // Good morning, Ladies and gentlemen! I'm Lakshman, I'm a Student and I'm 21 years old.
lakshman.presentation.call(emily, 'friendly', 'afternoon'); // Hey! What's up? I'm Emily, I'm a designer and I'm 35 years old. Have a nice afternoon.

//lakshman.presentation.apply(emily, ['friendly', 'afternoon']);

var lakshmanFriendly = lakshman.presentation.bind(lakshman, 'friendly');

lakshmanFriendly('morning'); // Hey! What's up? I'm Lakshman, I'm a Student and I'm 21 years old. Have a nice morning.
lakshmanFriendly('night'); // Hey! What's up? I'm Lakshman, I'm a Student and I'm 21 years old. Have a nice night.

var emilyFormal = lakshman.presentation.bind(emily, 'formal');

emilyFormal('afternoon'); // Good afternoon, Ladies and gentlemen! I'm Emily, I'm a designer and I'm 35 years old.


// Another cool example
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}
var ages = arrayCalc(years, calculateAge);

var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));

console.log(ages); // [ 26, 51, 79, 11, 18 ]
console.log(fullJapan); // [ true, true, true, false, false ]