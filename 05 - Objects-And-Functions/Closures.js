function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function (yearOfBirth) {
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(65);
var retirementIceland = retirement(67);

retirementUS(1990); // 40 years left until retirement.
retirementGermany(1990); // 39 years left until retirement.
retirementIceland(1990); // 41 years left until retirement.

// retirement(66)(1990); // 40 years left until retirement.


function interviewQuestion(job) {
    return function (name) {
        if (job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject do you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}


interviewQuestion('teacher')('Lakshman'); // What subject do you teach, Lakshman?