/*****************************
 * Function Statements and Expressions
 */


// Function declaration
// function whatDoYouDo(job, firstName) {}


// Function expression
const whatDoYouDo = (job, firstName) => {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John')); // John teaches kids how to code
console.log(whatDoYouDo('designer', 'Jane')); // Jane designs beautiful websites
console.log(whatDoYouDo('retired', 'Mark')); // Mark does something else