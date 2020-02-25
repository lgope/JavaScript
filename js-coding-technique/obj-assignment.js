// longhand
let fname = { firstName: 'Black' };
let lname = { lastName: 'Panther' };

// shorthand
let full_names = Object.assign(fname, lname);

// another
let full_names = { ...fname, ...lname };
