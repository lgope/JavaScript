// Longhand:

function myFunction(myString, myNumber, myObject, myArray, myBoolean) {
  // do something...
}
myFunction('String', 1, [], {}, true);

/** */

// Shorthand
function myFunction() {
  console.log(arguments.length); // Returns 5
  for (i = 0; i < arguments.length; i++) {
    console.log(typeof arguments[i]); // Returns string, number, object, object, boolean
  }
}
myFunction('String', 1, [], {}, true);
