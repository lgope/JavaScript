// Longhand:

const welcomeMgs = 'You have logged in as ' + firstName + ' ' + lastName + '.';

const dbLink = 'http://' + host + ':' + port + '/' + database;

// Shorthand:

const welcomeMgs = `You have logged in as ${firstName} ${lastName}`;

const dbLink = `http://${host}:${port}/${database}`;

let a = 9;
let b = 10;
console.log(`Nineteen is ${a + b} and
not ${2 * a + b}.`);
