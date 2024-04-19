function sortArray(array) {
	const odds = array.filter((e) => e % 2 !== 0).sort((a, b) => a - b);

	for (let i = 0; i < array.length; i++) {
		if (array[i] % 2 !== 0) {
			array[i] = odds.shift();
		}
	}

	return array;
}
