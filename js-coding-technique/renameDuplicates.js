// 1
var array = [
{
	name: "Steven Smith",
	Country: "England",
	Age: 35
},
{
	name: "Hannah Reed",
	Country: "Scottland",
	Age: 23
},
{
	name: "Steven Smith",
	Country: "Spain",
	Age: 35
},
];

	let names = {};
	arr.forEach(obj => {
	  if (names[obj.name]) {
	    obj.name += "_" + ++names[obj.name];
	  } else {
	    names[obj.name] = 1;
	  }
	});


// 2
	function renameFiles(arr) {
		let count = {};
		arr.forEach((x, i) => {
			if (arr.indexOf(x) !== i) {
				let c = x in count ? (count[x] = count[x] + 1) : (count[x] = 1);
				let j = c + 1;
				let k = `${x }(${ j })`;

				while (arr.indexOf(k) !== -1) k = `${x }(${ ++j })`;
				arr[i] = k;
			}
		});
		return arr;
	}

	let res = renameFiles(['a(1)', 'a(6)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']);
	console.log(res);


// Other should update
function renameFiles(arrObj, renameField='contents') {
	let arr = [];
	if (renameField === 'contents') {
		arrObj.forEach((child) => {
			arr.push(child.properties[renameField]);
		});
	} else {
		arrObj.forEach((child) => {
			arr.push(child.properties.attributes[renameField]);
		});
	}

	let count = {};
	arr.forEach((x, i) => {
		if (arr.indexOf(x) !== i) {
			let c = x in count ? (count[x] = count[x] + 1) : (count[x] = 1);
			let j = c + 1;
			let k = `${x} (${j})`;

			while (arr.indexOf(k) !== -1) k = `${x} (${++j})`;
			arr[i] = k;
		}
	});

	for (let i = 0; i < arrObj.length; i++) {
		arrObj[i].properties.contents = arr[i];
	}

	return arrObj;
}

// let res = renameFiles(['a(1)', 'a(6)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']);
let res = renameFiles([
	{
		id: 1,
		properties: { contents: 'a' },
	},
	{
		id: 2,
		properties: { contents: 'a' },
	},
	{
		id: 3,
		properties: { contents: 'a' },
	},
	{
		id: 1,
		properties: { contents: 'a' },
	},
	{
		id: 1,
		properties: { contents: 'a (3)' },
	},
]);
console.log(res);

// function renameDuplicates(arr) {
// 	let count = {};
// 	arr.forEach((x, i) => {
// 		if (arr.indexOf(x) !== i) {
//       console.log(arr.indexOf(x), i);
// 			let c = x in count ? (count[x] = count[x] + 1) : (count[x] = 1);
// 			let j = c + 1;
// 			let k = `${x}(${j})`;

// 			while (arr.indexOf(k) !== -1) k = `${x}(${++j})`;
// 			arr[i] = k;
// 		}
// 	});
// 	return arr;
// }

// let res1 = renameDuplicates(['a(1)', 'a(6)', 'a(1)', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a']);
// console.log(res1);

const renameDuplicates = (childrens) => {
	// console.log({ inputChildrens: childrens });
	let temp = childrens.length;

	childrens = JSON.parse(JSON.stringify(childrens));
	let count = {};
	childrens.forEach((child) => {
		if (count[child.properties.contents]) {
			child.properties.contents += ` (${++count[child.properties.contents]})`;
			while (temp) {
				temp--;
				if (childrens[temp].properties.contents === child.properties.contents || count[child.properties.contents])
					child.properties.contents += ` (${1})`;
			}
		} else {
			count[child.properties.contents] = 1;
		}

		// if (count[child.properties.attributes.value]) {
		// 	child.properties.attributes.value += ` (${++count[child.properties.attributes.value]})`;
		// } else {
		// 	count[child.properties.attributes.value] = 1;
		// }
	});

	return childrens;
};

const res1 = renameDuplicates([
	{
		id: 1,
		properties: { contents: 'a' },
	},
	{
		id: 2,
		properties: { contents: 'a' },
	},
	{
		id: 3,
		properties: { contents: 'a' },
	},
	{
		id: 1,
		properties: { contents: 'a (2)' },
	},
	{
		id: 1,
		properties: { contents: 'a (3)' },
	},
]);

// console.log(res1);

