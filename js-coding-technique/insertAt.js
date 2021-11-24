// Insert an item into an array at a specific index (Immutable insertion)
/**
 * 
 * @param {Array} arr
 * @param {Int} index 
 * @param {*} values 
 * @returns arr {New Array}
 * 
 * @demo let bar = insertAt(arr, 2, 'a', 'b')
 */
export const insertAt = (arr, index) => {
	const items = Array.prototype.slice.call(arguments, 2);

	return [].concat(arr.slice(0, index), items, arr.slice(index));
};
