// Longhand:

function sayHi(name) {
  console.log('Hi', name);
}

setTimeout(function() {
  console.log('Loading');
}, 2000);

list.forEach(function(item) {
  console.log(item);
});

// Shorthand:

sayHi = name => console.log('Hi', name);

setTimeout(() => console.log('Loading'), 2000);

list.forEach(item => console.log(item));
