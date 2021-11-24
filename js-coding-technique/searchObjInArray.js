// Find a value in an array of objects in Javascript
/**
 *
 * @param {String} value
 * @param {String} key
 * @param {Array} arr
 * @returns item {Object}
 */
export const searchObjInArray = (value, key, arr) => {
	for (let i = 0; i < arr.length; i++) {
		if (arr[i][key] === value) {
			return arr[i];
		}
	}
};
