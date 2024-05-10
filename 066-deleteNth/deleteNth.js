// my solution

function deleteNth(arr, n) {
	let result = [];

	for (let i of arr) {
		if (result.filter((e) => e === i).length < n) {
			result.push(i);
		}
	}

	return result;
}

// Solution I learned from other people
function deleteNth(arr, x) {
	var cache = {};
	return arr.filter(function (n) {
		cache[n] = (cache[n] || 0) + 1;
		return cache[n] <= x;
	});
}
