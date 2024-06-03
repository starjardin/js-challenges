function isCharUpper(char) {
	return char.toUpperCase() === char;
}

const capitals = function (word) {
	return word.split("").reduce((acc, curr, i) => {
		if (isCharUpper(curr)) {
			acc.push(i);
		}
		return acc;
	}, []);
};
