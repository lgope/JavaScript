var firstName = 'John';
var age = 20;

if (age < 13) { // if age is less than 13 then this condition will execute
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // if age is greater than or equal to 13 and age is less than 20 then this condition will execute
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) { // if age is greater than or equal to 20 and age is less than 30 then this condition will execute
    console.log(firstName + ' is a young man.');
} else { // if above condition's false then else statment execuete
    console.log(firstName + ' is a man.');
}