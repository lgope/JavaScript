// catchAwait.js
const catchAwait = promise => (
  promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ error, data: null }))
);

module.exports = catchAwait;

// working file
const { getItems } = require('./api/items');
const catchAwait = require('./utils/catchAwait');

const allItems = async () => {
  const { error, data } = await catchAwait(getItems());
  if (!error) {
    // code
  }
  console.error(error);
}

allItems();
