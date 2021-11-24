// Insert an item into an array at a specific index (Immutable insertion)
/**
 *
 * @param {Array} array
 * @param {Int} index
 * @param {*} items
 * @returns arr {New Array}
 *
 * @demo let bar = insertAt(array, 2, 'a', 'b')
 */
export const insertAt = (array, index, ...items) => [...array.slice(0, index), ...items, ...array.slice(index)];
