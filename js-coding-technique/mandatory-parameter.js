// Longhand:

function fooFunc(bar) {
  if (bar === undefined) {
    throw new Error('Missing parameter!');
  }
  return bar;
}

// Shorthand:

mandatory = () => {
  throw new Error('Missing parameter!');
};

fooFunc = (bar = mandatory()) => {
  return bar;
};
