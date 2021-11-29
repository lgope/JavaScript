const renameObjectKey = ({ oldObj, oldName, newName }) => {
	const newObj = {};
	Object.keys(oldObj).forEach((key) => {
		const value = oldObj[key];

		if (key === oldName) {
			newObj[newName] = value;
		} else {
			newObj[key] = value;
		}
	});

	return newObj;
};
