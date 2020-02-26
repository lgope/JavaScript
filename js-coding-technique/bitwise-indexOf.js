// Longhand:

if (arr.indexOf(item) > -1) {
  // Confirm item IS found
}

if (arr.indexOf(item) === -1) {
  // Confirm item IS NOT found
}

// Shorthand:

if (~arr.indexOf(item)) {
  // Confirm item IS found
}

if (!~arr.indexOf(item)) {
  // Confirm item IS NOT found
}
