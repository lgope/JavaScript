// catchAwait.js
const catchAwait = promise =>
  promise
    .then(data => ({ data, error: null }))
    .catch(error => ({ error, data: null }));

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
};

allItems();

/**
 * Another way
 */

// catchAsync.js
module.exports = fn => {
  return (req, res, next) => {
    fn(req, res, next).catch(next);
  };
};

// createOne.js

exports.createOne = Model =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        data: doc,
      },
    });
  });
