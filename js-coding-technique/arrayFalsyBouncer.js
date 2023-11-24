const evenNumberSquared = [1,2,3,4].map(n => {
  if (n % 2 !== 0) {
    return null;
  }

  return n * n;
}).filter(Boolean);

console.log(evenNumberSquared)
