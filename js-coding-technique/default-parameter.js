// Longhand:

function volumeFunc(a, b, c) {
  if (b === undefined) b = 3;
  if (c === undefined) c = 4;
  return a * b * c;
}

// Shorthand:

volumeFunc = (a, b = 3, c = 4) => a * b * c;

volumeFunc(2); //output: 24
