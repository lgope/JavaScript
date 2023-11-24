const arr = [{
  name: 'xyz',
  grade: 'xs'
}, {
  name: 'yaya',
  grade: 'xa'
}, {
  name: 'xf',
  frade: 'dd'
}, {
  name: 'a',
  grade: 'b'
}];


function filterIt(arr, searchKey) {
  return arr.filter(obj => Object.keys(obj).some(key => obj[key].includes(searchKey)));
}

console.log("find 'x'", filterIt(arr,"x"));
console.log("find 'a'", filterIt(arr,"a"));
console.log("find 'z'", filterIt(arr,"z"));
