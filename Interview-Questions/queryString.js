/**
 * 1st case
 * input: '?foo=hello&bar=world'
 output: {
    foo: 'hello',
    bar: 'world'
 }

 * 2nd case
 * input: '?' (if there is no query after ?)
   output: should be an empty object like this 👉🏻 {}

 * 3rd case
 * input: '?foo=hello&bar=world&baz' (if there is no equal sign)
  output: {
    foo: 'hello',
    bar: 'world',
    baz: 'true' // send by default true as string
 }

 * 4th case
 * input: '?foo=hello&bar=world&baz&foo=again' (if there is value with the same key, have to save values as array item)
  output: {
    foo: ['hello', 'again], // save value as array item whick belong to save key
    bar: 'world',
    baz: 'true'
}

 */

const formatQueryString = (str) => {
  //   strip off ? and then split by &
  const query = str.slice(1).split("&");
  const resObj = {};

  //   iterate through key value pairs, split on = , and save in res object as key value
  for (const pair of query) {
    let [key, value= 'true'] = pair.split("="); // checking value is truthy or undefined else befault 'true' value (3rd case)

    // check if key truthy else send empty object (2nd case)
    if (key) {
      // if there is value with the same key, have to save values as array item (4th case)
      resObj[key] = resObj[key]
        ? typeof resObj[key] === "string"
          ? [resObj[key], value]
          : [...resObj[key], value]
        : value;

      //   resObj[key] = resObj[key]
      //     ? Array.isArray(resObj[key])
      //     ? [...resObj[key], value]
      //       : [resObj[key], value]
      //     : value;
    }
  }

  return resObj;
};

console.log("1st case: ", formatQueryString("?foo=hello&bar=world"), {
    foo: 'hello',
    bar: 'world'
 });
// console.log("2nd case: ", formatQueryString("?"), {}); // if there is no query after ?
// console.log("3rd case: ", formatQueryString("?foo=hello&bar=world&baz"), {
//   foo: "hello",
//   bar: "world",
//   baz: "true",
// });

console.log(
  "4th case: ",
  formatQueryString("?foo=hello&bar=world&baz&foo=again&foo=ok&bar=again&baz&dummy&data=earth"),
  {
    foo: [ 'hello', 'again', 'ok' ],
  bar: [ 'world', 'again' ],
  baz: [ 'true', 'true' ],
  dummy: 'true',
  data: 'earth'
  }
);

// test case
// console.log("4th case: ", formatQueryString("?foo=hello&foo"), {
//   foo: ["hello", "true"],
// });
