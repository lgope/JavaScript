/**
 * make query string from an object
 * 1st case
 * input: {
    foo: 'hello',
    bar: 'world',
    baz: 'true'
}
* output: '?foo=hello&bar=world&baz'
*/

const makeQueryString = (obj) => {
  const queries = [];

  // check value if true then concate only key else concate key & value.
  const insertStr = (key, value) => {
    queries.push(`${key}${value === "true" ? "" : "=" + value}`);
  };
  console.log(1, Object.entries(obj));

  for (let [key, value] of Object.entries(obj)) {
    // if value is string then
    if (typeof value === "string") value = [value];

    for (let item of value) {
      insertStr(key, item);
    }
  }

  return `?${queries.join("&")}`;
};

// console.log(
//   makeQueryString({
//     foo: "hello",
//     bar: "world",
//     baz: "true",
//   })
// );

console.log(
  makeQueryString({
    foo: ["hello", "earth"],
    bar: "world",
    baz: "true",
  })
);

console.log(makeQueryString({}));

// encodeURIComponent()
// decodeURIComponent()
