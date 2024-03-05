const chunk = function (arr, size) {
	let chunkedArray = [];
	let index = 0;

	while (index < arr.length) {
		chunkedArray = [...chunkedArray, arr.slice(index, index + size)];
		index += size;
	}

	return chunkedArray;
};
