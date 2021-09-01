export const removeEmptyKeys = (obj) =>
	Object.entries(obj).reduce(
		(accumulator, [key, value]) => (value ? ((accumulator[key] = value), accumulator) : accumulator),
		{},
	);
