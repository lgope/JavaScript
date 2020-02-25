// longhand
function validate(values) {
  if (!values.first) return false;
  if (!values.last) return false;
  return true;
}

console.log(validate({ first: 'Bruce', last: 'Wayne' })); // true

// Shorthand:

// object validation rules
const schema = {
  first: {
    required: true
  },
  last: {
    required: true
  }
};

// universal validation function
const validate = (schema, values) => {
  for (field in schema) {
    if (schema[field].required) {
      if (!values[field]) {
        return false;
      }
    }
  }
  return true;
};

console.log(validate(schema, { first: 'Bruce' })); // false
console.log(validate(schema, { first: 'Bruce', last: 'Wayne' })); // true
