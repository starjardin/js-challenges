function repeats(arr) {
	let obj = {};
	let result = 0;

	for (let i of arr) {
		if (obj[i]) {
			obj[i] = obj[i] + 1;
		} else {
			obj[i] = 1;
		}
	}

	for (let i in obj) {
		if (obj[i] === 1) {
			result = result + Number(i);
		}
	}

	return result;
}

function repeats2(arr){
  return arr.filter(v => arr.indexOf(v) === arr.lastIndexOf(v)).reduce((a,b) => a + b, 0);
};
