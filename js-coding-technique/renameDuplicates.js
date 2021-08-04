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
