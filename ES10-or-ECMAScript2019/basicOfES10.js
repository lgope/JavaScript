// #1 Turning this array into a new array: [1,2,3,[4],[5]].
const array = [[1], [2], [3], [[[4]]], [[[5]]]];

console.log(array.flat(2)); // [ 1, 2, 3, [ 4 ], [ 5 ] ]

// #2 Turning this array into a new array: [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]
const greeting = [
  ['Hello', 'young', 'grasshopper!'],
  ['you', 'are'],
  ['learning', 'fast!']
];

console.log(greeting.flatMap(x => x.join(' '))); // [ 'Hello young grasshopper!', 'you are', 'learning fast!' ]

//#3 Turning the greeting array above into a string: 'Hello young grasshopper you are learning fast!'

console.log(greeting.flatMap(x => x.join(' ')).join(' ')); // Hello young grasshopper! you are learning fast!

//#4 Turning the trapped 3 number into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];

console.log(trapped.flat(Infinity)); // [ 3 ]
// Infintiy is actually a LARGE number in JavaScipt. It represents the maximum amount of memory that we can hold for a number! For more here: https://riptutorial.com/javascript/example/2337/infinity-and--infinity

//#5 Cleaning up this email to have no whitespaces. Make the answer be in a single line (return a new string):
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   ';

console.log(userEmail3.trimEnd().trimStart()); // cannotfillemailformcorrectly@gmail.com

//#6 Turning the below users (value is their ID number) into an array: [ [ 'user1', 18273 ], [ 'user2', 92833 ], [ 'user3', 90315 ] ]
const users = { user1: 18273, user2: 92833, user3: 90315 };

const usersArray = Object.entries(users);

//#7 changing the output array of the above to have the user's IDs multiplied by 2 -- Should output:[ [ 'user1', 36546 ], [ 'user2', 185666 ], [ 'user3', 180630 ] ]

updatedUsersArray = usersArray.map(user => [user[0], user[1] * 2]);

//#8 changing the output array of  #7 back into an object with all the users IDs updated to their new version. Should output: { user1: 36546, user2: 185666, user3: 180630 }

const updatedUsers = Object.fromEntries(updatedUsersArray);
console.log(updatedUsers); // { user1: 36546, user2: 185666, user3: 180630 }
