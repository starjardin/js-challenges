function sumArray(array) {
	if (!array) return 0;
	array.sort((a, b) => a - b);
	array.pop();
	array.shift();
	return array.reduce((a, b) => a + b, 0);
}
